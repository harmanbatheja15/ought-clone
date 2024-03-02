import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Mission from "./pages/Mission";
import About from "./pages/About";
import Team from "./pages/Team";
import Updates from "./pages/Updates";
import Donate from "./pages/Donate";
import Elicit from "./pages/Elicit";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import "./App.css";

const App = () => {
	return (
		<>
			<BrowserRouter>
				{/* Navbar */}
				<Navbar />

				<Routes>
					{/* Home */}
					<Route
						path="/"
						element={
							<Suspense fallback={"loading..."}>
								<Home />
							</Suspense>
						}
					/>
					<Route
						path="/mission"
						element={
							<Suspense fallback={"loading..."}>
								<Mission />
							</Suspense>
						}
					/>
					<Route
						path="/team"
						element={
							<Suspense fallback={"loading..."}>
								<Team />
							</Suspense>
						}
					/>
					<Route
						path="/updates"
						element={
							<Suspense fallback={"loading..."}>
								<Updates />
							</Suspense>
						}
					/>
					<Route
						path="/donate"
						element={
							<Suspense fallback={"loading..."}>
								<Donate />
							</Suspense>
						}
					/>
					<Route
						path="/about"
						element={
							<Suspense fallback={"loading..."}>
								<About />
							</Suspense>
						}
					/>
					<Route
						path="/elicit"
						element={
							<Suspense fallback={"loading..."}>
								<Elicit />
							</Suspense>
						}
					/>
				</Routes>

				<Newsletter />
				<Footer />
			</BrowserRouter>
		</>
	);
};

export default App;
