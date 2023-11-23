import React from "react";

const Home = ({ header, imgSource, description }) => {
	return (
		<>
			<h1>{header}</h1>
			<img
				src={imgSource}
				alt="fruit"
			/>
			<p>{description}</p>
		</>
	);
};

export default Home;
