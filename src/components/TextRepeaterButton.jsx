import React, { useState } from "react";

function TextRepeaterButton() {
	const [repeat, setRepeat] = useState(1);
	const textArray = [];
	return (
		<button
			onClick={() => {
				setRepeat(repeat + 1);
				for (let i = 0; i < repeat; i++) {
					textArray.push(<span key={i}>I like this text</span>);
				}
				console.log(textArray);
			}}
			className='TextRepeaterButton'>
			{/* {textArray.map((ele) =>
				ele;
			)} */}
			<span>I like this text</span>
		</button>
	);
}

export default TextRepeaterButton;
