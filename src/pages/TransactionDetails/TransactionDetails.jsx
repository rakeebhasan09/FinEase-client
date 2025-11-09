import {
	ArrowLeft,
	Calendar,
	Tag,
	FileText,
	DollarSign,
	Edit2,
} from "lucide-react";
import { use } from "react";
import { useLoaderData, useNavigate, useParams } from "react-router";
import { AuthContext } from "../../contexts/AuthContext";
const TransactionDetails = () => {
	const transactions = useLoaderData();
	const navigate = useNavigate();
	const { user } = use(AuthContext);

	const { id } = useParams();

	const transaction = transactions.find(
		(transaction) => transaction.id === Number(id)
	);
	console.log(transaction);
	return (
		<section className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100 py-10 px-6">
			<div className="max-w-3xl mx-auto">
				{/* Back link */}
				<button
					onClick={() => navigate(-1)}
					className="flex items-center gap-2 text-sm text-gray-600 hover:text-blue-600 mb-6"
				>
					<ArrowLeft size={16} />
					Back to Transactions
				</button>

				{/* Card */}
				<div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
					{/* Header */}
					<div className="flex justify-between items-start mb-6">
						<div className="flex items-center gap-2">
							<div
								className={`p-2 rounded-lg ${
									transaction.type === "income"
										? "bg-green-100 text-green-600"
										: "bg-red-100 text-red-500"
								}`}
							>
								<FileText size={20} />
							</div>
							<span
								className={`text-xs font-medium px-2 py-0.5 rounded ${
									transaction.type === "income"
										? "bg-blue-100 text-blue-700"
										: "bg-red-100 text-red-600"
								}`}
							>
								{transaction.type}
							</span>
						</div>

						<p
							className={`text-2xl font-bold ${
								transaction.type === "income"
									? "text-green-600"
									: "text-red-500"
							}`}
						>
							{transaction.amount}
						</p>
					</div>

					<h2 className="text-2xl font-semibold text-gray-800 mb-6 capitalize">
						{transaction.title}
					</h2>

					<hr className="border-gray-200 mb-6" />

					{/* Details */}
					<div className="grid sm:grid-cols-2 gap-6 mb-6 text-sm">
						<div className="flex items-start gap-2">
							<Calendar
								size={18}
								className="text-gray-400 mt-0.5"
							/>
							<div>
								<p className="text-gray-500">Date</p>
								<p className="font-medium text-gray-800">
									{transaction.date}
								</p>
							</div>
						</div>

						<div className="flex items-start gap-2">
							<Tag size={18} className="text-gray-400 mt-0.5" />
							<div>
								<p className="text-gray-500">Category</p>
								<p className="font-medium text-gray-800 capitalize">
									{transaction.title}
								</p>
							</div>
						</div>

						<div className="flex items-start gap-2">
							<DollarSign
								size={18}
								className="text-gray-400 mt-0.5"
							/>
							<div>
								<p className="text-gray-500">
									Total in Category
								</p>
								<p className="font-medium text-gray-800">
									{transaction.totalInCategory}
								</p>
							</div>
						</div>

						<div className="flex items-start gap-2">
							<FileText
								size={18}
								className="text-gray-400 mt-0.5"
							/>
							<div>
								<p className="text-gray-500">Transaction ID</p>
								<p className="font-medium text-gray-800">
									#{transaction.id}
								</p>
							</div>
						</div>
					</div>

					<hr className="border-gray-200 mb-6" />

					{/* Description */}
					<div className="mb-6">
						<p className="text-gray-500 text-sm mb-1">
							Description
						</p>
						<p className="text-gray-800">
							{transaction.description}
						</p>
					</div>

					<hr className="border-gray-200 mb-6" />

					{/* Created By */}
					<div className="bg-gray-50 rounded-xl p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-sm">
						<div>
							<p className="text-gray-500">Created By</p>
							<p className="font-medium text-gray-800">
								{/* {transaction.createdBy} */}
								{user.displayName}
							</p>
						</div>
						<div>
							<p className="text-gray-500">Email</p>
							<p className="font-medium text-gray-800">
								{/* {transaction.email} */}
								{user.email}
							</p>
						</div>
					</div>

					{/* Buttons */}
					<div className="flex flex-col sm:flex-row gap-3 mt-6">
						{/* <button className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2.5 rounded-lg transition">
							<Edit2 size={16} /> Edit Transaction
						</button> */}
						<button
							onClick={() => navigate(-1)}
							className="border common-btn cursor-pointer text-white border-gray-200 hover:bg-gray-100 font-medium px-4 py-2.5 rounded-lg transition"
						>
							View All
						</button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default TransactionDetails;
