import React from 'react'
// import Logo from '../../logo.svg'
import Conversation from './converstation' 

export default class ConversationList extends React.Component{
    constructor(){
        super()
        this.state ={
            conveverstationList:[
                {
                    name: 'ali',
                    latestMessage:'bale',
                    latestMessageData:'1 min',
                    profile_url:'https://...',
                    unseen_message:'1',
                    id:'4',
                    email:'ali@yahoo.com'

                },
                {
                    name: 'reza',
                    latestMessage: 'salam',
                    latestMessageData:'2 min',
                    profile_url:'https://...',
                    unseen_message:'0',
                    id:'5',
                    email:'reza@gmail.com'
                }
            ]
        }
    }
    render(){
        return(
            <div className='conv-list'>
                {
                    this.state.conveverstationList.map((conv,index)=>{
                        return(
                            <Conversation data={conv} key={conv.email}/>
                        )
                    })
                }

            </div>


        )
    }
}
