import { Outlet, useLocation } from "react-router";
import Navbar from "../../shared/Navbar/Navbar";
import Footer from "../../shared/Footer/Footer";
import ScrollTop from "../../components/ScrollTop/ScrollTop";

const Root = () => {
	const location = useLocation();
	// Hide footer on specific routes
	const hideFooterRoutes = ["/login", "/register"];
	const shouldHideFooter = hideFooterRoutes.includes(location.pathname);
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
				{!shouldHideFooter && (
					<section>
						<Footer />
					</section>
				)}
			</div>
		</>
	);
};

export default Root;
