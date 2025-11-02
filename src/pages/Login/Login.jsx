import { useState } from "react";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { Link } from "react-router";
import SocialLogin from "../../shared/SocialLogin/SocialLogin";

const Login = () => {
	const [show, setShow] = useState(false);
	const handleUserLogin = (e) => {
		e.preventDefault();
	};
	return (
		<section className="py-10 md:py-20 lg:py-[143px]">
			<div className="container">
				<div className="card bg-base-100 w-full mx-auto p-5 md:p-10 max-w-[492px] shrink-0 shadow-2xl">
					<h1 className="text-[32px] text-center font-semibold">
						Login!
					</h1>
					<p className="text-center ">
						Don't have an account?{" "}
						<Link to="/register">Register Now</Link>
					</p>
					<div className="card-body p-0">
						<form onSubmit={handleUserLogin}>
							<fieldset className="fieldset mt-6">
								<label className="label text-primary font-medium text-[14px]">
									Email
								</label>
								<input
									type="email"
									className="input outline-none border border-[#E9E9E9] rounded w-full py-2 pl-3 shadow-0 text-primary opacity-[0.5]"
									placeholder="smsowkothasan@gmail.com"
									name="email"
								/>
								<label className="label text-primary font-medium text-[14px]">
									Password
								</label>
								<div className="relative">
									<input
										type={show ? "text" : "password"}
										className="input outline-none border border-[#E9E9E9] rounded w-full py-2 pl-3 shadow-0 text-primary opacity-[0.5]"
										placeholder="*************"
										name="password"
									/>
									<div className="absolute right-3 top-[50%] translate-y-[-50%] z-20">
										{show ? (
											<IoMdEyeOff
												onClick={() => setShow(!show)}
												className="text-[22px] cursor-pointer"
											/>
										) : (
											<IoMdEye
												onClick={() => setShow(!show)}
												className="text-[22px] cursor-pointer"
											/>
										)}
									</div>
								</div>
								<div>
									<a className="text-[rgba(0,25,49,0.6)] cursor-pointer">
										Forgot password?
									</a>
								</div>
								<button className="btn h-12 bg-[linear-gradient(80deg,#632EE3_5.68%,#9F62F2_88.38%)] py-3 text-white text-[16px] font-semibold mt-4">
									Login
								</button>
							</fieldset>
						</form>
						<div className="divider">OR</div>
						{/* Social Login */}
						<SocialLogin />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Login;
