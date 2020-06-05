import React from 'react'
import Logo from '../../logo.svg'

export default class Conversation extends React.Component{
    render(){
        console.log('proops:::',this.props)
        return(
                <div className='conversation'>
                    <img width='30px' src={Logo} alt='world'  />
                    <div className='conversation-data'>
                        <div>
                            <span> {this.props.data.name} </span>
                            <span> {this.props.data.latestMessageData} </span>


                        </div>
                        <div>
                        <span>{this.props.data.latestMessage}</span>
                        <span>{this.props.data.unseen_message}</span>



                        </div>
                    </div>
                </div>
                



        )
    }
}
