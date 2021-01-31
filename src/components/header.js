import React from 'react'
import Form from './form'
import logo from './logo.png'



const Header = () => {
    return (
        <section className='header'>
            <img src={logo} alt='Logo' className='logo'/>
            
            <br/>
            <Form/>
        </section>
    )
}

export default Header