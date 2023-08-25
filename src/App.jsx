import './App.css'
import Homepage from './pages/Home'
import AboutPage from './pages/About'
import Page404 from './pages/Page404'
import SearchPage from './pages/Search'
import {Router} from './Router'
import { Route } from './Route'

const appRoutes = [
  {
    path: '/search/:query',
    Component: SearchPage
  }
]

function App() {
  return(
    <main>
      <Router routes={appRoutes} defaultComponent={Page404}>
        <Route path="/" Component={Homepage} />
        <Route path="/about" Component={AboutPage} />
      </Router>
    </main>
  )
}

export default App
