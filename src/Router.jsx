import { EVENTS } from './consts'
import { useState, useEffect } from 'react'

export default function  Router ({routes=[], defaultComponent: DefaulComponent = () => <h1>404</h1>}){
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
  
    const Page = routes.find(({path}) => path === currentPath)?.Component
    return Page ? <Page/> : <DefaulComponent/>
  }