import { useState } from "react";
import {
	BarChart,
	Bar,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	ResponsiveContainer,
} from "recharts";

const FinancialBarChart = () => {
	const [category, setCategory] = useState("All Categories");

	const categories = [
		"All Categories",
		"Food",
		"Transport",
		"Bills",
		"Entertainment",
		"Shopping",
	];

	const data = [
		{ month: "Jan", income: 6200, expenses: 3200 },
		{ month: "Feb", income: 6500, expenses: 3400 },
		{ month: "Mar", income: 6100, expenses: 3100 },
		{ month: "Apr", income: 6300, expenses: 3300 },
		{ month: "May", income: 6400, expenses: 3200 },
		{ month: "Jun", income: 6700, expenses: 3600 },
	];

	return (
		<section className="py-10 md:py-14 lg:py-20 px-6">
			<div className="max-w-6xl mx-auto">
				{/* Filters */}
				<div className="flex flex-col sm:flex-row gap-4 mb-8">
					<div className="w-full sm:w-64">
						<label className="block text-sm font-medium text-gray-600 mb-1">
							Filter by Category
						</label>
						<select
							value={category}
							onChange={(e) => setCategory(e.target.value)}
							className="w-full border border-gray-200 rounded-lg px-3 py-2 bg-white text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
						>
							{categories.map((cat) => (
								<option key={cat}>{cat}</option>
							))}
						</select>
					</div>
				</div>

				{/* Chart Card */}
				<div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
					<h3 className="text-lg font-semibold text-gray-800 mb-1">
						Monthly Income vs Expenses
					</h3>
					<p className="text-sm text-gray-500 mb-4">
						Track your financial flow over time
					</p>

					<div className="h-80">
						<ResponsiveContainer width="100%" height="100%">
							<BarChart
								data={data}
								margin={{
									top: 10,
									right: 30,
									left: 0,
									bottom: 0,
								}}
							>
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
									dataKey="expenses"
									fill="#ef4444"
									name="Expenses"
								/>
							</BarChart>
						</ResponsiveContainer>
					</div>
				</div>
			</div>
		</section>
	);
};

export default FinancialBarChart;
