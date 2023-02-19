import { Button } from 'antd';
import React from 'react';
import SpeedDial from '../component/atoms/SpeedDial';

export default function MainPage() {
	return (
		<>
			<div>
				<h1>I Love You</h1>
				<SpeedDial>
					<Button type='primary' shape='circle' size='large'>
						Task
					</Button>
					<Button type='primary' shape='circle' size='large'>
						Chats
					</Button>
				</SpeedDial>
			</div>
		</>
	);
}
