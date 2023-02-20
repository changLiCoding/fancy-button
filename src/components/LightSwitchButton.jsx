import React, { useState } from "react";

function LightSwitchButton() {
	const [isOn, setIsOn] = useState(true);
	const clickHandler = () => {
		setIsOn(!isOn);
	};
	return (
		<button
			className='LightSwitchButton'
			onClick={() => {
				clickHandler();
			}}>
			{isOn ? (
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
