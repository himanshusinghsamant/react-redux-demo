import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Cart from './Cart'

const Navbar = () => {

    const [change, setChange] = useState(false)
    function handleToggle (){
        setChange(!change)
    }

  return (
    <div>
      <div style={{ height:'40px', backgroundColor:'pink', display:'flex',justifyContent:'space-between',alignItems:'center', padding:'20px 50px'}} className="navbar">
      <div className="pages" style={{display:'flex', alignItems:'center'}}>
      <h1>NavBar</h1>
        <h3 style={{marginLeft:'200px', marginRight:'40px'}}><Link to={'/'}>Home</Link></h3>
        <h3><Link to={'/desserts'}>Desserts</Link></h3>
      </div>
     {change ? <button onClick={handleToggle} style={{padding: '5px 10px', fontWeight:'bold', backgroundColor:'yellow', color:'red', cursor:'pointer', border:'none',borderRadius:'20px'}}>CART</button>: <button onClick={handleToggle} style={{padding: '5px 10px', fontWeight:'bold', backgroundColor:'black', color:'white', cursor:'pointer', border:'none',borderRadius:'20px'}}>CART</button> }
      </div>
     {change ? <Cart/> : null}
    </div>
  )
}

export default Navbar
