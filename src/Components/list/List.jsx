import Chatlist from "./chatlist/Chatlist";
import "./list.css";
import UserInfo from "./userinfo/UserInfo";

const List = () => {
  return (
    <div className="list">
      <UserInfo/>
      <Chatlist/>
    </div>
  )
}

export default List
