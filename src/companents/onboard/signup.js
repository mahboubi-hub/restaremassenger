import React from 'react'
import logo from '../../logo.svg'
import validate from '../../validation/validateFunction.js'
import { Link } from 'react-router-dom'



class Signup extends React.Component{
    constructor(){
        super()
        this.state ={
            fields :{
                email: '',
                password:'',
                confrimPassword:''

            },
            errors :{
                
                email:null,
                password:null,
                confrimPassword:null


            }
             
        }

    }
    // handleChange (e){
    //     this.setState({[e.target.name]:e.target.value})
    // }
    handleChange (e){
        this.setState({...this.state, fields: { ...this.state.fields , [e.target.name]: e.target.value}})
    }
    handleError (){
        const confrimPasswordErrors = this.state.fields.password ===this.state.fields.confrimPassword 
            ? null
            : 'password & confrim password do not match '
        const errors ={
            email: validate('email',this.state.fields.email),
            password: validate('password',this.state.fields.password),
            confrimPassword: confrimPasswordErrors
             
        }
        this.setState({errors:errors})
    }


    render(){
        console.log('state',this.state)

        return(
            
            <div className='container'  >
                <div className='wrapper' >
                    
                    <img alt='world' src={logo }    />
                    <p><b>Sign Up</b></p>

                    <input
                     placeholder='Email' 
                     type='email' 
                     name='email'
                     onChange={(e) =>this.handleChange(e)} />
                     { this.state.errors.email !== null &&
                        <span >{this.state.errors.email}</span>
                     }
                     
                    
                    <input
                     placeholder='Password'
                     name='password' 
                     type='password' 
                     onChange={(e)=> this.handleChange(e)} />
                     { this.state.errors.password !== null &&
                     <span >{this.state.errors.password}</span>
                     }

                     <input
                     placeholder='confirm Password' 
                     name='confrimPassword'
                     type='password'
                     onChange={(e)=> this.handleChange(e)} />
                     { this.state.errors.confrimPassword !== null &&
                     <span >{this.state.errors.confrimPassword}</span>
                     }

                    
                    <button 
                    onClick={()=>this.handleError ()}><b>Sign Up</b></button>
                    <Link to='/'>already have an account? Login</Link>
                    </div>

            </div>
        )
    }
}
export default Signup