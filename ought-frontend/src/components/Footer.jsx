import { Linkedin, Twitter, Github, Earth } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<section className="relative overflow-hidden py-16 bg-[#17202a] text-[#8d9390]">
			<div className="relative z-10 mx-auto max-w-full px-4">
				<div className="-m-6 flex flex-wrap ml-5">
					<div className="w-full p-6 sm:w-3/3 lg:w-6/12">
						<div className="flex h-full flex-col justify-between">
							<div className="mb-4 inline-flex items-center">
								<Link
									to="/"
									className="text-3xl font-bold text-[#5f6568]"
								>
									ought
								</Link>
							</div>
						</div>
					</div>
					<div className="w-full p-6 sm:w-1/3 lg:w-2/12">
						<div className="h-full">
							<ul>
								<li className="mb-4">
									<Link
										to="/about"
										className=" text-base font-medium text-[#8d9390] hover:text-white transition-all duration-500"
									>
										About
									</Link>
								</li>
								<li className="mb-4">
									<Link
										to="/mission"
										className=" text-base font-medium text-[#8d9390] hover:text-white transition-all duration-500"
									>
										Mission
									</Link>
								</li>
								<li className="mb-4">
									<Link
										to="/updates"
										className=" text-base font-medium text-[#8d9390] hover:text-white transition-all duration-500"
									>
										Updates
									</Link>
								</li>
							</ul>
						</div>
					</div>
					<div className="w-full p-6 sm:w-1/3 lg:w-2/12">
						<div className="h-full">
							<ul>
								<li className="mb-4">
									<Link
										to="/team"
										className=" text-base font-medium text-[#8d9390] hover:text-white transition-all duration-500"
									>
										Team
									</Link>
								</li>
								<li className="mb-4">
									<Link
										to="/elicit"
										className=" text-base font-medium text-[#8d9390] hover:text-white transition-all duration-500"
									>
										Elicit
									</Link>
								</li>
								<li className="mb-4">
									<Link
										to="/donate"
										className=" text-base font-medium text-[#8d9390] hover:text-white transition-all duration-500"
									>
										Donate
									</Link>
								</li>
							</ul>
						</div>
					</div>
					<div className="w-full p-6 sm:w-1/3 lg:w-2/12">
						<div className="h-full">
							<ul>
								<li className="inline-flex mb-1 text-white font-light">
									<Earth className="mr-2" />
									Based in San Fransisco
								</li>
								<li className="mb-4 font-light ml-8">
									Remote-friendly
								</li>
								<li className="flex ml-8">
									<a
										className="font-medium text-[#8d9390] hover:text-white transition-all duration-500"
										href="https://www.linkedin.com/feed/"
										target="_blank"
									>
										<Linkedin />
									</a>
									<a
										className="font-medium text-[#8d9390] hover:text-white transition-all duration-500 ml-2"
										href="https://twitter.com/"
										target="_blank"
									>
										<Twitter />
									</a>
									<a
										className="font-medium text-[#8d9390] hover:text-white transition-all duration-500 ml-2"
										href="https://github.com/"
										target="_blank"
									>
										<Github />
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Footer;
