import { ArrowRight } from "lucide-react";

const Banner = () => {
	return (
		<section className="flex flex-col items-center justify-center text-center px-6 py-24 bg-linear-to-b from-blue-500 to-emerald-400">
			{/* Heading */}
			<h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
				Take Control of Your <br />
				<span className="text-lime-200">Financial Future</span>
			</h1>

			{/* Description */}
			<p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto mb-10">
				Track expenses, manage budgets, and achieve your savings goals
				with <span className="font-semibold">FinEase</span> — your
				trusted personal finance companion.
			</p>

			{/* Buttons */}
			<div className="flex flex-col sm:flex-row gap-4 justify-center">
				<button className="flex items-center justify-center gap-2 border hover:text-blue-600 font-semibold px-6 py-3 rounded-lg shadow hover:bg-blue-50 transition">
					Get Started Free
					<ArrowRight className="w-5 h-5" />
				</button>
				<button className="px-6 py-3 h-full border rounded-lg btn btn-soft btn-primary font-semibold backdrop-blur-sm cursor-not-allowed">
					View Reports
				</button>
			</div>
		</section>
	);
};

export default Banner;
