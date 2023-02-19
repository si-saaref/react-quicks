import { Input } from 'antd';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import DrawerModal from '../molecules/DrawerModal';
import { BiSearch } from 'react-icons/bi';
import { getListChatAPI } from '../../services/api';
import CardChat from '../molecules/CardChat';

export default function MenuInbox() {
	const [isOpen, setIsOpen] = useState(false);
	const [data, setData] = useState([]);

	useEffect(() => {
		getListChat();
	}, [isOpen]);

	const getListChat = async () => {
		try {
			if (isOpen) {
				const resp = await getListChatAPI();
				setData(resp?.data);
				console.log('RESPONSE +> ', resp);
			}
		} catch (error) {
			console.log(error);
		}
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
						{data.length > 0 ? (
							data.map((item, idx) => (
								<CardChat
									title={item.owner.firstName}
									body={item.message}
									date={item.publishDate}
									key={idx + 1}
									img={item.owner.picture}
								/>
							))
						) : (
							<h1>Loading</h1>
						)}
					</div>
				</div>
			</DrawerModal>
		</>
	);
}
