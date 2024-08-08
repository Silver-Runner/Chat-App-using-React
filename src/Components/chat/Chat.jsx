import "./chat.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import EmojiPicker from "emoji-picker-react";
import { useEffect, useRef, useState } from "react";

const Chat = () => {
  const [open, setOpen] = useState(false);
  const [text , setText] = useState("");
  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({behavior:"smooth"});
  },[])

  const handelEmoji = (e) =>{
        setText((prev) => prev + e.emoji );
        setOpen(false);
  }
  return (
    <div className="chat" >
      <div className="top">
        <div className="user">
          <img src="./avatar.png" alt=""/>
          <div className="texts">
            <span>Rishabh</span>
            <p>Lorem, ipsum dolor sit </p>
          </div>
        </div>
        <div className="icons">
          <img src="./phone.png" alt=""/>
          <img src="./video.png" alt=""/>
          <img src="./info.png" alt=""/>
        </div>
      </div>
      <div className="center">
        <div className="message">
          <img src="avatar.png" alt=""/>
          <div className="texts">
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat impedit itaque dolores earum perspiciatis accusamus </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message">
          <img src="avatar.png" alt=""/>
          <div className="texts">
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat impedit itaque dolores earum perspiciatis accusamus </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          
          <div className="texts">
            <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fbackground-image&psig=AOvVaw2oubieblGJoPPZqtJTLlbT&ust=1723202129008000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCIDsjKmi5YcDFQAAAAAdAAAAABAE" alt=""/>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat impedit itaque dolores earum perspiciatis accusamus </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message">
          <img src="avatar.png" alt=""/>
          <div className="texts">
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat impedit itaque dolores earum perspiciatis accusamus </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          
          <div className="texts">
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat impedit itaque dolores earum perspiciatis accusamus </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat impedit itaque dolores earum perspiciatis accusamus </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div ref={endRef}></div>
    </div>
      <div className="bottom">
      <div className="message">
      
        <div className="emoji">
        <img src="./emoji.png" alt="" onClick={() => setOpen((prev) => !prev)}/>
        <div className="picker">
        <EmojiPicker open={open} onEmojiClick={handelEmoji}/> 
        </div>
        </div>
         
        <input type="text" placeholder="Type a message ..." value={text}  onChange={(e) => setText(e.target.value)}/>
        <FontAwesomeIcon icon={faPaperPlane}  className="SendButton"/> 
      </div>
       
        <div className="icons">
          <img src="./img.png" alt=""/>
          <img src="./camera.png" alt=""/>
          <img src="./mic.png" alt=""/>
        </div>
        
        
        </div>
      </div>
    
  )
}

export default Chat
