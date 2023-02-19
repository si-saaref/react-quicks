import { Input } from 'antd';
import React, { useLayoutEffect, useState } from 'react';
import DrawerModal from '../molecules/DrawerModal';
import { BiSearch } from 'react-icons/bi';
import { getListChatAPI } from '../../services/api';

export default function MenuInbox() {
	const [isOpen, setIsOpen] = useState(false);

	useLayoutEffect(() => {
		getListChat();
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
				<div className='flex justify-center h-full p-2'>
					<div className='search-wrapper w-full'>
						<Input
							placeholder='Search'
							className='w-full bg-white'
							suffix={
								<>
									<BiSearch />
								</>
							}
						/>
					</div>
				</div>
			</DrawerModal>
		</>
	);
}
