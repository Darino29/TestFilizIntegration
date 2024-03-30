
import './App.css'
import React from 'react'
import { Home } from './components/Pages/Home/Home.tsx'
import { Header } from './components/Header/Header.tsx'
import { Aboutus } from './components/Pages/Aboutus/Aboutus.tsx'
import { NosValeurs } from './components/Pages/Nosvaleurs/Nosvaleurs.tsx'


export default function MyApp() {
  return (
    <main>
      <div>
       <Header/>
       <div style={{padding:'92px',display: 'flex'}}>
       <Home/> 
       </div>
       <div >
       <Aboutus/> 
       </div>
       <div >
       <NosValeurs/> 
       </div>
      </div>
    </main>
  )
}