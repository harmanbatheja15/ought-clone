const Newsletter = () => {
	return (
		<>
			<div className="w-full">
				<div className="mx-auto px-10 py-10 bg-[#212b37]">
					<div className="flex flex-col lg:flex-row lg:items-center lg:justify-between max-w-7xl mx-auto">
						<div className="">
							<h2 className="text-3xl font-light text-[#f3f3ef]">
								Sign up to our newsletter
							</h2>
						</div>
						<div className="mt-10 w-full md:w-1/2 lg:mt-0">
							<form className="flex lg:justify-center">
								<div className="flex w-full max-w-md items-center space-x-2">
									<input
										className="flex h-10 w-full rounded-lg border border-[#363f49] bg-transparent px-5 py-6 text-sm text-white focus:outline-none focus:ring-1"
										type="email"
										placeholder="Enter email"
									></input>
									<button
										type="button"
										className="rounded-md bg-[#139caf] px-5 py-4 text-sm font-medium text-white shadow-sm"
									>
										Join
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Newsletter;
