import React from 'react'
import logo from '../../logo.svg'
import validate from '../../validation/validateFunction.js'


class Login extends React.Component{
    constructor() {
        super()
        this.state = {
            email:'',
            password:'',
            emailError:null,
            passwordError:null
        
        }

    }
validationFealds(){
    const emailError=validate('email',this.state.email)
    const passwordlError=validate('password',this.state.password)
    this.setState({emailError: emailError, passwordError:passwordlError})


}

handleChange (e) {
    console.log('ddddd',e.target.value )
}
handleChangeEmail (e) {
    let name = e.target.name
    // console.log('handleChangeEmail',e.target.value,this )
    this.setState({[name]: e.target.value})
}


    render(){
        // console.log("thisss", this)
        return(
            <div className='container'  >
                <div className='wrapper' >
                <h2>{this.props.title}        </h2>

                    
                    <img src={logo }    />
                    <p><b>User Login</b></p>

                    <input
                     placeholder='Email' 
                     type='email'
                     name='email'
                     onChange={(e) =>this.handleChangeEmail(e)} />

                     {
                         this.state.emailError !==null &&

                        <p style={{color:'red'}}>{this.state.emailError}</p>

                     }



                    <input
                     placeholder='Password' 
                     type='password'
                     name='password'
                     onChange={(e) => this.handleChangeEmail(e)} />
                     
                     
                     {
                         this.state.passwordError !==null &&

                     <p style={{color:'red'}}>{this.state.passwordError}</p>

                     }
                     

                    
                    <button 
                        onClick={()=>this.validationFealds()}
                    ><b>login</b></button>
                    </div>

            </div>
        )
    }
}
export default Login