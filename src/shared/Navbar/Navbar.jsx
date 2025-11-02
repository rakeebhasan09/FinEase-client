import React from "react";
import { Link, NavLink } from "react-router";

const Navbar = () => {
	const links = (
		<>
			<li>
				<NavLink
					to="/"
					className="hover:bg-transparent p-0 text-[16px]"
				>
					Home
				</NavLink>
			</li>
			<li>
				<NavLink
					to="/about"
					className="hover:bg-transparent p-0 text-[16px]"
				>
					About
				</NavLink>
			</li>
			<li>
				<NavLink
					to="/profile"
					className="hover:bg-transparent p-0 text-[16px]"
				>
					Profile
				</NavLink>
			</li>
			<li>
				<NavLink
					to="/contact"
					className="hover:bg-transparent p-0 text-[16px]"
				>
					Contact
				</NavLink>
			</li>
		</>
	);
	return (
		<header className="bg-base-100 shadow-sm py-5">
			<div className="container">
				<div className="navbar p-0 min-h-0">
					{/* Navbar Start */}
					<div className="navbar-start">
						<div className="dropdown">
							<div
								tabIndex={0}
								role="button"
								className="lg:hidden cursor-pointer mr-2"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-10 w-10"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M4 6h16M4 12h8m-8 6h16"
									/>
								</svg>
							</div>
							<ul
								tabIndex="-1"
								className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-5 gap-4 shadow"
							>
								{links}
							</ul>
						</div>
						<Link to="/" className="text-xl font-semibold">
							daisyUI
						</Link>
					</div>
					{/* Menu Center */}
					<div className="navbar-center hidden lg:flex">
						<ul className="menu menu-horizontal p-0 gap-8">
							{links}
						</ul>
					</div>
					{/* Menu End */}
					<div className="navbar-end">
						<div className="flex items-center gap-3">
							{/* <div className="dropdown dropdown-end w-[45px] h-[45px]">
									<div
										tabIndex={0}
										role="button"
										className="btn btn-ghost btn-circle avatar w-[45px] h-[45px]"
									>
										<div className="w-[45px] h-[45px] rounded-full">
											<img
												className="w-full"
												alt="Tailwind CSS Navbar component"
												src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
											/>
										</div>
									</div>
									<ul
										tabIndex="-1"
										className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
									>
										<li>
											<a className="text-[16px]">
												Profile
											</a>
										</li>
										<li>
											<a className="text-[16px]">
												Settings
											</a>
										</li>
										<li>
											<a className="text-[16px]">
												Logout
											</a>
										</li>
									</ul>
								</div> */}

							<>
								<Link
									to="/login"
									className="btn btn-outline btn-primary"
								>
									Login
								</Link>
								<Link
									to="/register"
									className="btn btn-primary"
								>
									Register
								</Link>
							</>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Navbar;
