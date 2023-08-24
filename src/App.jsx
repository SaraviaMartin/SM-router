import './App.css'
import Homepage from './pages/Home'
import AboutPage from './pages/About'
import {Router} from './Router'

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
      <Router routes={routes}/>
    </main>
  )
}

export default App
