import React from 'react'
import Header from './header'
import CahtBox from './chatBox'
import Footer from './footer'


export default class ChatScreen extends React.Component{
    render(){
        return(
            <div className='message-list-container'>
                <Header />  
                <CahtBox />
                <Footer />

            </div>


        ) 
    }
}
