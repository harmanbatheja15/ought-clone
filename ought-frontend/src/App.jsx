import React from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Updates from "./components/Updates";
import Donate from "./components/Donate";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import "./App.css";

const App = () => {
	return (
		<>
			{/* Navbar */}
			<Navbar />

			<div className="home-container">
				{/* Banner */}
				<Banner />

				{/* Latest Updates */}
				<Updates />

				{/* Donate */}
				<Donate />

				{/* Newsletter */}
				<Newsletter />

				{/* Footer */}
				<Footer />
			</div>
		</>
	);
};

export default App;
