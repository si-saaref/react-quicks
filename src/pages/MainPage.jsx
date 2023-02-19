import { Button } from 'antd';
import React from 'react';
import SpeedDial from '../component/atoms/SpeedDial';

export default function MainPage() {
	return (
		<>
			<div>
				<h1>I Love You</h1>
				<SpeedDial>
					<button type='primary' shape='circle' size='large' className='m-btn bg-white text-black'>
						A
					</button>
					<button type='primary' shape='circle' size='large' className='m-btn bg-white text-black'>
						Chats
					</button>
				</SpeedDial>
			</div>
		</>
	);
}
