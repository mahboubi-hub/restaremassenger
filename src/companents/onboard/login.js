import React from 'react'
import logo from '../../logo.svg'


class Login extends React.Component{
    render(){
        return(
            <div className='container'  >
                <div className='wrapper' >
                    
                    <img src={logo }    />
                    <p><b>User Login</b></p>

                    <input
                     placeholder='Email' 
                     type='email' />
                    
                    <input
                     placeholder='Password' 
                     type='password' />

                    
                    <button ><b>login</b></button>
                    </div>

            </div>
        )
    }
}
export default Login