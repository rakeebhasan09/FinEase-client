import { use, useState } from "react";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { Link, useLocation, useNavigate } from "react-router";
import SocialLogin from "../../shared/SocialLogin/SocialLogin";
import { AuthContext } from "../../contexts/AuthContext";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const Login = () => {
	const [show, setShow] = useState(false);
	const { emailPasswordLogin, setUser } = use(AuthContext);
	const location = useLocation();
	const navigate = useNavigate();

	// Handle Login
	const handleUserLogin = (e) => {
		e.preventDefault();
		const email = e.target.email.value;
		const password = e.target.password.value;
		if (!email || !password) {
			toast.warn("Invalid User Credential");
			return;
		}

		emailPasswordLogin(email, password)
			.then((result) => {
				e.target.reset();
				setUser(result.user);
				Swal.fire({
					position: "center",
					icon: "success",
					title: "Login Successfull.",
					showConfirmButton: false,
					timer: 1500,
				});
				navigate(location?.state || "/");
			})
			.catch((error) => {
				const message = error.message;
				const modifiedMessage = message
					.split("/")[1]
					.replaceAll("-", " ")
					.replace(")", "");
				toast.error(modifiedMessage);
			});
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
						<Link to="/register" className="text-primary">
							Register Now
						</Link>
					</p>
					<div className="card-body p-0">
						<form onSubmit={handleUserLogin}>
							<fieldset className="fieldset mt-6">
								<label className="label text-black font-medium text-[14px]">
									Email
								</label>
								<input
									type="email"
									className="input outline-none border border-[#E9E9E9] rounded w-full py-2 pl-3 shadow-0 text-black"
									placeholder="smsowkothasan@gmail.com"
									name="email"
								/>
								<label className="label text-black font-medium text-[14px]">
									Password
								</label>
								<div className="relative">
									<input
										type={show ? "text" : "password"}
										className="input outline-none border border-[#E9E9E9] rounded w-full py-2 pl-3 shadow-0 text-black"
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
								<button className="btn h-12 common-btn py-3 text-white text-[16px] font-semibold mt-4">
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
