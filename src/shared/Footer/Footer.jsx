import { FaBehanceSquare, FaFacebook, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router";

const Footer = () => {
	return (
		<footer className="bg-white">
			<div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
				{/* Logo + Description */}
				<div className="space-y-3">
					<Link to="/" className="text-xl font-semibold">
						<div className="flex items-center space-x-2" href="/">
							<div className="rounded-lg bg-linear-to-br from-[#308CDF] to-[#2CBF97] p-2">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									stroke="#fff"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
									className="lucide lucide-wallet h-6 w-6 text-primary-foreground"
								>
									<path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path>
									<path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path>
								</svg>
							</div>
							<span className="text-2xl font-bold text-primary">
								FinEase
							</span>
						</div>
					</Link>
					<p className="text-gray-500 text-sm leading-relaxed mt-3.5">
						Your trusted partner in personal finance management.
						Take control of your financial future today.
					</p>
				</div>

				{/* Quick Links */}
				<div>
					<h3 className="font-semibold text-gray-800 mb-3">
						Quick Links
					</h3>
					<ul className="space-y-2 text-gray-600 text-sm">
						<li>
							<Link to="#" className="hover:text-blue-500">
								Home
							</Link>
						</li>
						<li>
							<Link to="#" className="hover:text-blue-500">
								Add Transaction
							</Link>
						</li>
						<li>
							<Link to="#" className="hover:text-blue-500">
								My Transactions
							</Link>
						</li>
						<li>
							<Link to="#" className="hover:text-blue-500">
								Reports
							</Link>
						</li>
					</ul>
				</div>

				{/* Contact */}
				<div>
					<h3 className="font-semibold text-gray-800 mb-3">
						Contact Us
					</h3>
					<ul className="space-y-2 text-sm text-gray-600">
						<li className="flex items-center gap-2">
							<span>📧</span> support@finease.com
						</li>
						<li className="flex items-center gap-2">
							<span>📞</span> +1 (555) 123-4567
						</li>
					</ul>
				</div>

				{/* Legal */}
				<div>
					<h3 className="font-semibold text-gray-800 mb-3">Legal</h3>
					<ul className="space-y-2 text-sm text-gray-600">
						<li>
							<Link to="#" className="hover:text-blue-500">
								Terms & Conditions
							</Link>
						</li>
						<li>
							<Link to="#" className="hover:text-blue-500">
								Privacy Policy
							</Link>
						</li>
					</ul>

					{/* Social Icons */}
					<div className="flex items-center gap-4 mt-4 text-gray-500 text-lg">
						<Link
							to="https://www.facebook.com/"
							className="hover:text-blue-500"
						>
							<FaFacebook className="text-[24px]" />
						</Link>
						<Link
							to="https://www.linkedin.com/login"
							className="hover:text-blue-500"
						>
							<FaLinkedin className="text-[24px]" />
						</Link>
						<Link
							to="https://www.behance.net/"
							className="hover:text-blue-500"
						>
							<FaBehanceSquare className="text-[24px]" />
						</Link>
					</div>
				</div>
			</div>

			{/* Bottom Text */}
			<div className="py-4 text-center text-sm text-gray-500">
				© 2025 FinEase. All rights reserved.
			</div>
		</footer>
	);
};

export default Footer;
