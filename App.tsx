import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AdDesigner from "./components/AdDesigner";

import Header from "./components/Header";

function App() {
	return (
		<div className="App">
			<Header />
			<AdDesigner />
		</div>
	);
}

export default App;
