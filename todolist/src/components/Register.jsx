import { Box, FormControl, FormLabel, Heading, Input, Button } from '@chakra-ui/react';
import axios from 'axios';
import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { userContext } from '../context/UserContext';
const Register = (props) => {
    const navigate = useNavigate()
    const {loggedInUser, setLoggedInUser} = useContext(userContext)
    const [register, setRegister] = useState({
        username:'',
        email:'',
        password:'',
        confirmPassword:''
    })

    const changeHandler = (e) => {
        setRegister({...register, [e.target.name]: e.target.value})
    }
    const submitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/register', register, {withCredentials:true})
            .then((res) => {
                console.log(res);
                window.localStorage.setItem('uuid', res.data.user._id)
                setLoggedInUser(res.data.user)
                navigate('/dashboard')
            })
            .catch((err) => {
                console.log(err);
            })
    }
    return (
        <Box maxW={'400px'} mx={'auto'}>
            <Heading textAlign={'center'} mb={'20px'}>Register</Heading>
            <form onSubmit={submitHandler}>
                <FormControl>
                    <FormLabel textAlign={'center'}>Username</FormLabel>
                    <Input type='text' value={register.username} name='username' onChange={changeHandler} />
                </FormControl>
                <FormControl>
                    <FormLabel textAlign={'center'}>Email</FormLabel>
                    <Input type='text' value={register.email} name='email' onChange={changeHandler} />
                </FormControl>
                <FormControl>
                    <FormLabel textAlign={'center'}>Password</FormLabel>
                    <Input type='text' value={register.password} name='password' onChange={changeHandler} />
                </FormControl>
                <FormControl>
                    <FormLabel textAlign={'center'}>Confirm Password</FormLabel>
                    <Input type='text' value={register.confirmPassword} name='confirmPassword' onChange={changeHandler} />
                </FormControl>
                <Button w={'100%'} colorScheme='green' mt={'15px'} type='submit'>Login</Button>
            </form>
            <Link to={'/'}>Already have an account? Login here</Link>
        </Box>
    )
}

export default Register;