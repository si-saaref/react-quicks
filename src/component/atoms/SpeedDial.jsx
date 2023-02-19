import React from 'react';
import { Button } from 'antd';

export default function SpeedDial({ children }) {
	return (
		<div className='speed-dial'>
			<Button type='primary' shape='circle' size='large'>
				A
			</Button>
			{children}
		</div>
	);
}
