import { use } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { Navigate, useLocation } from "react-router";

const PrivateRoutes = ({ children }) => {
	const location = useLocation();
	const { user, loading } = use(AuthContext);

	if (loading) {
		return <h2>Loading.........</h2>;
	}

	if (!user) {
		return <Navigate to="/login" state={location.pathname} />;
	}

	return children;
};

export default PrivateRoutes;
