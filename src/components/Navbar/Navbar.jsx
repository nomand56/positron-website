import React from 'react'
import "./Navbar.css"
function Navbar() {
  return (
    <div className='pstrn__navbar' >
      <div className="pstrn__links">
        <div className="pstrn__logo">
        <p>Positron</p>
        </div>
        <div className="pstrn__links-continer">
          <ul>
           <li><a href="/">Home</a></li>
           <li><a href="/">About</a></li>
           <li><a href="/">Testimonials</a></li>
           <li><a href="/">config?</a></li>
          </ul>
        </div>
      </div>
<div className="pstrn__btns">
  <p>
    Sign in 
  </p>
  <button className='pstrn__btns-2'>
Sign up
  </button>
</div>
    </div>
  )
}

export default Navbar