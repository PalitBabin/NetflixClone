import "./widgetSm.css";
import { Visibility } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { getNewUsers } from "../service/api";


const WidgetSm = () => {

  const [newUsers,setNewUsers] = useState([]);

  useEffect(()=>{
    const newTotalUsers = async()=>{
      const response = await getNewUsers();
      setNewUsers(response);
    }
    newTotalUsers();
  },[]);

  return (
    <div className="widgetSm">
        <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        {
          newUsers && newUsers.map((user,index)=>(

        <li key={index} className="widgetSmListItem">
          <img
            src={user.profilePic || "https://cdn.pixabay.com/photo/2023/08/22/14/51/south-indian-woman-8206562_640.png"}
            alt="avatar"
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">{user.username}</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
          ))
        }
      </ul>
    </div>
  )
}

export default WidgetSm;