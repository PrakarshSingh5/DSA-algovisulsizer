
import React ,{useState} from 'react'
import './navbar.css';

const Navbar = () => {


    
  return (
    <div className='navbar'>
            <div className='wrapper'>
                <div className='logo'>Algo Visulizer</div>
               
                <div className='types'>
                    <button className="type">
                Sorting
                    </button>
                    <button className="type">
                Graph
                    </button>
                </div>
            </div>
    </div>
  )
}

export default Navbar
