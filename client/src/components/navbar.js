import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
       <nav className='nav'>
           <h1>
           <i class="fas fa-ticket-alt fa-2x" ></i>
               <Link className='blockbuster' to='/'>Blockbuster Max</Link>
           </h1>
           <ul>
               <Link to='/login'>Login</Link>
               <Link to='/register'>Register</Link>
           </ul>
       </nav>
    )
}

export default Navbar
