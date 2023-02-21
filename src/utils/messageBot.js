export const messageBot = ({ indexChat, sender, messageValue }) => {
	const listMessage = {
		1: {
			sender: `${sender}`,
			text: "Hello, My Name is Quikerx, with 'X' hehehe, \n What is your name??",
			time: Date.now(),
		},
		2: {
			sender: `${sender}`,
			text: `Whooaaa.. Hi ${messageValue}!! \n How old are you??`,
			time: Date.now(),
		},
		3: {
			sender: `${sender}`,
			text: `Aigoo.. looks like you're ${
				messageValue > 21 ? 'older' : 'younger'
			} than me... \n I\'m 22 yo`,
			time: Date.now(),
		},
	};
	return listMessage[indexChat];
};
