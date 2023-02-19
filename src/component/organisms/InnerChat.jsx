import { Button, Input } from 'antd';
import React from 'react';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { GrClose } from 'react-icons/gr';
import CardMessage from '../molecules/CardMessage';

export default function InnerChat({ isShow, onClickBack, onClickClose }) {
	return (
		<>
			<div className={`${isShow ? 'flex' : 'hidden'} flex-col h-full p-2`}>
				<div className='chat-header flex items-center justify-between p-1 border-b-2'>
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
					<CardMessage sender='me' />
					<CardMessage sender='he' />
					<CardMessage sender='me' />
					<CardMessage sender='me' />
					<CardMessage sender='he' />
				</div>
				<div className='chat-message flex gap-4'>
					<Input placeholder='Type a new message' />
					<Button type='primary' className='bg-blue-500'>
						Send
					</Button>
				</div>
			</div>
		</>
	);
}
