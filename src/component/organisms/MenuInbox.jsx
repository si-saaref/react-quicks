import { Input } from 'antd';
import React, { useLayoutEffect, useState } from 'react';
import DrawerModal from '../molecules/DrawerModal';
import { BiSearch } from 'react-icons/bi';
import { getListChatAPI } from '../../services/api';
import CardChat from '../molecules/CardChat';

export default function MenuInbox() {
	const [isOpen, setIsOpen] = useState(false);

	useLayoutEffect(() => {
		// isOpen && getListChat();
	});

	const getListChat = async () => {
		const resp = await getListChatAPI();
		console.log('RESPONSE +> ', resp);
	};

	return (
		<>
			<button
				type='primary'
				shape='circle'
				size='large'
				className='m-btn bg-white text-black'
				onClick={() => setIsOpen((prevState) => !prevState)}
			>
				Inbox
			</button>
			<DrawerModal onClose={() => setIsOpen((prevStae) => !prevStae)} isOpen={isOpen}>
				<div className='flex flex-col h-full p-2 gap-5 relative'>
					<div className='search-wrapper w-full sticky top-2 right-0'>
						<Input
							placeholder='Search'
							className='w-full bg-white border-2 border-slate-400'
							suffix={
								<>
									<BiSearch />
								</>
							}
						/>
					</div>
					<div className='list-chat-wrapper divide-y-2'>
						<CardChat />
						<CardChat />
						<CardChat />
						<CardChat />
						<CardChat />
						<CardChat />
						<CardChat />
						<CardChat />
						<CardChat />
						<CardChat />
					</div>
				</div>
			</DrawerModal>
		</>
	);
}
