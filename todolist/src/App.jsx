import './index.css'
import Navbar from "./components/Navbar";
import { Route, Routes } from 'react-router-dom';
import RootLayout from './layouts/RootLayout';
import Dashboard from './components/Dashboard';
import { useState } from 'react';
import TodoForm from './components/TodoForm';
import Login from './components/Login';
import Register from './components/Register';
import { UserProvider } from './context/UserContext';
function App() {
  const [darkMode, setDarkMode] = useState('white')
  return (
    <>
    <UserProvider>
      <Routes>
        <Route index element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/' element={<RootLayout darkMode={darkMode} setDarkMode={setDarkMode} />}>
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='/dashboard/newTask' element={<TodoForm />} />
        </Route>
      </Routes>
    </UserProvider>
    </>

  )
}

export default App;
