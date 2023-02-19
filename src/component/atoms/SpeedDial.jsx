import React from 'react';
import { Button } from 'antd';

export default function SpeedDial({ children }) {
	return (
		<div className='speed-dial flex flex-row-reverse gap-3'>
			<button type='primary' shape='circle' size='large' className='m-btn bg-blue-600'>
				A
			</button>
			{children}
		</div>
	);
}
