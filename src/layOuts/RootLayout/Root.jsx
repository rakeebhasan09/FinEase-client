import { Outlet } from "react-router";
import Navbar from "../../shared/Navbar/Navbar";
import Footer from "../../shared/Footer/Footer";
import ScrollTop from "../../components/ScrollTop/ScrollTop";

const Root = () => {
	return (
		<>
			<div className="flex flex-col min-h-screen">
				<ScrollTop />
				<section>
					<Navbar />
				</section>
				<main className="grow">
					<Outlet />
				</main>
				<section>
					<Footer />
				</section>
			</div>
		</>
	);
};

export default Root;
