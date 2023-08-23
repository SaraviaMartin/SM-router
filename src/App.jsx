import { useEffect, useState } from 'react'
import './App.css'
import { EVENTS } from './consts'

function navigate(href){
  window.history.pushState({}, '', href)
  const navigationEvent = new Event(EVENTS.PUSHSTATE)
  window.dispatchEvent(navigationEvent)
}



export function Homepage(){
  return (
    <>
      <h1>Home</h1>
      <p>Este es un ejemplo para crear un Router desde cero</p>
      <button onClick={()=> navigate('about')}>Sobre Nosotros</button>
    </>
  )
}
export function AboutPage(){
  return (
    <>
      <h1>About</h1>
      <img src="https://www.mundodeportivo.com/alfabeta/hero/2023/05/satoru-gojo-jujutsu-kaisen.jpg?width=1200s" alt="" />
      <p>Hola, estoy creando un clon de react Router</p>
      <button onClick={()=> navigate('/')}>ir a la Home</button>
    </>
  )
}


function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname) 

  useEffect(() => {
    const onLocationChange=()=> {
      setCurrentPath(window.location.pathname)
    }

    window.addEventListener(EVENTS.PUSHSTATE,onLocationChange)
    window.addEventListener(EVENTS.POPSTATE, onLocationChange)

    return ()=> {
      window.removeEventListener(EVENTS.PUSHSTATE,onLocationChange)
      window.addEventListener(EVENTS.POPSTATE, onLocationChange)
    }
  }, [])

  return(
    <main>
      {currentPath === "/" && <Homepage/>}
      {currentPath === "/about" && <AboutPage/>}
    </main>
  )
}

export default App
