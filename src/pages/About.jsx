import {Link} from '../Link.jsx'

const i18n = {
  es: {
    title: 'Sobre nosotros',
    button: 'Ir a la Home',
    description: 'Hola me llamo Juan'
  
  },
  en: {
    title: 'About us',
    button: 'Go to Home',
    description: 'Hi, my name is Juan'
  }
}

const usei18n = (lang) => {
  return i18n[lang] || i18n.en
}

export default function AboutPage({routeParams}){
  const i18n = usei18n(routeParams.lang ?? 'es')
    return (
      <>
        <h1>{i18n.title}</h1>
        <img src="https://www.mundodeportivo.com/alfabeta/hero/2023/05/satoru-gojo-jujutsu-kaisen.jpg?width=1200s" alt="" />
        <p>{i18n.description}</p>
        <Link to={'/'}>{i18n.button}</Link>      
    </>
    )
  }