import "./user.css";
import UserInfoShow from "../../components/userInfoShow/UserInfoShow";
import UserInfoEdit from "../../components/userInfoEdit/UserInfoEdit";
import {Link} from "react-router-dom";


const User = () => {
  return (
    <div className="user">
        <div className="userTitleContainer">
            <h1 className="userTitle">Edit User</h1>
            <Link to="/newUser">
            <button className="userAddButton">Create</button>
            </Link>
        </div>
        <div className="userContainer">
            <UserInfoShow />
            <UserInfoEdit />
        </div>
    </div>
  )
}

export default User;