import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Route,Routes} from 'react-router-dom'
import HomePage from './Page/HomePage'
import BlogList from './Page/BlogList'
import Adding from './Page/Adding'
import DetailBlog from './Page/DetailBlog'
import Navbar from './component/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <Navbar/>
      <Routes>
        <Route path='/'  element={<HomePage/>} />
        <Route path='/post'  element={<BlogList/>} />
        <Route path='/add'  element={<Adding/>} />
        <Route path='/post/:blogId'  element={<DetailBlog/>} />
      </Routes>
    </div>
    </>
  )
}

export default App
