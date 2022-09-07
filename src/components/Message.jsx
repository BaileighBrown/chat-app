import React from 'react'

function Message() {
  return (
    <div className="message owner">
        <div className="messageInfo">
            <img src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" 
            />  
            <span>Just Now</span>
        </div>
        <div className="messageContent">
            <p>Hello</p>
           <img src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
        </div>
    </div>
  )
}

export default Message