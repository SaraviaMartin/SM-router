import './App.css'
import Page404 from './pages/Page404'
import SearchPage from './pages/Search'
import {Router} from './Router'
import { Route } from './Route'
import { Suspense, lazy } from 'react'

const LazyHomePage = lazy( () => import('./pages/Home.jsx'))
const LazyAboutPage = lazy( () => import('./pages/About.jsx'))//import dinamico

const appRoutes = [
  {
    path: '/search/:query',
    Component: SearchPage
  }
]

function App() {
  return(
    <main>
      <Suspense fallback={null}>
        <Router routes={appRoutes} defaultComponent={Page404}>
          <Route path="/" Component={LazyHomePage} />
          <Route path="/about" Component={LazyAboutPage} />
        </Router>
      </Suspense>
    </main>
  )
}

export default App
