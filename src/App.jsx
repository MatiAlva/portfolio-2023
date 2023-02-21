import './App.scss'
import { Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { Home } from './components/Home'
import './App.scss'
import { About } from './components/About'
import { Skills } from './components/Skills'
import { Projects } from './components/projects'
import Loader from 'react-loaders'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/skills' element={<Skills />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/*' element={<Home />} />
        </Route>
      </Routes>
      <Loader type='ball-pulse' />
    </>
  )
}

export default App
