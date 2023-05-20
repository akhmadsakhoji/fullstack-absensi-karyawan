import ReactTypingEffect from 'react-typing-effect';
import { Button, Container, Form } from "react-bootstrap";
import axios from "axios";
import { useState } from 'react';

const Login = ({ title, description }) => {
    const [nip, setNip] = useState("");
    const [password, setPassword] = useState("");

    const handleNip = (inputNip) => {
        setNip(inputNip);
    }
    const handlePassword = (inputPassword) => {
        setPassword(inputPassword);
    }
    const userLogin = () => {
        // example => {nip: 1, password: 123}

        console.log("user login ready");
        console.log(`nip: ${nip}`);
        console.log(`password: ${password}`);
        const requestingData = {
            nip: nip, 
            password: password
        }
        axios({
            method: "post",
            url: "http://localhost:3200/users/login",
            data: requestingData
        }).then((result)=>{
            localStorage.setItem("nip", result.data.users.nip);
            localStorage.setItem("nama", result.data.users.nama);
            window.location.replace("/dashboard");
        })
    }

    return (
        <Container>
            <div className='d-flex justify-content-center fw-bold h3 my-4'>
                <ReactTypingEffect
                    text={[title, description]}
                    speed={100}
                    typingDelay={100}
                    eraseSpeed={50}
                    eraseDelay={1000}
                />
            </div>
            <Form className='w-50 mx-auto'>
                <Form.Group>
                    <Form.Label className='fw-bold'>NIP</Form.Label>
                    <Form.Control type='number' placeholder='Masukan NIP Anda' required onChange={(event) => { handleNip(event.target.value) }} />
                </Form.Group>
                <Form.Group>
                    <Form.Label className='fw-bold'>Password</Form.Label>
                    <Form.Control type='password' placeholder='Masukan Password Anda' required onChange={(event) => { handlePassword(event.target.value) }} />
                </Form.Group>
                <Button className='mt-4 w-100' onClick={() => {userLogin()}}>LOGIN</Button>
            </Form>
        </Container>
    )
}

export default Login;