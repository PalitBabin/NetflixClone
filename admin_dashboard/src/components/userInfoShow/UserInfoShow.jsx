import "./userInfoShow.css";
import { PermIdentity, CalendarToday, PhoneAndroid, MailOutline, LocationSearching } from "@mui/icons-material";

const UserInfoShow = () => {
    return (
        <div className="userShow">
            <div className="userShowTop">
                <img
                    src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                    alt=""
                    className="userShowImg"
                />
                <div className="userShowTopTitle">
                    <span className="userShowUsername">Amme Ghosh</span>
                    <span className="userShowUserRole">Software Engineer</span>
                </div>
            </div>
            <div className="userShowBottom">
                <span className="userShowTitle">Account Details</span>
                <div className="userShowInfo">
                    <PermIdentity className="userShowIcon" />
                    <span className="userShowInfoTitle">@amme92</span>
                </div>
                <div className="userShowInfo">
                    <CalendarToday className="userShowIcon" />
                    <span className="userShowInfoTitle">10.06.1999</span>
                </div>
                <span className="userShowTitle">Contact Details</span>
                <div className="userShowInfo">
                    <PhoneAndroid className="userShowIcon" />
                    <span className="userShowInfotitle">+91 8445502626</span>
                </div>
                <div className="userShowInfo">
                    <MailOutline className="userShowIcon" />
                    <span className="userShowInfotitle">amme92@gmail.com</span>
                </div>
                <div className="userShowInfo">
                    <LocationSearching className="userShowIcon" />
                    <span className="userShowInfotitle">Hatibagan,2 No. Street, Kolkata</span>
                </div>
            </div>
        </div>
    )
}

export default UserInfoShow;