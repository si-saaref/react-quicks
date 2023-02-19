import React from 'react';

export default function CardMessage({ text, sender, time }) {
	return (
		<div className={`flex chat-card ${sender === 'me' ? 'justify-end' : ''}`}>
			<div className='max-w-sm'>
				<div className={`flex w-full ${sender === 'me' ? 'justify-end' : ''}`}>
					<p className=''>You</p>
				</div>
				<div className={`flex gap-2 ${sender === 'me' ? 'flex-row-reverse' : ''}`}>
					<div className='bg-purple-200 p-1 rounded-md'>
						<p className=''>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur vero perferendis
							repudiandae obcaecati? Architecto est doloribus dolor, repellat commodi possimus.
						</p>
						<p className='text-xs'>19.32</p>
					</div>
					<div className='inline-flex h-fit bg-transparent p-0 m-0'>...</div>
				</div>
			</div>
		</div>
	);
}
