import { ArrowRight } from "lucide-react";

const Banner = () => {
	return (
		<section className="relative flex flex-col items-center justify-center text-center px-6 py-24 bg-linear-to-b from-blue-500 to-emerald-400">
			{/* Top Label */}
			<div className="mb-6">
				<span className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-blue-50 bg-blue-600/50 rounded-full backdrop-blur-sm">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
						className="lucide lucide-sparkles h-4 w-4 text-primary-foreground"
					>
						<path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path>
						<path d="M20 3v4"></path>
						<path d="M22 5h-4"></path>
						<path d="M4 17v2"></path>
						<path d="M5 18H3"></path>
					</svg>
					Your Financial Journey Starts Here
				</span>
			</div>

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
				<button className="flex items-center justify-center gap-2 bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg shadow hover:bg-blue-50 transition">
					Get Started Free
					<ArrowRight className="w-5 h-5" />
				</button>
				<button className="px-6 py-3 rounded-lg bg-white/30 text-white font-semibold backdrop-blur-sm cursor-not-allowed">
					View Reports
				</button>
			</div>
		</section>
	);
};

export default Banner;
