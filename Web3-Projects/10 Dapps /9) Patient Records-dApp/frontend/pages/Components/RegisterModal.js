import React, { useState } from "react";
import { Form, Modal, Button } from "react-bootstrap";


const Register = () => {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const [details, setDetails] = useState({
		name: "",
		age: 0,
		sex: "",
		location: "",
	});

	const handleChange = (event) => {
		event.preventDefault();
		const { name, value } = event.target;

		setDetails((prevValue) => {
			return {
				...prevValue,
				[name]: value,
			};
		});
	};

	return (
		<div>
			<Button
				onClick={handleShow}
				variant='light'
				size='lg'
				className='sign-in-button py-1 mr-2 rounded-4xl'
			>
				Register
			</Button>

			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Register yourself</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form>
						<Form.Group className='mb-3'>
							<Form.Label>Name</Form.Label>
							<Form.Control
								name='name'
								value={details.name}
								onChange={handleChange}
								type='text'
								placeholder='Enter name'
							/>
						</Form.Group>
						<Form.Group className='mb-3'>
							<Form.Label>Age</Form.Label>
							<Form.Control
								name='age'
								value={details.age}
								onChange={handleChange}
								type='number'
								placeholder='Enter your Age'
							/>
						</Form.Group>
						<Form.Group className='mb-3'>
							<Form.Label>SEX</Form.Label>
							<Form.Select
								name='sex'
								value={details.sex}
								onChange={handleChange}
								aria-label='Default select example'
							>
								<option>Select your Gender</option>
								<option value='Male'>Male</option>
								<option value='Female'>Female</option>
							</Form.Select>
						</Form.Group>
						<Form.Group className='mb-3'>
							<Form.Label>Location Address</Form.Label>
							<Form.Control
								name='location'
								value={details.location}
								onChange={handleChange}
								type='text'
								placeholder='Enter your location'
							/>
						</Form.Group>
						<Button variant='outline-danger'>
							Submit
						</Button>
					</Form>
				</Modal.Body>
				<Modal.Footer>
					<Button variant='danger' onClick={handleClose}>
						Close
					</Button>
				</Modal.Footer>
			</Modal>
		</div>
	);
};

export default Register