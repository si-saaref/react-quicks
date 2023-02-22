import { Button, Select } from 'antd';
import React, { useState } from 'react';
import DrawerModal from '../molecules/DrawerModal';

export default function MenuTask() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<>
			<button
				type='primary'
				shape='circle'
				size='large'
				className='m-btn bg-white text-black'
				onClick={() => setIsOpen((prevStae) => !prevStae)}
			>
				Task
			</button>
			<DrawerModal onClose={() => setIsOpen((prevStae) => !prevStae)} isOpen={isOpen}>
				<div className='flex flex-col h-full p-2'>
					<div className='p-1 flex justify-between'>
						<Select
							defaultValue='lucy'
							style={{ width: 120 }}
							options={[
								{ value: 'jack', label: 'Jack' },
								{ value: 'lucy', label: 'Lucy' },
								{ value: 'Yiminghe', label: 'yiminghe' },
								{ value: 'disabled', label: 'Disabled', disabled: true },
							]}
						/>
						<Button type='primary' className='bg-blue-500'>
							New Task
						</Button>
					</div>
					<div className='flex-grow'>BODY</div>
				</div>
			</DrawerModal>
		</>
	);
}
