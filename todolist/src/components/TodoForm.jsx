import React, { useState } from 'react';
import axios from 'axios';
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
    Flex,
    Heading,
    Box,
    RadioGroup,
    Stack,
    Radio,
    Button,
    Switch
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
const TodoForm = (props) => {
    const navigate = useNavigate()
    const [todo, setTodo] = useState({
        title: '',
        description: '',
        priority: '',
        reaccuring: false
    })
    const changeHandler = (e) => {
        // console.log(e);
        if(e === '1'||  e === '2' || e === '3'|| e === '4'){
            setTodo({...todo, priority:e})
        }
        else if(e.target.name === 'reacurring'){
            setTodo({ ...todo, reaccuring: e.target.checked })

        }else{
            setTodo({ ...todo, [e.target.name]: e.target.value })
        }
    }
    const submitHandler = (e) => {
        e.preventDefault();
        console.log('HERE');
        axios.post('http://localhost:8000/api/newTodo', todo)
            .then((res) => {
                navigate('/')
            })
            .catch((err) => {
                console.log(err);
            })
    }
    return (
        <Box maxW={'400px'} mx={'auto'}>
            <form onSubmit={submitHandler}>
                <Heading textAlign={'center'} mb={'20px'}>What's Your New Task?</Heading>
                <FormControl>
                    <FormLabel textAlign={'center'}>Title</FormLabel>
                    <Input type='text' value={todo.title} name='title' onChange={changeHandler} />
                </FormControl>
                <FormControl>
                    <FormLabel textAlign={'center'}>Description (optional)</FormLabel>
                    <Input type='text' value={todo.description} name='description' onChange={changeHandler} />
                </FormControl>
                <FormControl>
                    <FormLabel textAlign={'center'}>Priority</FormLabel>
                    <RadioGroup onChange={changeHandler}>
                        <Stack direction={'row'} spacing={4} justify={'center'}>
                            <Radio border={'2px solid green'} value='1'>Low</Radio>
                            <Radio border={'2px solid orange'} value='2'>Medium</Radio>
                            <Radio border={'2px solid red'} value='3'>High</Radio>
                            <Radio border={'2px solid red'} value='4'>Top</Radio>
                        </Stack>
                    </RadioGroup>
                </FormControl>
                <FormControl display='flex' alignItems='center' justifyContent={'center'} mt={'10px'}>
                    <FormLabel mb='0'>
                        Reacurring Task?
                    </FormLabel>
                    <Switch name='reacurring' onChange={changeHandler}/>
                </FormControl>
                <Button w={'100%'} colorScheme='blue' mt={'15px'} type='submit'>Submit</Button>
            </form>
        </Box>
    )
}

export default TodoForm;