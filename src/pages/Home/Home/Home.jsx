import Banner from "../Banner/Banner";
import BudgetingTips from "../BudgetingTips/BudgetingTips";
import FinancialPlanning from "../FinancialPlanning/FinancialPlanning";
import StatsCards from "../StatsCards/StatsCards";

const Home = () => {
	return (
		<>
			<section>
				<Banner />
			</section>
			<section className="container">
				<StatsCards />
			</section>
			<section>
				<BudgetingTips />
			</section>
			<section>
				<FinancialPlanning />
			</section>
		</>
	);
};

export default Home;
