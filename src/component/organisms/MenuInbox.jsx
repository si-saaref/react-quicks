import { Input } from 'antd';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import DrawerModal from '../molecules/DrawerModal';
import { BiSearch } from 'react-icons/bi';
import { getListChatAPI } from '../../services/api';
import CardChat from '../molecules/CardChat';
import InnerChat from './InnerChat';

export default function MenuInbox() {
	const [isOpen, setIsOpen] = useState(false);
	const [isOpenInner, setIsOpenInner] = useState(false);
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

	const handleShowInChat = (id) => {
		setIsOpenInner((prevStae) => !prevStae);
		console.log('AYAM GORENG', id);
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
				<div className={`${isOpenInner ? 'hidden' : 'flex'} flex-col p-2 gap-5 relative`}>
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
									onClick={() => handleShowInChat(item.id)}
								/>
							))
						) : (
							<h1>Loading</h1>
						)}
					</div>
				</div>
				<InnerChat
					isShow={isOpenInner}
					onClickBack={() => setIsOpenInner((prevState) => !prevState)}
					onClickClose={() => {
						setIsOpen((prevState) => !prevState);
						setIsOpenInner(false);
					}}
				/>
			</DrawerModal>
		</>
	);
}
