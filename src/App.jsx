import React from 'react';
import { Route , Routes} from "react-router-dom"
import {DarkModeProvider} from './context/DarkModeContext';
import {LangProvider} from './i18n';
import './App.css'
import Home from './pages/Home/Home'
import Navbar from './Component/Navbar/Navbar'
import Footer from './Component/Footer/Footer'

function App() {
 
  return (
    <DarkModeProvider >  
     <LangProvider>
      <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>    
        <Footer />
     </LangProvider>
    </DarkModeProvider>
  )
}

export default App
