import { useState } from 'react'

import './App.css'
import Layout from './layouts/Layout'
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Register from './pages/Register'
import Login from './pages/Login'

function App() {


  return (
    <Router>
      <Routes>
      
       <Route path="/" element={<Layout></Layout>}/>
       <Route path="/search"  element={<>Search Page</>}/>
       <Route path="*"  element={<Navigate to = "/" />}/>
       <Route path= "/users/register" element = {<Layout><Register/></Layout>}/>
       <Route path= "/auth/login" element = {<Layout><Login/></Layout>}/>
      
      </Routes>
    </Router>
  )
}

export default App
