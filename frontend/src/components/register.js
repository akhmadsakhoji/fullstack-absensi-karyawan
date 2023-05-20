import ReactTypingEffect from 'react-typing-effect';
import { Button, Container, Form } from "react-bootstrap";
import axios from "axios";
import { useState } from 'react';

const Register = ({ title, description }) => {
    const [nip, setNip] = useState("");
    const [nama, setNama] = useState("");
    const [password, setPassword] = useState("");

    const handleNip = (inputNip) => {
        setNip(inputNip);
    }
    const handleNama = (inputNama) => {
        setNama(inputNama);
    }
    const handlePassword = (inputPassword) => {
        setPassword(inputPassword);
    }
    const userRegister = () => {
        // example => {nip: 1, password: 123}

        console.log("user register ready");
        console.log(`nip: ${nip}`);
        console.log(`password: ${password}`);
        const requestingData = {
            nip: nip, 
            nama: nama,
            password: password
        }
        axios({
            method: "post",
            url: "http://localhost:3200/users",
            data: requestingData
        }).then((result)=>{
            console.log(result.data)
            if(result.data.registered){
                alert("Pendaftaran Berhasil");
                window.location.replace("/login");
            } else {
                alert("Pendaftaran Gagal");
            }
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
                    <Form.Label className='fw-bold'>Nama</Form.Label>
                    <Form.Control type='text' placeholder='Masukan Nama Anda' required onChange={(event) => { handleNama(event.target.value) }} />
                </Form.Group>
                <Form.Group>
                    <Form.Label className='fw-bold'>Password</Form.Label>
                    <Form.Control type='password' placeholder='Masukan Password Anda' required onChange={(event) => { handlePassword(event.target.value) }} />
                </Form.Group>
                <Button className='mt-4 w-100' onClick={() => {userRegister()}}>Register</Button>
            </Form>
        </Container>
    )
}

export default Register;