import { PiggyBank, Target, LineChart } from "lucide-react";

const tips = [
	{
		icon: <PiggyBank className="w-6 h-6 text-blue-500" />,
		title: "50/30/20 Rule",
		desc: "Allocate 50% of income to needs, 30% to wants, and 20% to savings and debt repayment for balanced finances.",
		bg: "bg-blue-100",
	},
	{
		icon: <Target className="w-6 h-6 text-green-500" />,
		title: "Set Clear Goals",
		desc: "Define specific, measurable financial goals with deadlines to stay motivated and track your progress effectively.",
		bg: "bg-green-100",
	},
	{
		icon: <LineChart className="w-6 h-6 text-emerald-500" />,
		title: "Track Everything",
		desc: "Monitor all expenses, no matter how small. Understanding spending patterns is key to better financial decisions.",
		bg: "bg-emerald-100",
	},
];

const BudgetingTips = () => {
	return (
		<section className="py-20 px-6">
			<div className="max-w-6xl mx-auto text-center">
				{/* Heading */}
				<h2 className="text-3xl md:text-4xl font-bold mb-3">
					Smart Budgeting Tips
				</h2>
				<p className="mb-12">
					Master your money with these proven strategies
				</p>

				{/* Tips Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{tips.map((tip, index) => (
						<div
							key={index}
							className="border border-gray-200 bg-white dark:bg-[#1D232A] rounded-xl p-6 text-left shadow-sm hover:shadow-md transition"
						>
							<div
								className={`w-12 h-12 flex items-center justify-center rounded-xl mb-4 ${tip.bg}`}
							>
								{tip.icon}
							</div>
							<h3 className="text-lg font-semibold mb-2">
								{tip.title}
							</h3>
							<p className="text-sm leading-relaxed">
								{tip.desc}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default BudgetingTips;
