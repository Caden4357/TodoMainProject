import { Box, Card, CardBody, CardFooter, CardHeader, Flex, Heading, Icon, IconButton, SimpleGrid, Text } from '@chakra-ui/react';
import { CheckIcon } from '@chakra-ui/icons';
import React, { useEffect, useState, useContext } from 'react';
import { WarningTwoIcon } from '@chakra-ui/icons'
import axios from 'axios';
import { userContext } from '../context/UserContext';
const Dashboard = (props) => {
    const {loggedInUser, setLoggedInUser} = useContext(userContext)
    const uuid = window.localStorage.getItem('uuid')

    const [tasks, setTasks] = useState([])
    useEffect(() => {
        axios.get('http://localhost:8000/api/allTodos')
            .then((res) => {
                console.log(res);
                setTasks(res.data)
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])
    const removeFromDom = (id) => {
        const updatedTasks = tasks.filter((task) => task._id !== id)
        setTasks(updatedTasks)
    }
    const deleteTask = (id) => {
        axios.delete(`http://localhost:8000/api/deleteTodo/${id}`)
            .then(() => {
                removeFromDom(id)
            })
            .catch((err) => {
                console.log(err); 
            })
    }

    useEffect(() => {
        if(!uuid) return 
        else{
            axios.get(`http://localhost:8000/api/loggedInUser/${uuid}`)
                .then((res) => {
                    setLoggedInUser(res.data)
                })
                .catch((err) => {
                    console.log(err);
                })
        }
    }, [uuid])

    return (
        <SimpleGrid p={'5px'} spacing={4} templateColumns={'repeat(auto-fill, minmax(300px, 1fr))'}>
            {/* <Box bg={'red.300'} h={'200px'} border={'1px solid'}>1</Box> */}
            {
                tasks.map((task) => (
                    <Card key={task._id} border={'2px solid'} bg={'gray.200'} color={'black'}>
                        <CardHeader>
                            <Heading>{task.title}</Heading>
                        </CardHeader>
                        <CardBody>
                            <Text>{task.description}</Text>
                        </CardBody>
                        <CardFooter justify={'center'}>

                            {
                                task.priority === 1 ?
                                    <Text color={'green.400'}>Priority: Low</Text> :
                                    null
                            }
                            {
                                task.priority === 2 ?
                                    <Text color={'yellow.500'}>Priority: Medium</Text> :
                                    null
                            }
                            {
                                task.priority === 3 ?
                                    <Text color={'red.400'}>Priority: High</Text> :
                                    null
                            }
                            {
                                task.priority === 4 ?
                                    <>
                                        <Icon as={WarningTwoIcon} alignSelf={'center'} />
                                        <Text color={'red'}>Priority: Top</Text>
                                    </> :
                                    null
                            }
                        </CardFooter>
                        <CardFooter justify={'center'}>
                            {
                                task.reaccuring ?
                                <Text color={'red'}>Reacurring</Text> :
                                null
                                // <Text>Not Reacurring</Text>
                            }
                        </CardFooter>
                        <IconButton aria-label='completed-task' icon={<CheckIcon/>} colorScheme='green' onClick={() => deleteTask(task._id)}/>
                    </Card>
                ))
            }
        </SimpleGrid>
    )
}

export default Dashboard;