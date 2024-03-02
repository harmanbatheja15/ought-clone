import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const DonateCTA = () => {
	return (
		<>
			<div className="donate-container w-full">
				<div className="py-24 px-10 bg-[#82c3c9]">
					<div className="flex flex-col lg:flex-row lg:items-center lg:justify-between max-w-7xl mx-auto">
						<div className="w-full lg:w-1/2">
							<div className="flex">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="64"
									height="64"
									fill="currentColor"
									viewBox="0 0 256 256"
									className="text-[#363f49]"
								>
									<path d="M198.51,56.09C186.44,35.4,169.92,24,152,24H104C86.08,24,69.56,35.4,57.49,56.09,46.21,75.42,40,101,40,128s6.21,52.58,17.49,71.91C69.56,220.6,86.08,232,104,232h48c17.92,0,34.44-11.4,46.51-32.09C209.79,180.58,216,155,216,128S209.79,75.42,198.51,56.09ZM199.79,120h-32a152.78,152.78,0,0,0-9.68-48H188.7C194.82,85.38,198.86,102,199.79,120Zm-20.6-64H150.46a83.13,83.13,0,0,0-12-16H152C162,40,171.4,46,179.19,56ZM56,128c0-47.7,22-88,48-88s48,40.3,48,88-22,88-48,88S56,175.7,56,128Zm96,88H138.49a83.13,83.13,0,0,0,12-16h28.73C171.4,210,162,216,152,216Zm36.7-32H158.12a152.78,152.78,0,0,0,9.68-48h32C198.86,154,194.82,170.62,188.7,184Z"></path>
								</svg>
								<h2 className="text-6xl font-medium text-[#363f49] ml-8">
									Donate
								</h2>
							</div>
							<p className="mt-3 text-gray-600 ml-24">
								We're a non-profit with 501(c) status. You can
								donate to support Ought's work on AI alignment
								and scaling up good reasoning.
							</p>
						</div>
						<div className="mt-10 w-full md:w-1/2 lg:mt-0">
							<form className="flex lg:justify-end">
								<div className="flex w-full max-w-md items-center space-x-2">
									<Link to="/donate">
										<button
											type="button"
											className="rounded-full bg-white px-6 py-2 text-sm shadow-md text-[#139caf] font-semibold inline-flex items-center md:mx-0 mx-auto"
										>
											Donate
											<ArrowRight className="h-4 w-4 ml-1" />
										</button>
									</Link>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default DonateCTA;
