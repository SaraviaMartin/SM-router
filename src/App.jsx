import './App.css'
import Homepage from './pages/Home'
import AboutPage from './pages/About'
import {Router} from './Router'
import Page404 from './pages/Page404'
import SearchPage from './pages/Search'

const routes = [
  {
    path: '/',
    Component: Homepage
  },
  {
    path: '/about',
    Component: AboutPage
  },
  {
    path: '/search/:query',
    Component: SearchPage
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
