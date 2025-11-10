import { createBrowserRouter } from "react-router";
import Root from "../layOuts/RootLayout/Root";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Home from "../pages/Home/Home/Home";
import PrivateRoutes from "./PrivateRoutes";
import AddTransaction from "../pages/AddTransaction/AddTransaction";
import MyTransactions from "../pages/MyTransactions/MyTransactions";
import TransactionDetails from "../pages/TransactionDetails/TransactionDetails";
import ProfileInfo from "../pages/ProfileInfo/ProfileInfo";
// import FinancialBarChart from "../pages/Report/FinancialBarChart";
import UpdateTransaction from "../pages/UpdateTransaction/UpdateTransaction";
import Error from "../pages/Error/Error";
import ReportChart from "../pages/Report/ReportChart";

export const router = createBrowserRouter([
	{
		path: "/",
		Component: Root,
		children: [
			{
				index: true,
				Component: Home,
			},
			{
				path: "login",
				Component: Login,
			},
			{
				path: "register",
				Component: Register,
			},
			{
				path: "add-transaction",
				element: (
					<PrivateRoutes>
						<AddTransaction />
					</PrivateRoutes>
				),
			},
			{
				path: "my-transactions",
				element: (
					<PrivateRoutes>
						<MyTransactions />
					</PrivateRoutes>
				),
			},
			{
				path: "transaction/:id",
				loader: ({ params }) =>
					fetch(`http://localhost:5170/transactions/${params.id}`),
				element: (
					<PrivateRoutes>
						<TransactionDetails />
					</PrivateRoutes>
				),
			},
			{
				path: "transaction/update/:id",
				loader: ({ params }) =>
					fetch(`http://localhost:5170/transactions/${params.id}`),
				element: (
					<PrivateRoutes>
						<UpdateTransaction />
					</PrivateRoutes>
				),
			},
			{
				path: "reports",
				// loader: () => fetch("http://localhost:5170/transactions"),
				element: (
					<PrivateRoutes>
						{/* <FinancialBarChart /> */}
						<ReportChart />
					</PrivateRoutes>
				),
			},
			{
				path: "profile",
				element: (
					<PrivateRoutes>
						<ProfileInfo />
					</PrivateRoutes>
				),
			},
		],
	},
	{
		path: "*",
		Component: Error,
	},
]);
