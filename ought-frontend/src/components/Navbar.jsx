import { useState } from "react";
import { Menu } from "lucide-react";

const menuItems = [
	{
		name: "Mission",
		href: "#",
	},
	{
		name: "Elicit",
		href: "#",
	},
	{
		name: "Team",
		href: "#",
	},
	{
		name: "Updates",
		href: "#",
	},
];

const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<>
			<div className="relative w-full">
				<div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-[1.5rem] sm:px-6 md:px-8">
					<div className="inline-flex items-center space-x-2">
						<a
							href="/"
							className="hover:text-gray-900 text-[#5f6568] font-semibold text-2xl"
						>
							ought
						</a>
					</div>
					<div className="hidden md:block">
						<ul className="inline-flex space-x-8">
							{menuItems.map((item) => (
								<li key={item.name}>
									<a
										href={item.href}
										className="hover:text-gray-900 text-[#5f6568] font-normal"
										style={{
											fontSize:
												"clamp(0.9rem,1.428571vw,1rem)",
										}}
									>
										{item.name}
									</a>
								</li>
							))}
						</ul>
					</div>
					<div className="md:hidden">
						<Menu
							onClick={toggleMenu}
							className="h-6 w-6 cursor-pointer"
						/>
					</div>
					{isMenuOpen && (
						<div className="absolute top-12 right-2 z-50 transform p-2 transition md:hidden">
							<div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
								<div className="px-5 pb-6 pt-5">
									<nav className="grid gap-y-4">
										{menuItems.map((item) => (
											<a
												key={item.name}
												href={item.href}
												className="-m-3 flex items-start justify-start rounded-md py-3 px-16 text-sm hover:bg-gray-50"
											>
												<span className="font-medium text-[#5f6568]">
													{item.name}
												</span>
											</a>
										))}
									</nav>
								</div>
							</div>
						</div>
					)}
				</div>
			</div>
		</>
	);
};

export default Navbar;
