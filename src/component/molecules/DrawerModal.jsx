import { Drawer } from 'antd';
import React from 'react';

export default function DrawerModal({ isOpen, onClose, children }) {
	return (
		<Drawer
			placement='right'
			onClose={onClose}
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
			{children}
		</Drawer>
	);
}
