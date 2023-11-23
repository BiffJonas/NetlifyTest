import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Compoonents/Home";
import Login from "./Compoonents/Login";

function App() {
	return (
		<>
			<Router>
				<Routes>
					<Route
						path="/"
						element={<Home />}
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
