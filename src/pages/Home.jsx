import {Link} from '../Link.jsx'

export default function Homepage(){
    return (
      <>
        <h1>Home</h1>
        <p>Este es un ejemplo para crear un Router desde cero</p>
        <Link to={'/about'}>Sobre Nosotros</Link>
      </>
    )
  }