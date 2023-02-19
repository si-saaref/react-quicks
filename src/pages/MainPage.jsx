import { Button } from 'antd';
import React from 'react';
import SpeedDial from '../component/atoms/SpeedDial';
import MenuInbox from '../component/organisms/MenuInbox';
import MenuTask from '../component/organisms/MenuTask';

export default function MainPage() {
	return (
		<>
			<div>
				<h1>I Love You</h1>
				<SpeedDial>
					<MenuInbox />
					<MenuTask />
				</SpeedDial>
			</div>
		</>
	);
}
