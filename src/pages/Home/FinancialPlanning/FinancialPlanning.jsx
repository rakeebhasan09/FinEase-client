import { ShieldCheck, Target, Sparkles } from "lucide-react";

const features = [
	{
		icon: <ShieldCheck className="w-5 h-5 text-blue-500" />,
		title: "Financial Security",
		desc: "Build an emergency fund and protect yourself from unexpected expenses.",
	},
	{
		icon: <Target className="w-5 h-5 text-green-500" />,
		title: "Achieve Your Goals",
		desc: "Whether it's buying a home, starting a business, or retiring early—make it happen.",
	},
	{
		icon: <Sparkles className="w-5 h-5 text-emerald-500" />,
		title: "Reduce Stress",
		desc: "Take control of your finances and eliminate money-related anxiety.",
	},
];

const FinancialPlanning = () => {
	return (
		<section className="bg-gray-50 pb-20 px-6">
			<div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
				{/* Left Column */}
				<div>
					<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
						Why Financial Planning Matters
					</h2>
					<p className="text-gray-600 mb-8 leading-relaxed">
						Financial planning isn't just about saving money—it's
						about creating the life you want to live. With proper
						planning, you can achieve your dreams while maintaining
						peace of mind.
					</p>

					{/* Features */}
					<div className="space-y-5 mb-8">
						{features.map((item, index) => (
							<div key={index} className="flex items-start gap-3">
								<div className="mt-1">{item.icon}</div>
								<div>
									<h4 className="font-semibold text-gray-900">
										{item.title}
									</h4>
									<p className="text-gray-600 text-sm">
										{item.desc}
									</p>
								</div>
							</div>
						))}
					</div>

					{/* Button */}
					<button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition">
						Start Tracking Now →
					</button>
				</div>

				{/* Right Column */}
				<div className="flex justify-center h-full">
					<div className="w-full max-w-md h-full py-20 px-10 flex flex-col items-center justify-center text-center rounded-2xl border-[3px] border-transparent bg-white [background:linear-gradient(white,white)_padding-box,linear-gradient(135deg,#3b82f6,#10b981)_border-box]">
						<h3 className="text-6xl font-bold text-teal-500 mb-3">
							85%
						</h3>
						<p className="text-gray-600 text-sm">
							of financially successful people track their
							expenses regularly
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default FinancialPlanning;
