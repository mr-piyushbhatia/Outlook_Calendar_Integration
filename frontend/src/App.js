import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './Components/Login'
import Calendar from './Components/Calendar'
import './App.css'

const App = () => {
  return (
    <Routes>
        <Route exact path='/' element={<Login/>} />
        <Route exact path='/calendar' element={<Calendar/>} />
    </Routes>
  )
}

export default App