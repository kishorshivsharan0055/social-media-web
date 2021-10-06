import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";
// import PropertyCard from "../components/PropertyCard";
import "@rmwc/circular-progress/circular-progress.css";
// import SearchPopup from "../components/SearchPopup";

export const Home = (): JSX.Element => {
	return (
		<div>
			<Head>
				<title>Social Media</title>
			</Head>

			<main>
				<Navbar />
			</main>

			<style jsx>{``}</style>
		</div>
	);
};

export default Home;
