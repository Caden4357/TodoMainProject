import { Box, FormControl, FormLabel,Heading, Input, Button } from '@chakra-ui/react';
import axios from 'axios';
import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
const Login = (props) => {
    const navigate = useNavigate()
    const [login, setLogin] = useState({
        email:'',
        password:''
    })
    const changeHandler = (e) => {
        setLogin({...login, [e.target.name]: e.target.value})
    }

    const submitHandler = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8000/api/login', login, {withCredentials:true})
            .then((res) => {
                console.log(res.data.user._id);
                window.localStorage.setItem('uuid', res.data.user._id)
                navigate('/dashboard')
            })
            .catch((err) => {
                console.log(err);
            })
    }
    return (
        <Box maxW={'400px'} mx={'auto'}>
            <Heading textAlign={'center'} mb={'20px'}>Login</Heading>
            <form onSubmit={submitHandler}>
                <FormControl>
                    <FormLabel textAlign={'center'}>Email</FormLabel>
                    <Input type='text' value={login.email} name='email' onChange={changeHandler} />
                </FormControl>
                <FormControl>
                    <FormLabel textAlign={'center'}>Password</FormLabel>
                    <Input type='password' value={login.password} name='password' onChange={changeHandler} />
                </FormControl>
                <Button w={'100%'} colorScheme='green' mt={'15px'} type='submit'>Login</Button>

            </form>
        </Box>
)}

export default Login;