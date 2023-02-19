import React from 'react';

export default function CardChat({ title, body, date, onClick }) {
	return (
		<div className='flex gap-3 p-2 min-h-[80px]'>
			<div className=''>
				<div className='h-10 w-10 bg-blue-400 text-white rounded-full'></div>
			</div>
			<div className='chat-content flex flex-col gap-3 w-full'>
				<div className='chat-title flex w-full justify-between'>
					<p className='text-blue-700'>AYAM GORENG</p>
					<p>22 December 2023</p>
				</div>
				<div className='chat-body'>Hi Good to see you</div>
			</div>
		</div>
	);
}
