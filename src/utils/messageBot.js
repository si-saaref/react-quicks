export const messageBot = ({ indexChat, name }) => {
	const listMessage = {
		1: {
			sender: 'he',
			text: "Hello, My Name is Quikerx, with 'X' hehehe, \n What is your name??",
			time: Date.now(),
		},
		2: {
			sender: 'he',
			text: `Whooaaa.. Hi ${name}!! \n How old are you??`,
			time: Date.now(),
		},
	};
	return [listMessage[indexChat]];
};
