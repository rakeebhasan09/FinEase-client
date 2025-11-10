import { Calendar, FileEdit } from "lucide-react";
import { useState } from "react";
import { useLoaderData, useNavigate } from "react-router";
import useAxios from "../../hooks/useAxios";
import Swal from "sweetalert2";

const UpdateTransaction = () => {
	const transaction = useLoaderData();
	const [type, setType] = useState(transaction.transaction_type);
	const [category, setCategory] = useState(transaction.transaction_category);
	const navigate = useNavigate();
	const axiosInstance = useAxios();
	const incomeCategories = [
		"Salary",
		"Freelance",
		"Investment",
		"Business",
		"Other Income",
	];
	const expenseCategories = [
		"Food",
		"Transport",
		"Shopping",
		"Bills",
		"Entertainment",
		"Healthcare",
		"Education",
		"Other",
	];

	const trxDate = new Date(transaction.transaction_date).toLocaleDateString(
		"en-GB",
		{
			day: "2-digit",
			month: "short",
			year: "2-digit",
		}
	);

	// Update Handler
	const handleUpdate = (e) => {
		e.preventDefault();
		const transaction_type = e.target.type.value;
		const transaction_category = e.target.category.value;
		const transaction_amount = e.target.amount.value;
		const description = e.target.description.value;
		const transaction_date = e.target.date.value;

		const updateInfo = {
			transaction_type,
			transaction_category,
			transaction_amount,
			description,
			transaction_date,
		};

		axiosInstance
			.patch(`/transactions/${transaction._id}`, updateInfo)
			.then((data) => {
				if (data.data.modifiedCount) {
					Swal.fire({
						position: "center",
						icon: "success",
						title: "Your transaction has been updated",
						showConfirmButton: false,
						timer: 1500,
					});
					navigate(`/transaction/${transaction._id}`);
				}
			});
	};

	return (
		<div className="flex items-center justify-center py-10 md:py-14 lg:py-20 px-4">
			<div className="bg-white dark:bg-[#1D232A] border border-[#E0DAD1] shadow-lg rounded-2xl p-8 w-full max-w-2xl">
				{/* Header */}
				<div className="flex items-center gap-3 mb-6">
					<div className="p-2 bg-blue-100 rounded-lg">
						<FileEdit className="text-blue-600 w-5 h-5" />
					</div>
					<div>
						<h2 className="text-xl font-semibold">
							Update Transaction
						</h2>
						<p className="text-sm">Edit your transaction details</p>
					</div>
				</div>

				{/* Form */}
				<form onSubmit={handleUpdate} className="space-y-5">
					{/* Transaction Type */}
					<div>
						<label className="text-sm font-medium">
							Transaction Type{" "}
							<span className="text-red-500">*</span>
						</label>

						<select
							defaultValue={type}
							onChange={(e) => setType(e.target.value)}
							name="type"
							className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-2.5 bg-gray-50 dark:bg-[#1D232A] focus:ring-2 focus:ring-blue-400"
						>
							<option value="">Select type</option>
							<option value="income">Income</option>
							<option value="expense">Expense</option>
						</select>
					</div>

					{/* Category */}
					<div>
						<label className="text-sm font-medium">
							Category <span className="text-red-500">*</span>
						</label>

						<select
							defaultValue={category}
							onChange={(e) => setCategory(e.target.value)}
							name="category"
							className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-2.5 bg-gray-50 dark:bg-[#1D232A] focus:ring-2 focus:ring-blue-400"
						>
							<option value="">
								{type === ""
									? "Select type first"
									: "Select category"}
							</option>

							{type === "income" &&
								incomeCategories.map((cat) => (
									<option key={cat} value={cat.toLowerCase()}>
										{cat}
									</option>
								))}

							{type === "expense" &&
								expenseCategories.map((cat) => (
									<option key={cat} value={cat.toLowerCase()}>
										{cat}
									</option>
								))}
						</select>
					</div>

					{/* Amount */}
					<div>
						<label className="block text-sm font-medium mb-1">
							Amount ($) <span className="text-red-500">*</span>
						</label>
						<input
							type="number"
							name="amount"
							defaultValue={transaction.transaction_amount}
							className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
							placeholder="Enter amount"
						/>
					</div>

					{/* Description */}
					<div>
						<label className="block text-sm font-medium mb-1">
							Description
						</label>
						<textarea
							name="description"
							rows="3"
							defaultValue={transaction.description}
							className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
						></textarea>
					</div>

					{/* Date */}
					<div>
						<label className="block text-sm font-medium mb-1">
							Date <span className="text-red-500">*</span>
						</label>
						<div className="relative">
							<Calendar className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
							<input
								name="date"
								defaultValue={trxDate}
								className="w-full border border-gray-300 rounded-lg pl-10 pr-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
							/>
						</div>
					</div>

					{/* Buttons */}
					<div className="flex flex-col md:flex-row gap-4 justify-between items-center pt-3">
						<button
							type="submit"
							className="flex cursor-pointer items-center justify-center gap-2 common-btn text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition-all"
						>
							<FileEdit className="w-4 h-4" />
							Update Transaction
						</button>
						<button
							onClick={() => navigate(-1)}
							type="button"
							className="border border-gray-300 px-5 py-2 rounded-lg hover:bg-gray-50 transition-all"
						>
							Cancel
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default UpdateTransaction;
