import React,{useState} from 'react'
import logo from '../../logo.svg'
import validate from '../../validation/validateFunction.js'
import { Link } from 'react-router-dom'



function SignupWithHook(props) {
const[count,setCount] = useState(0 )
const[fields,setFields] = useState({
    email:'',
    password:'',
    confrimpassword:''
} )

const handleCange =(e) =>{
    
    setFields({...fields, [e.target.name]:e.target.value})
}
const[errors,setErrors] = useState({
    email:null,
    password:null,
    confrimPassword:null

} )

const handleError =()=>{
    const confrimPasswordErrors = fields.password ===fields.confrimPassword 
        ? null
        : 'password & confrim password do not match '
    const errors ={
        email: validate('email',fields.email),
        password: validate('password',fields.password),
        confrimPassword: confrimPasswordErrors
         
    }
    setErrors(errors)
}
   
        return(
            
            <div className='container'  >
                <div className='wrapper' >
                    
                     <img alt='world' src={logo }    />
                    <p><b>Sign Up</b></p>

                    <input
                     placeholder='Email' 
                     type='email' 
                     name='email'
                     onChange={handleCange}
                     />
                      {errors.email !== null &&
                        <span >{errors.email}</span>
                     }
                     
                     
                    
                    <input
                     placeholder='Password'
                     name='password' 
                     type='password' 
                     onChange={handleCange}

                      />
                     

                     <input
                     placeholder='confirm Password' 
                     name='confrimPassword'
                     type='password'
                     onChange={handleCange}

                      />
                     
                     

                    
                    <button
                        onClick={handleError}
                        ><b>Sign Up{count}</b></button>
                    <Link to='/'>already have an account? Login</Link>
                    </div>

            </div>
        )
    }

export default SignupWithHook