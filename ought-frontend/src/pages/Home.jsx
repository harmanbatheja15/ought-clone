import Banner from "../components/Banner";
import LatestUpdates from "../components/LatestUpdates";
import DonateCTA from "../components/DonateCTA";

const Home = () => {
	return (
		<>
			<div className="home-container">
				{/* Banner */}
				<Banner />

				{/* Latest Updates */}
				<LatestUpdates />

				{/* Donate */}
				<DonateCTA />
			</div>
		</>
	);
};

export default Home;
