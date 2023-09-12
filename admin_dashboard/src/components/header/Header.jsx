import "./header.css";
import { NotificationsNone, Language, Settings } from '@mui/icons-material';
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/authContext/AuthContext";
import { logoutUser } from "../../context/authContext/authApi";

const Header = () => {

  const {dispatch} = useContext(AuthContext);

  const handleLogout = (e)=>{
    e.preventDefault();
     logoutUser(dispatch);
  }

  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <Link to="/" className="link">
            <span className="logo">Palitadmin</span>
          </Link>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <div className="avatar-container">
            <img
              src="https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              className="topAvatar"
            />
            <div className="logout" onClick={handleLogout}>
              <span>Logout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header;