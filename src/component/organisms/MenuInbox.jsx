import React, { useState } from 'react';
import DrawerModal from '../molecules/DrawerModal';

export default function MenuInbox() {
	const [isOpen, setIsOpen] = useState(false);

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
				<div className='flex justify-center items-center h-full'>
					<h1>MENU Inbox</h1>
				</div>
			</DrawerModal>
		</>
	);
}
