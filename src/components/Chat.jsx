import React from 'react'
import Cam from "../img/videocall2.png";
import Add from "../img/addFriend.webp";
import More from "../img/more.webp";
import Messages from "./Messages";
import Input from "./Input";


const Chat = () => {
  return (
    <div className="chat">

      <div className="chatInfo">
        <span>Brandon</span>
        <div className="chatIcons">
          {/*<img src={Cam} alt="camera" />*/}
          <img src={Add} alt="add friend" />
          <img src={More} alt="more" />
          </div>
      </div>  
       <Messages/>
       <Input/>
    </div>
  )
}

export default Chat