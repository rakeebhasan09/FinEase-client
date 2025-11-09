import { useEffect, useMemo, useState } from "react";
import axios from "axios";
import {
	ResponsiveContainer,
	BarChart,
	Bar,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	PieChart,
	Pie,
	Cell,
} from "recharts";

const FinancialDashboard = () => {
	// UI Filters
	const [categoryFilter, setCategoryFilter] = useState("All Categories");
	const [monthFilter, setMonthFilter] = useState("All Months");

	// Data states
	const [transactions, setTransactions] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	// ✅ Fetch data from your backend (replace URL with your API endpoint)
	useEffect(() => {
		setLoading(true);
		axios
			.get(
				"http://localhost:5170/transactions?email=mdrakeebhasan1@gmail.com"
			)
			.then((res) => {
				// Normalize transactions (convert strings to numbers/dates)
				const formatted = res.data.map((t) => ({
					...t,
					amount: Number(t.transaction_amount),
					category: t.transaction_category,
					type: t.transaction_type,
					date: new Date(t.transaction_date),
				}));
				setTransactions(formatted);
			})
			.catch((err) => {
				console.error(err);
				setError(err);
			})
			.finally(() => setLoading(false));
	}, []);

	// Helper functions to handle month labels
	const getMonthKey = (dateObj) => {
		const y = dateObj.getFullYear();
		const m = String(dateObj.getMonth() + 1).padStart(2, "0");
		return `${y}-${m}`; // e.g. "2025-11"
	};

	const monthKeyToLabel = (key) => {
		const [y, m] = key.split("-");
		const d = new Date(Number(y), Number(m) - 1, 1);
		return d.toLocaleString("default", { month: "short" }) + " " + y;
	};

	// ✅ Extract unique categories and months from the dataset
	const { categoriesList, monthsList } = useMemo(() => {
		const catSet = new Set();
		const monthSet = new Set();

		transactions.forEach((t) => {
			if (t.category) catSet.add(t.category);
			if (t.date) monthSet.add(getMonthKey(t.date));
		});

		return {
			categoriesList: ["All Categories", ...Array.from(catSet).sort()],
			monthsList: ["All Months", ...Array.from(monthSet).sort()],
		};
	}, [transactions]);

	// ✅ Apply filtering
	const filteredTransactions = useMemo(() => {
		return transactions.filter((t) => {
			const matchCategory =
				categoryFilter === "All Categories" ||
				t.category === categoryFilter;
			const matchMonth =
				monthFilter === "All Months" ||
				getMonthKey(t.date) === monthFilter;
			return matchCategory && matchMonth;
		});
	}, [transactions, categoryFilter, monthFilter]);

	// ✅ Compute monthly totals (Bar Chart)
	const monthlyTotals = useMemo(() => {
		const map = {};
		transactions.forEach((t) => {
			const mk = getMonthKey(t.date);
			if (!map[mk])
				map[mk] = { income: 0, expense: 0, month: monthKeyToLabel(mk) };
			if (t.type === "income") map[mk].income += t.amount;
			else if (t.type === "expense") map[mk].expense += t.amount;
		});
		return Object.values(map);
	}, [transactions]);

	// ✅ Compute category breakdown (Pie Chart)
	const categoryBreakdown = useMemo(() => {
		const map = {};
		filteredTransactions.forEach((t) => {
			if (t.type !== "expense") return; // show only expenses
			if (!map[t.category]) map[t.category] = 0;
			map[t.category] += t.amount;
		});
		return Object.keys(map).map((key) => ({
			name: key,
			value: map[key],
		}));
	}, [filteredTransactions]);

	// ✅ Quick summary (for filtered view)
	const totals = useMemo(() => {
		let income = 0,
			expense = 0;
		filteredTransactions.forEach((t) => {
			if (t.type === "income") income += t.amount;
			else if (t.type === "expense") expense += t.amount;
		});
		return { income, expense, balance: income - expense };
	}, [filteredTransactions]);

	const PIE_COLORS = ["#60a5fa", "#f43f5e", "#22c55e", "#f59e0b", "#a78bfa"];

	if (loading)
		return (
			<p className="text-center py-10 text-gray-500">Loading data...</p>
		);
	if (error)
		return <p className="text-center text-red-600">Error loading data</p>;

	return (
		<section className="py-10 px-6 max-w-6xl mx-auto">
			{/* Filters */}
			<div className="flex flex-col sm:flex-row gap-4 mb-6">
				<div className="w-full sm:w-64">
					<label className="block text-sm font-medium text-gray-600 mb-1">
						Filter by Category
					</label>
					<select
						value={categoryFilter}
						onChange={(e) => setCategoryFilter(e.target.value)}
						className="w-full border border-gray-200 rounded-lg px-3 py-2"
					>
						{categoriesList.map((cat) => (
							<option key={cat}>{cat}</option>
						))}
					</select>
				</div>

				<div className="w-full sm:w-64">
					<label className="block text-sm font-medium text-gray-600 mb-1">
						Filter by Month
					</label>
					<select
						value={monthFilter}
						onChange={(e) => setMonthFilter(e.target.value)}
						className="w-full border border-gray-200 rounded-lg px-3 py-2"
					>
						{monthsList.map((m) => (
							<option key={m}>{m}</option>
						))}
					</select>
				</div>
			</div>

			{/* Summary */}
			<div className="flex flex-wrap gap-4 mb-8">
				<div className="bg-green-50 border border-green-200 p-4 rounded-lg flex-1 min-w-[200px]">
					<p className="text-sm text-gray-600">Total Income</p>
					<p className="text-xl font-bold text-green-600">
						${totals.income.toLocaleString()}
					</p>
				</div>
				<div className="bg-red-50 border border-red-200 p-4 rounded-lg flex-1 min-w-[200px]">
					<p className="text-sm text-gray-600">Total Expenses</p>
					<p className="text-xl font-bold text-red-600">
						${totals.expense.toLocaleString()}
					</p>
				</div>
				<div className="bg-blue-50 border border-blue-200 p-4 rounded-lg flex-1 min-w-[200px]">
					<p className="text-sm text-gray-600">Net Balance</p>
					<p
						className={`text-xl font-bold ${
							totals.balance >= 0
								? "text-green-600"
								: "text-red-600"
						}`}
					>
						${totals.balance.toLocaleString()}
					</p>
				</div>
			</div>

			{/* Charts Section */}
			<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
				{/* Bar Chart */}
				<div className="lg:col-span-2 bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
					<h3 className="text-lg font-semibold mb-2">
						Income vs Expenses
					</h3>
					<div className="h-80">
						<ResponsiveContainer width="100%" height="100%">
							<BarChart data={monthlyTotals}>
								<CartesianGrid strokeDasharray="3 3" />
								<XAxis dataKey="month" />
								<YAxis />
								<Tooltip />
								<Legend />
								<Bar
									dataKey="income"
									fill="#22c55e"
									name="Income"
								/>
								<Bar
									dataKey="expense"
									fill="#ef4444"
									name="Expenses"
								/>
							</BarChart>
						</ResponsiveContainer>
					</div>
				</div>

				{/* Pie Chart */}
				<div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
					<h3 className="text-lg font-semibold mb-2">
						Expenses by Category
					</h3>
					<div className="h-64">
						{categoryBreakdown.length ? (
							<ResponsiveContainer width="100%" height="100%">
								<PieChart>
									<Pie
										data={categoryBreakdown}
										dataKey="value"
										nameKey="name"
										outerRadius={90}
										label
									>
										{categoryBreakdown.map((_, i) => (
											<Cell
												key={i}
												fill={
													PIE_COLORS[
														i % PIE_COLORS.length
													]
												}
											/>
										))}
									</Pie>
									<Tooltip />
								</PieChart>
							</ResponsiveContainer>
						) : (
							<p className="text-gray-500 text-center pt-20">
								No expense data for selected filter
							</p>
						)}
					</div>
				</div>
			</div>
		</section>
	);
};

export default FinancialDashboard;
