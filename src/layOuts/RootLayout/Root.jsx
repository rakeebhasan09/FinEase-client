import { Outlet } from "react-router";
import Navbar from "../../shared/Navbar/Navbar";
import Footer from "../../shared/Footer/Footer";
import ScrollTop from "../../components/ScrollTop/ScrollTop";

const Root = () => {
	return (
		<>
			<div className="flex flex-col min-h-screen">
				<ScrollTop />
				<section className="sticky top-0 z-50">
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
