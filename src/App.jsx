import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HelloWorld from './CiaoMondo';
import Counter from './Counter'





function App() {
 
  return (
  
      <div>
           <HelloWorld />
         <Counter />
      <h1>React con Vite!</h1>
      <p>Questa è la mia prima app con Vite</p>
      </div>
      
    
  )
}

export default App
