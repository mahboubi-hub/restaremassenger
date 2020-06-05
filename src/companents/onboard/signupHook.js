import React,{useState} from 'react'
import logo from '../../logo.svg'
// import validate from '../../validation/validateFunction.js'
import { Link } from 'react-router-dom'



function SignupWithHook(props) {
const[count,setCount] = useState(0 )
const[fields,setFields] = useState({
    email:'',
    password:'',
    confrimpassword:''
} )
const[errors,setErrors] = useState({
    email:null,
    password:null,
    confrimPassword:null

} )

   
        return(
            
            <div className='container'  >
                <div className='wrapper' >
                    
                     <img alt='world' src={logo }    />
                    <p><b>Sign Up</b></p>

                    <input
                     placeholder='Email' 
                     type='email' 
                     name='email'
                     />
                     
                     
                    
                    <input
                     placeholder='Password'
                     name='password' 
                     type='password' 
                      />
                     

                     <input
                     placeholder='confirm Password' 
                     name='confrimPassword'
                     type='password'
                      />
                     

                    
                    <button
                        onClick={()=>setCount(count+1)}
                        ><b>Sign Up{count}</b></button>
                    <Link to='/'>already have an account? Login</Link>
                    </div>

            </div>
        )
    }

export default SignupWithHook