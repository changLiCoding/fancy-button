import React, { useState } from "react";

import "./App.css";
import AngryButton from "./components/AngryButton";
import CounterButton from "./components/CounterButton";
import LightSwitchButton from "./components/LightSwitchButton";
import TextRepeaterButton from "./components/TextRepeaterButton";

function App() {
	const [isDarkMode, setIsDarkMode] = useState(false);
	const darkModeHandler = () => {
		setIsDarkMode(!isDarkMode);
	};
	return (
		<div className={isDarkMode ? "App dark" : "App"}>
			<h1>Fancy Buttons!</h1>

			<section>
				<AngryButton />
				<CounterButton />
				<LightSwitchButton
					somethingAboutLight={isDarkMode}
					darkModeHandler={darkModeHandler}
				/>
				<TextRepeaterButton />
			</section>
		</div>
	);
}

export default App;
