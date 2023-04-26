import axios from 'axios'
import {createContext, useState, useEffect} from 'react'

export const userContext = createContext()

export const UserProvider = (props) => {
    const [loggedInUser, setLoggedInUser] = useState({})
    const uuid = window.localStorage.getItem('uuid')

    // ! Doesnt seem like I this one
    // useEffect(() => {
    //     if(!uuid) return 
    //     else{
    //         axios.get(`http://localhost:8000/api/loggedInUser/${uuid}`)
    //             .then((res) => {
    //                 setLoggedInUser(res.data)
    //             })
    //             .catch((err) => {
    //                 console.log(err);
    //             })
    //     }
    // }, [uuid])
    return (
        <userContext.Provider value={{
            loggedInUser,
            setLoggedInUser
        }}>
            {props.children}
        </userContext.Provider>
    )
}