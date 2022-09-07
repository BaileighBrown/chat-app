import React from 'react'
import Img from "../img/save-image.png"
import Video from "../img/videocall2.png"

const Input = () => {
  return (
    <div className="input">
      <input type="text" placeholder="Type Here..."/>
      <div className="send">
        <img src={Video} alt="" />
        <input type="file" style={{display:"none"}} id="file"/>
        <label htmlFor="file">
          <img src={Img} alt="" />
        </label>
        <button>Send</button>
      </div>
    </div>
  )
}

export default Input