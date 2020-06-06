import React from 'react'
import Header from './header'
import CahtBox from './chatBox'
import Footer from './footer'

export default class ChatScreen extends React.Component{
    constructor(props ){
        super(props)
        this.state = {newmessage: ''}
    }

     getNewMessage (newMessage) {
         console.log('newMessage:::', newMessage)
         this.setState({newMessage})
    }
    render(){
        return(
            <div className='message-list-container'>
                <Header />  
                <CahtBox newMessage={this.state.newmessage} />
                <Footer getNewMessage={(newMessage)=>this.getNewMessage(newMessage)} />

            </div>


        ) 
    }
}
