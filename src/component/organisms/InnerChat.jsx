import { Button, Input } from 'antd';
import React, { useLayoutEffect, useState } from 'react';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { GrClose } from 'react-icons/gr';
import { messageBot } from '../../utils/messageBot';
import CardMessage from '../molecules/CardMessage';

export default function InnerChat({ isShow, onClickBack, onClickClose, messageOwner }) {
	const [messageVal, setMessageVal] = useState('');
	const [listMessage, setListMessage] = useState([]);

	useLayoutEffect(() => {
		const chat = loadHistoryChat();
		setListMessage(chat);
	}, []);

	const loadHistoryChat = () => {
		const chat =
			JSON.parse(localStorage.getItem(`message-${messageOwner.idMessage}`))?.listMessage ||
			handleLoadBotMessage(1);
		console.log(chat);
		return chat;
	};

	const handleLoadBotMessage = (id) => {
		const historyChat =
			JSON.parse(localStorage.getItem(`message-${messageOwner.idMessage}`))?.listMessage ?? [];
		const chat = messageBot({ indexChat: id });
		if (listMessage.length === 0) {
			const dataChat = {
				id: messageOwner.idMessage,
				name: messageOwner.name,
				listMessage: chat,
			};
			localStorage.setItem(`message-${messageOwner.idMessage}`, JSON.stringify(dataChat));
			setListMessage(chat);
		}
		console.log(historyChat, chat);
		return chat;
	};

	const handleSendMessage = () => {
		const dataMessage = {
			text: messageVal,
			sender: 'me',
			time: Date.now(),
		};
		let dataListMessage = [...loadHistoryChat().listMessage];
		dataListMessage.push(dataMessage);
		const dataChat = {
			id: messageOwner.idMessage,
			name: messageOwner.name,
			listMessage: dataListMessage,
		};
		localStorage.setItem(`message-${messageOwner.idMessage}`, JSON.stringify(dataChat));
		setListMessage(dataListMessage);
		setMessageVal('');
	};

	return (
		<>
			<div className={`${isShow ? 'flex' : 'hidden'} flex-col h-full p-2`}>
				<div className='chat-header flex items-center justify-between p-1 border-b-2 sticky top-0 bg-white'>
					<div className='py-2 px-4 cursor-pointer' onClick={onClickBack}>
						<AiOutlineArrowLeft />
					</div>
					<div className='flex-grow'>
						<h6 className='text-blue-700 font-semibold'>AYAM GORENG</h6>
						<p className='text-xs'>3 Particitpants</p>
					</div>
					<div className='py-2 px-4 cursor-pointer' onClick={onClickClose}>
						<GrClose />
					</div>
				</div>
				<div className='chat-section flex-1'>
					{listMessage.map((message, idx) => {
						const time = new Date(message.time).toLocaleTimeString('id-ID', {
							hour: '2-digit',
							minute: '2-digit',
						});
						console.log(message.time, time);
						return (
							<CardMessage sender={message.sender} key={idx + 1} text={message.text} time={time} />
						);
					})}
				</div>
				<div className='chat-message flex gap-4 sticky bg-white bottom-0 px-2 py-4'>
					<Input
						placeholder='Type a new message'
						value={messageVal}
						onChange={(e) => setMessageVal(e.target.value)}
					/>
					<Button type='primary' className='bg-blue-500' onClick={handleSendMessage}>
						Send
					</Button>
				</div>
			</div>
		</>
	);
}
