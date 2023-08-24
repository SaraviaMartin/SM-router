import './App.css'
import Homepage from './pages/Home'
import AboutPage from './pages/About'
import {Router} from './Router'
import Page404 from './pages/Page404'

const routes = [
  {
    path: '/',
    Component: Homepage
  },
  {
    path: '/about',
    Component: AboutPage
  }
]

function App() {
  return(
    <main>
      <Router routes={routes} defaultComponent={Page404}/>
    </main>
  )
}

export default App
