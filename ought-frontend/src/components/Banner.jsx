import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Banner = () => {
	return (
		<>
			<div className="home-banner flex justify-center items-center px-6 pt-24 pb-40 tracking-wider">
				<div className="text-center">
					<h1 className="text-[#363f49] pb-8 font-semibold text-6xl xl:text-9xl md:text-8xl text-center">
						Scale up good <br /> reasoning
					</h1>
					<div className="flex justify-center mb-12">
						<div className="">
							<p className="font-light text-center text-[#5f6568] mb-4 max-w-[56ch] lg:text-lg">
								Machine learning will transform any area of life
								that has abundant data and easily measurable
								objectives.{" "}
								<span className="bg-[#d6ebe8] py-0.5 px-1.5 text-black font-normal rounded">
									But will it make us wiser?
								</span>
							</p>
							<p className="font-light text-center text-[#5f6568] max-w-[56ch] lg:text-lg">
								Ought is a product-driven research lab that
								develops mechanisms for delegating high-quality
								reasoning to advanced machine learning systems.
							</p>
						</div>
					</div>
					<Link to="/mission">
						<button
							className="bg-white py-2 px-6 rounded-full text-[#139caf] font-semibold inline-flex items-center"
							style={{
								boxShadow:
									"0 2px 7px rgba(219,215,214,.5568627450980392), -10px -10px 40px hsla(0,0%,100%,.5294117647058824)",
							}}
						>
							Read our mission
							<ArrowRight className="h-5 w-5 ml-1 cursor-pointer" />
						</button>
					</Link>
				</div>
			</div>
		</>
	);
};

export default Banner;
