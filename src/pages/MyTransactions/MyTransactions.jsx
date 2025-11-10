import { Edit2, Eye, Trash2, TrendingDown, TrendingUp } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import useAxios from "../../hooks/useAxios";

const MyTransactions = () => {
	const { user } = useAuth();
	const [transactions, setTransactions] = useState([]);
	const axiosInstance = useAxios();

	const [sortBy, setSortBy] = useState("");
	const [sortOrder, setSortOrder] = useState("desc");

	useEffect(() => {
		fetch(
			`https://fin-ease-server.vercel.app/transactions?email=${user.email}`
		)
			.then((res) => res.json())
			.then((data) => {
				setTransactions(data || []);
			})
			.catch((err) => {
				console.error("Error fetching transactions:", err);
			});
	}, [user]);

	const handleDeleteTransaction = (id) => {
		Swal.fire({
			title: "Are you sure?",
			text: `You won't be able to revert this!`,
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: "Yes, delete it!",
		}).then((result) => {
			if (result.isConfirmed) {
				axiosInstance
					.delete(`/transactions/${id}`)
					.then((data) => {
						if (data.data.deletedCount) {
							setTransactions((prev) =>
								prev.filter((item) => item._id !== id)
							);
							Swal.fire({
								title: "Deleted!",
								text: "Your file has been deleted.",
								icon: "success",
							});
						}
					})
					.catch((err) => {
						console.error("Delete failed:", err);
						Swal.fire({
							title: "Error",
							text: "Could not delete",
							icon: "error",
						});
					});
			}
		});
	};

	const sortedTransactions = useMemo(() => {
		const arr = [...transactions];

		const getAmount = (item) => {
			const amt = item.transaction_amount;
			if (typeof amt === "number") return amt;
			if (!amt) return 0;
			const cleaned = String(amt).replace(/[^0-9.-]+/g, "");
			return parseFloat(cleaned) || 0;
		};

		const getTime = (item) => {
			const d = item.transaction_date || item.created_at;
			const parsed = new Date(d);
			return isNaN(parsed.getTime()) ? 0 : parsed.getTime();
		};

		if (!sortBy) return arr;

		arr.sort((a, b) => {
			if (sortBy === "date") {
				const ta = getTime(a);
				const tb = getTime(b);
				return sortOrder === "desc" ? tb - ta : ta - tb;
			}

			if (sortBy === "amount") {
				const aa = getAmount(a);
				const ab = getAmount(b);
				return sortOrder === "desc" ? ab - aa : aa - ab;
			}

			return 0;
		});

		return arr;
	}, [transactions, sortBy, sortOrder]);

	return (
		<section className="py-10 md:py-14 lg:py-20 px-6">
			<div className="max-w-6xl mx-auto">
				<h2 className="text-3xl font-bold">My Transactions</h2>
				<p className="mb-8">View and manage all your transactions</p>
				<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
					<div className="text-sm">
						Showing{" "}
						<span className="font-medium">
							{sortedTransactions.length}
						</span>{" "}
						transactions
					</div>

					{/* Right: sorting selects */}
					<div className="flex items-center gap-3">
						{/* Sort By */}
						<label className="flex items-center gap-2 text-sm">
							<span>Sort by:</span>
							<select
								value={sortBy}
								onChange={(e) => setSortBy(e.target.value)}
								className="border dark:bg-[#1D232A] dark:text-white rounded px-3 py-1"
							>
								<option value="">None</option>
								<option value="date">Date</option>
								<option value="amount">Amount</option>
							</select>
						</label>

						{/* Sort Order */}
						<label className="flex items-center gap-2 text-sm">
							<span className="sr-only">Sort order</span>
							<select
								value={sortOrder}
								onChange={(e) => setSortOrder(e.target.value)}
								className="border dark:bg-[#1D232A] dark:text-white rounded px-3 py-1"
							>
								<option value="desc">
									{sortBy === "amount"
										? "High → Low"
										: "Newest First"}
								</option>
								<option value="asc">
									{sortBy === "amount"
										? "Low → High"
										: "Oldest First"}
								</option>
							</select>
						</label>
					</div>
				</div>

				<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
					{sortedTransactions.map((t) => (
						<div
							key={t._id}
							className="rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition"
						>
							<div className="flex items-center gap-2 mb-2">
								<div
									className={`p-2 rounded-lg ${
										t.transaction_type === "income"
											? "bg-green-100 text-green-600"
											: "bg-red-100 text-red-500"
									}`}
								>
									{t.transaction_type === "income" ? (
										<TrendingUp size={20} />
									) : (
										<TrendingDown size={20} />
									)}
								</div>
								<span
									className={`text-xs font-medium px-2 py-0.5 rounded ${
										t.transaction_type === "income"
											? "bg-blue-100 text-blue-700"
											: "bg-red-100 text-red-600"
									}`}
								>
									{t.transaction_type}
								</span>
							</div>

							<h3 className="text-lg font-semibold capitalize">
								{t.transaction_category}
							</h3>
							<p
								className={`text-xl font-bold mt-2 ${
									t.transaction_type === "income"
										? "text-green-600"
										: "text-red-500"
								}`}
							>
								$
								{Number(
									String(t.transaction_amount).replace(
										/[^0-9.-]+/g,
										""
									)
								).toLocaleString()}
							</p>
							<p className="text-sm mt-1">
								{new Date(
									t.transaction_date
								).toLocaleDateString("en-GB", {
									day: "2-digit",
									month: "short",
									year: "2-digit",
								})}
							</p>

							<div className="flex items-center gap-2 mt-4">
								{/* Transaction Details */}
								<Link
									to={`/transaction/${t._id}`}
									className="flex items-center gap-1 text-sm font-medium border border-gray-200 rounded-lg px-3 py-1.5 transition"
								>
									<Eye size={14} /> Details
								</Link>
								{/* Edit Transaction */}
								<Link
									to={`/transaction/update/${t._id}`}
									className="p-2 rounded-lg border border-gray-200 transition"
								>
									<Edit2
										size={14}
										className="text-gray-600 dark:text-white"
									/>
								</Link>
								{/* Delete Transaction */}
								<button
									onClick={() =>
										handleDeleteTransaction(t._id)
									}
									className="p-2 rounded-lg cursor-pointer border border-gray-200 transition"
								>
									<Trash2
										size={14}
										className="text-red-500"
									/>
								</button>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default MyTransactions;
