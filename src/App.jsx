import { useState } from 'react'
import './App.css'
export function Homepage(){
  return (
    <>
      <h1>Home</h1>
      <p>Este es un ejemplo para crear un Router desde cero</p>
      <a href="/about">Sobre Nosotros</a>
    </>
  )
}
export function AboutPage(){
  return (
    <>
      <h1>About</h1>
      <img src="https://www.mundodeportivo.com/alfabeta/hero/2023/05/satoru-gojo-jujutsu-kaisen.jpg?width=1200s" alt="" />
      <p>Hola, estoy creando un clon de react Router</p>
      <a href="/">ir a la Home</a>
    </>
  )
}


function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname) 
  return(
    <main>
      {currentPath === "/" && <Homepage/>}
      {currentPath === "/about" && <AboutPage/>}
    </main>
  )
}

export default App
