import useAuth from "../../hooks/useAuth";

const ProfileInfo = () => {
	const { user } = useAuth();

	const { photoURL, displayName, email } = user;
	return (
		<div className="border border-[#E0DAD1] rounded-lg max-w-3xl mx-auto shadow-sm p-8 mt-20 mb-8">
			<div className="flex flex-col md:flex-row items-center md:items-start gap-6">
				<div>
					<img
						className="w-32 h-32 rounded-full"
						src={photoURL}
						alt={displayName}
					/>
				</div>
				<div>
					<h1 className="text-3xl font-bold mb-2 text-center md:text-start">
						{displayName}
					</h1>
					<div className="flex items-center gap-2 justify-center md:justify-start">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="#1773CF"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
							className="lucide lucide-mail h-4 w-4 text-primary"
						>
							<rect
								width="20"
								height="16"
								x="2"
								y="4"
								rx="2"
							></rect>
							<path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
						</svg>
						<span className="text-sm">{email}</span>
					</div>
					<div className="text-center md:text-start">
						<button className="mt-5 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors text-white bg-[#1773CF] hover:bg-[#1773CF]/90 h-10 px-4 py-2 gap-2">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
								className="lucide lucide-square-pen h-4 w-4"
							>
								<path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
								<path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"></path>
							</svg>
							Update Profile
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProfileInfo;
