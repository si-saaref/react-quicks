import { Button } from 'antd';
import React from 'react';
import SpeedDial from '../component/atoms/SpeedDial';
import MenuTask from '../component/organisms/MenuTask';

export default function MainPage() {
	return (
		<>
			<div>
				<h1>I Love You</h1>
				<SpeedDial>
					<button type='primary' shape='circle' size='large' className='m-btn bg-white text-black'>
						Inbox
					</button>
					<MenuTask />
				</SpeedDial>
			</div>
		</>
	);
}
