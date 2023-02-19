import React from 'react';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { GrClose } from 'react-icons/gr';

export default function InnerChat({ isShow, onClickBack, onClickClose }) {
	return (
		<>
			<div className={`${isShow ? 'block' : 'hidden'}`}>
				<div className='inner-chat-header flex items-center justify-between p-1 border-b-2'>
					<div className='py-2 px-4 cursor-pointer' onClick={onClickBack}>
						<AiOutlineArrowLeft />
					</div>
					<div className='flex-grow'>
						<h6 className='text-blue-700 font-semibold'>AYAM GORENG</h6>
						<p className='text-xs'>3 Particitpants</p>
					</div>
					<div className='py-2 px-4 cursor-pointer' onClick={onClickClose}>
						<GrClose />
					</div>
				</div>
			</div>
		</>
	);
}
