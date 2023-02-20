import React, { useState } from "react";

function TextRepeaterButton() {
	const [repeat, setRepeat] = useState(1);
	const textArray = [];
	for (let i = 0; i < repeat; i++) {
		textArray.push(<span key={i}>I like this text</span>);
	}
	const clickHandler = () => {
		setRepeat(repeat + 1);
		console.log(textArray);
	};
	return (
		<button
			onClick={clickHandler}
			className='TextRepeaterButton'>
			{textArray.map((ele) => {
				return { ...ele };
			})}
			<span>I like this text</span>
		</button>
	);
}

export default TextRepeaterButton;
