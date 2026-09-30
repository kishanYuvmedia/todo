import './App.css'
import {BrowserRouter,Route, Routes } from "react-router"
import Home from './pages/home'
import About from './pages/about'
import Contact from './pages/contact'
import UserContext from './context/theme'
import { useState } from 'react'
function App() {
  const [theme,setTheme]=useState('Light')
  return (
    <>
    <BrowserRouter>
      <button type='button' onClick={()=>setTheme(theme=='Dark'?'Light':'Dark')}>{theme=='Dark'?'Light':'Dark'}</button>
        <UserContext.Provider  value={theme} >
          <Routes>
              <Route path='home' element={<Home name={'Rajesh'}/>}/>
               <Route path='about' element={<About/>}/>
                <Route path='contact' element={<Contact/>}/>
          </Routes>
          </UserContext.Provider>
    </BrowserRouter>
    </>
  )
}
export default App
