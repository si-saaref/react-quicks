import React from 'react';

export default function CardChat({ title, body, date, img, onClick }) {
	return (
		<div className='flex gap-3 p-2 min-h-[80px]'>
			<div className=''>
				{/* <div className='h-10 w-10 bg-blue-400 text-white rounded-full'></div> */}
				<div className=''>
					<img src={img} alt={title} className='rounded-full w-10' />
				</div>
			</div>
			<div className='chat-content flex flex-col gap-3 w-full'>
				<div className='chat-title flex w-full justify-between'>
					<p className='text-blue-700'>{title}</p>
					<p>{new Date(date).toLocaleString('id-ID', { hourCycle: 'h24' })}</p>
				</div>
				<div className='chat-body'>{body}</div>
			</div>
		</div>
	);
}
