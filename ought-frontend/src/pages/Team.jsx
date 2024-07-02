import { ArrowUpRight } from "lucide-react";

const Team = () => {
	return (
		<>
			<div className="px-6 py-20 tracking-wider w-full max-w-4xl mx-auto">
				<div className="mb-14">
					<h1 className="text-[#363f49] pb-8 font-semibold text-6xl">
						Team
					</h1>
				</div>
				<h2 className="text-[#363f49] mb-4 font-medium text-3xl">
					Board of Directors
				</h2>
				<div className="flex max-w-2xl flex-col items-center rounded-md md:flex-row">
					<div className="md:h-[200px] md:w-[1000px]">
						<img
							src="https://ought.org/images/profiles/evans.jpg"
							alt="Owain Evans"
							className="h-full w-full rounded-md object-contain"
						/>
					</div>
					<div>
						<div className="py-4 px-0 md:px-4">
							<div className="">
								<h1 className="inline-flex items-center text-lg font-semibold mr-2 text-[#007d96]">
									<a href="https://linkedin.com/feed/">
										Owain Evans
									</a>
								</h1>
								<span>Director and CEO</span>
							</div>
							<p className="mt-3 text-sm text-gray-600">
								Lorem, ipsum dolor sit amet consectetur
								adipisicing elit. Nobis, ratione alias?
								Blanditiis nemo non harum eos placeat enim? Quo
								iusto distinctio sed similique dolores natus
								minus enim neque quod molestias voluptatum,
								consectetur necessitatibus saepe quis quaerat
								illo excepturi.
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Team;
