const About = () => {
	return (
		<>
			<div className="px-6 py-20 tracking-wider w-full max-w-4xl mx-auto">
				<div className="mb-14">
					<h1 className="text-[#363f49] pb-8 font-semibold text-6xl">
						About us
					</h1>
				</div>

				<div className="mb-14">
					<h2 className="text-[#363f49] pb-8 font-medium text-3xl">
						Company
					</h2>
					<p className="text-xl text-gray-600 font-light mb-5">
						We're a 501(c)(3) non-profit registered in Delaware and
						operating in California.
					</p>
				</div>

				<div className="mb-14">
					<h2 className="text-[#363f49] pb-8 font-medium text-3xl">
						Location
					</h2>
					<p className="mb-8 text-xl text-gray-600 font-light">
						Our mailing address is 440 N Barranca Ave #4405 Covina,
						CA 91723.
					</p>
				</div>

				<div className="mb-14">
					<h2 className="text-[#363f49] pb-8 font-medium text-3xl">
						Contact us
					</h2>
					<p className="mb-8 text-xl text-gray-600 font-light">
						You can contact us by email at xyz@gmail.com
					</p>
				</div>
			</div>
		</>
	);
};

export default About;
