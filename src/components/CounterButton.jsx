import React, { useState } from "react";

function CounterButton(props) {
	const [count, setCount] = useState(0);
	const clickHandler = () => {
		setCount(count + 1);
	};
	return (
		<button
			onClick={clickHandler}
			className='CounterButton'>
			You clicked me {count} amount of times
		</button>
	);
}

export default CounterButton;
