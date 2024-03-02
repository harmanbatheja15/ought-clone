const Updates = () => {
	return (
		<>
			<div className="px-6 py-20 tracking-wider w-full max-w-4xl mx-auto">
				<div className="mb-14">
					<h1 className="text-[#363f49] font-semibold text-6xl">
						Updates
					</h1>
				</div>
				<div className="flex flex-col items-center rounded-md md:flex-row">
					<div>
						<a href="#">
							<div className="py-8 px-0 md:px-10 mb-10 hover:shadow-lg rounded transition-all duration-500">
								<h1 className="inline-flex items-center text-4xl font-semibold mr-2">
									Ought has spun off Elicit
								</h1>
								<p className="mt-3 text-lg text-gray-600 font-light">
									Elicit is now an independent public benefit
									corporation and has raised $9 million in
									venture funding
								</p>
							</div>
						</a>
						<a href="#">
							<div className="py-5 px-0 md:px-10 mb-10 hover:shadow-lg rounded transition-all duration-500">
								<h1 className="inline-flex items-center text-4xl font-semibold mr-2">
									AI Safety Needs Great Product Builders
								</h1>
								<p className="mt-3 text-lg text-gray-600 font-light">
									We think that building products and testing
									out ideas is one of the best ways to have an
									impact on AI safety. This post explains why!
								</p>
							</div>
						</a>
					</div>
				</div>
			</div>
		</>
	);
};

export default Updates;
