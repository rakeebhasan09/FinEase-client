import { ScaleLoader } from "react-spinners";

const Loading = () => {
	return (
		<div className="flex item-center justify-center pt-64">
			<ScaleLoader color="#f00" />
		</div>
	);
};

export default Loading;
