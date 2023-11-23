import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Compoonents/Home";
import Login from "./Compoonents/Login";
import Header from "./Compoonents/Header";

function App() {
	return (
		<>
			<Router>
				<Header />
				<Routes>
					<Route
						element={<Home />}
						path="/"
						exact={true}
					/>
					<Route
						path="/login"
						element={<Login />}
					/>
				</Routes>
			</Router>
		</>
	);
}

export default App;
