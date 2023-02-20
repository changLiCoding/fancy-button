import React, { useState } from "react";
const AngryButton = function () {
	const [anger, setAnger] = useState(0);
	const clickHandler = () => {
		anger < 1 ? setAnger(Math.round(anger * 10 + 1) / 10) : setAnger(0);
	};
	return (
		<button
			onClick={clickHandler}
			className='AngryButton'
			style={{ backgroundColor: `rgba(255,0,0,${anger})` }}>
			{/* If you have NOT reached the maximum */}
			{anger < 1 && <span>Don't click me too much! </span>}
			{/* If you HAVE reached the maximum */}
			{anger === 1 && <span>Rawr!</span>}
		</button>
	);
};

export default AngryButton;
