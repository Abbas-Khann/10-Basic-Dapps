import React, { useState } from "react";
import { Form, Modal, Button } from "react-bootstrap";
import { useContract, useProvider, useSigner } from "wagmi";
import { HEALTHCARE_CONTRACT_ADDRESS, HEALTHCARE_CONTRACT_ABI } from "../../Constants/constants";

const Register = () => {
	// Fetching signer and provider from wagmi
	const provider = useProvider();
	const {data: signer} = useSigner();
	const contract = useContract({
		addressOrName: HEALTHCARE_CONTRACT_ADDRESS,
		contractInterface: HEALTHCARE_CONTRACT_ABI,
		signerOrProvider: signer || provider
	})

	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	// Details state
	const [details, setDetails] = useState({
		name: "",
		age: 0,
		sex: "",
		location: "",
	});

	// Taking values
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

	const addNewPatient = async (val) => {
		try{

			if(val.name && val.age && val.sex && val.location) {
				// Passing the values inside the addPatient function
				const addUser = await contract.addPatient(val.name, +val.age, val.sex, val.location)
				await addUser.wait();
			}
		}
		catch(err){
			console.error(err)
		}
	}


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
						<Button variant='outline-danger' onClick={() => addNewPatient(details)}>
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