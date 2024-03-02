const LatestUpdates = () => {
	return (
		<>
			<div className="px-2 mb-24">
				<div className="mx-auto max-w-7xl py-10">
					<p className="text-[#8f3969] uppercase tracking-wider font-semibold px-5 py-2">
						Latest Updates
					</p>
					<div className="xl:grid xl:grid-cols-12 xl:gap-36">
						<div className="xl:col-span-5">
							<a href="#">
								<div className="group p-5 hover:bg-white rounded-lg hover:shadow-lg transition-all duration-500">
									<h1 className="text-6xl font-medium text-[#363f49] group-hover:text-[#8f3969]">
										Ought has spun off Elicit
									</h1>
									<p className="mt-6 text-lg text-[#5f6568] font-light">
										Elicit is now an independent public
										benefit corporation and has raised $9
										million in venture funding
									</p>
								</div>
							</a>
						</div>
						<div className="mt-10 xl:col-span-5 xl:mt-0">
							<div>
								<a href="#">
									<div className="group mb-9 first:mt-0 p-5 hover:bg-white rounded-lg hover:shadow-lg transition-all duration-500">
										<h3 className="text-2xl font-medium leading-6 text-[#363f49] group-hover:text-[#8f3969]">
											AI Safety Needs Great Product
											Builders
										</h3>
										<p className="mt-2 text-lg text-[#5f6568] font-light">
											We think that building products and
											testing out ideas is one of the best
											ways to have an impact on AI safety.
											This post explains why!
										</p>
									</div>
								</a>
								<a href="#">
									<div className="group my-9 first:mt-0 p-5 hover:bg-white rounded-lg hover:shadow-lg transition-all duration-500">
										<h3 className="text-2xl font-medium leading-6 text-[#363f49] group-hover:text-[#8f3969]">
											A Library and Tutorial for Factored
											Cognition with Language Models
										</h3>
										<p className="mt-2 text-lg text-[#5f6568] font-light">
											Announcing the Interactive
											Composition Explorer (ICE) and the
											Factored Cognition Primer
										</p>
									</div>
								</a>
								<a href="#">
									<div className="group mt-9 first:mt-0 p-5 hover:bg-white rounded-lg hover:shadow-lg transition-all duration-500">
										<h3 className="text-2xl font-medium leading-6 text-[#363f49] group-hover:text-[#8f3969]">
											How to use Elicit responsibly
										</h3>
										<p className="mt-2 text-lg text-[#5f6568] font-light">
											How Elicit works and where it
											doesn't
										</p>
									</div>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default LatestUpdates;
