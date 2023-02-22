import React, { useState } from 'react';

export default function CardMessage({ text, sender, time }) {
	const [isModalOpen, setIsModalOpen] = useState();
	return (
		<div className={`flex chat-card ${sender === 'me' ? 'justify-end' : ''}`}>
			<div className='max-w-sm'>
				<div className={`flex w-full ${sender === 'me' ? 'justify-end' : ''}`}>
					<p className=''>{sender === 'me' ? 'You' : sender}</p>
				</div>
				<div className={`flex gap-2 ${sender === 'me' ? 'flex-row-reverse' : ''} relative`}>
					<div className='bg-purple-200 p-1 rounded-md'>
						<p className=''>{text}</p>
						<p className='text-xs'>{time}</p>
					</div>
					<div
						className='inline-flex h-fit bg-transparent p-0 m-0 cursor-pointer'
						onClick={() => setIsModalOpen(true)}
					>
						...
					</div>
					<div
						className={`${isModalOpen ? 'absolute' : 'hidden'} ${
							sender !== 'me' ? '-right-10' : 'right-10'
						} top-4 bg-red-200 divide-y-2 border-2 rounded-md z-20`}
					>
						<div className='cursor-pointer py-1 px-3 hover:bg-slate-400'>Edit</div>
						<div className='cursor-pointer py-1 px-3 hover:bg-slate-400'>Delete</div>
					</div>
				</div>
			</div>
			<div
				className={`bg-opacity-50 bg-slate-200 inset-0 z-10 ${isModalOpen && 'absolute'}`}
				onClick={() => setIsModalOpen(false)}
			></div>
		</div>
	);
}
