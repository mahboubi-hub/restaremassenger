import React from 'react'
import logo from '../../logo.svg'


class Login extends React.Component{
    constructor() {
        super()
        this.state = {email:'',password:''}

    }

handleChange (e) {
    console.log('ddddd',e.target.value )
}
handleChangeEmail (e) {
    let name = e.target.name
    console.log('handleChangeEmail',e.target.value,this )
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

                    <p>{this.state.email.value}</p>
                    
                    <input
                     placeholder='Password' 
                     type='password'
                     name='password'
                     onChange={(e) => this.handleChangeEmail(e)} />
                     

                    
                    <button ><b>login</b></button>
                    </div>

            </div>
        )
    }
}
export default Login