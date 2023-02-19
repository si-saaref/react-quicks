import { Drawer } from 'antd';
import React, { useState } from 'react';

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
			<Drawer
				placement='right'
				onClose={() => setIsOpen((prevStae) => !prevStae)}
				open={isOpen}
				closeIcon={false}
				className='text-black'
				bodyStyle={{
					padding: '0',
				}}
				contentWrapperStyle={{
					height: '70vh',
					top: '10vh',
					right: '5vh',
					width: '40vw',
				}}
				headerStyle={{
					display: 'none',
				}}
			>
				<div className='flex justify-center items-center h-full'>
					<h1>MENU Inbox</h1>
				</div>
			</Drawer>
		</>
	);
}
