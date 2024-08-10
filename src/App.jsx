import { useEffect } from "react";
import Chat from "./Components/chat/Chat"
import Detail from "./Components/detail/Detail"
import List from "./Components/list/List"
import Login from "./Components/login/Login";
import Notification from "./Components/notification/Notification";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./lib/firebase";

const App = () => {
  const user = false;
  useEffect(() => {
    const unSub = onAuthStateChanged(auth,(user) => {
      console.log(user);
    });
    return () => {
      unSub();
    };
  })
  return (
    <div className='container'>
      {
        user ? (<>
        <List/>
        <Chat/>
        <Detail/>
        </>):(<Login/>)
      }
    <Notification/>
    </div>
  )
}

export default App