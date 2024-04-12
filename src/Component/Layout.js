import React from 'react'

function Layout() {
  return (
    <header>
    <nav>
      <div class="logo">
       <a href='/' style={{ textDecoration: 'none' }}><h1 style={{color:'white'}}>Portfolio</h1></a> 
      </div>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">Profile</a>
        </li>
        <li>
          <a href="/projects">Projects</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </nav>
  </header>
  )
}

export default Layout
