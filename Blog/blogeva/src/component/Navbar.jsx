import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
        <nav style={{color:"aqua"}}>
            <Link to='/'>Home</Link>
            <Link to='/post'>BlogList</Link>
            <Link to='/add'>Add Blog</Link>
        </nav>
    </div>
  )
}

export default Navbar