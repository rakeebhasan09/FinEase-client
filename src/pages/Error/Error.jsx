import { Link } from "react-router";
import errorImage from "./assets/error-page.png";

const Error = () => {
	return (
		<section className="py-10 md:py-20 lg:pt-[135px] lg:pb-20">
			<div className="container">
				<div>
					<img className="block mx-auto" src={errorImage} alt="" />
				</div>
				<div className="pt-5 md:pt-12 lg:pt-[65px]">
					<h2 className="text-[30px] md:text-[48px] font-semibold text-center mb-2">
						Oops, page not found!
					</h2>
					<p className="text-[#627382] text-center mb-4">
						The page you are looking for is not available.
					</p>
					<div className="text-center">
						<Link to="/">
							<button className="w-[150px] text-white py-3 rounded common-btn">
								Go Back!
							</button>
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Error;
