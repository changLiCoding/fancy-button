import React from "react";

function LightSwitchButton(props) {
	const { darkModeHandler, somethingAboutLight } = props;
	const clickHandler = () => darkModeHandler();
	return (
		<button
			className='LightSwitchButton'
			onClick={clickHandler}>
			{!somethingAboutLight ? (
				<span className='on'>
					<i>💡</i> I'm on!
				</span>
			) : (
				<span className='off'>
					<i>💡</i> I'm off!
				</span>
			)}
		</button>
	);
}

export default LightSwitchButton;
