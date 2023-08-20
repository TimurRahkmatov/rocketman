import Modal from 'react-modal';
import MOCKIMAGE from '../../assets/images/300.png';

export const FoodModal = ({
	addModal,
	addSetModal,
	editModal,
	editSetModal,
}) => {
	const styledBtn = {
		position: 'absolute',
		top: 0,
		right: 0,
		backgroundColor: 'green',
		color: 'white',
	};
	return (
		<>
			<Modal
				isOpen={editModal}
				onRequestClose={() => editSetModal(false)}
				style={{
					overlay: {
						backgroundColor: 'rgba(0,0,0,0.4)',
					},
					content: {
						width: '800px',
						height: '350px',
						top: 0,
						right: 0,
						left: 0,
						bottom: 0,
						margin: 'auto',
						color: 'black',
					},
				}}
			>
				<div className='d-flex align-items-start gap-5'>
					<div className=''>
						<img src={MOCKIMAGE} alt='MOCK IMAGE' width={300} height={300} />
					</div>

					<form className='d-flex align-items-center p-3 gap-3'>
						<div className='d-flex flex-column'>
							{' '}
							<span>
								{' '}
								<span className='d-flex flex-column mt-4'>
									<label htmlFor='product'>Tovar nomi</label>
									<input
										type='text'
										className='rounded form-control'
										name='product'
										id='product'
										placeholder='masalan: Lavash Big'
									/>
								</span>
								<span className='d-flex flex-column mt-4'>
									<label htmlFor='price'>Narxi</label>
									<input
										type='text'
										className='rounded form-control'
										name='price'
										id='price'
										placeholder='masalan: 20 000'
									/>
								</span>
							</span>
							<span>
								<p className='mt-4'>Holat</p>
								<span className='me-4 fs-5'>
									<input type='radio' name='status' id='' />
									on
								</span>
								<span className='fs-5'>
									<input type='radio' name='status' id='' />
									off
								</span>
							</span>
						</div>
						<div className='d-flex flex-column gap-5'>
							{' '}
							<span>
								{' '}
								<span className='d-flex flex-column mt-4'>
									<label htmlFor='product'>Tovar nomi</label>
									<input
										type='text'
										className='rounded form-control'
										name='product'
										id='product'
										placeholder='masalan: Lavash Big'
									/>
								</span>
								<span className='d-flex flex-column mt-4'>
									<label htmlFor='price'>Narxi</label>
									<input
										type='text'
										className='rounded form-control'
										name='price'
										id='price'
										placeholder='masalan: 20 000'
									/>
								</span>
							</span>
							<button
								className='btn btn-dark'
								onClick={() => editSetModal(false)}
							>
								Saqlash
							</button>
						</div>
					</form>

					<button style={styledBtn} onClick={() => editSetModal(false)}>
						X
					</button>
				</div>
			</Modal>
			<Modal
				isOpen={addModal}
				onRequestClose={() => addSetModal(false)}
				style={{
					overlay: {
						backgroundColor: 'rgba(0,0,0,0.4)',
					},
					content: {
						width: '800px',
						height: '350px',
						top: 0,
						right: 0,
						left: 0,
						bottom: 0,
						margin: 'auto',
						color: 'black',
					},
				}}
			>
				<div className='d-flex align-items-center gap-5'>
					<div>
						<img src={MOCKIMAGE} alt='MOCK IMAGE' width={300} height={300} />
					</div>
					<form className='d-flex align-items-center p-3 gap-3'>
						<div className='d-flex flex-column'>
							{' '}
							<span>
								{' '}
								<span className='d-flex flex-column mt-4'>
									<label htmlFor='product'>Tovar nomi</label>
									<input
										type='text'
										className='rounded form-control'
										name='product'
										id='product'
										placeholder='masalan: Lavash Big'
									/>
								</span>
								<span className='d-flex flex-column mt-4'>
									<label htmlFor='price'>Narxi</label>
									<input
										type='text'
										className='rounded form-control'
										name='price'
										id='price'
										placeholder='masalan: 20 000'
									/>
								</span>
							</span>
							<span>
								<p className='mt-4'>Holat</p>
								<span className='me-4 fs-5'>
									<input
										type='radio'
										className='form-check-input'
										name='status'
										id=''
									/>
									on
								</span>
								<span className='fs-5'>
									<input
										type='radio'
										className='form-check-input'
										name='status'
										id=''
									/>
									off
								</span>
							</span>
						</div>
						<div className='d-flex flex-column gap-5'>
							{' '}
							<span>
								{' '}
								<span className='d-flex flex-column mt-4'>
									<label htmlFor='product'>Tovar nomi</label>
									<input
										type='text'
										className='rounded form-control'
										name='product'
										id='product'
										placeholder='masalan: Lavash Big'
									/>
								</span>
								<span className='d-flex flex-column mt-4'>
									<label htmlFor='price'>Narxi</label>
									<input
										type='text'
										className='rounded form-control'
										name='price'
										id='price'
										placeholder='masalan: 20 000'
									/>
								</span>
							</span>
							<button
								className='btn btn-dark'
								onClick={() => addSetModal(false)}
							>
								Saqlash
							</button>
						</div>
					</form>

					<button style={styledBtn} onClick={() => addSetModal(false)}>
						X
					</button>
				</div>
			</Modal>
		</>
	);
};