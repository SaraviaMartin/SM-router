import {Link} from '../Link.jsx'

export default function AboutPage(){
    return (
      <>
        <h1>About</h1>
        <img src="https://www.mundodeportivo.com/alfabeta/hero/2023/05/satoru-gojo-jujutsu-kaisen.jpg?width=1200s" alt="" />
        <p>Hola, estoy creando un clon de react Router</p>
        <Link to={'/'}>Ir a la Home</Link>      
    </>
    )
  }