import "./userInfoEdit.css";
import { Publish } from "@mui/icons-material";


const UserInfoEdit = () => {
  return (
    <div className="userUpdate">
        <span className="userUpdateTitle">Edit</span>
        <form action="" className="userUpdateForm">
            <div className="userUpdateLeft">
                <div className="userUpdateItem">
                    <label>Username</label>
                    <input type="text" 
                    placeholder="@amme92"
                    className="userUpdateInput"
                     />
                </div>
                <div className="userUpdateItem">
                    <label>Fullname</label>
                    <input type="text" 
                    placeholder="Amme Ghosh"
                    className="userUpdateInput"
                     />
                </div>
                <div className="userUpdateItem">
                    <label>Email</label>
                    <input type="text" 
                    placeholder="amme92@gmail.com"
                    className="userUpdateInput"
                     />
                </div>
                <div className="userUpdateItem">
                    <label>Username</label>
                    <input type="text" 
                    placeholder="@amme92"
                    className="userUpdateInput"
                     />
                </div>
                <div className="userUpdateItem">
                    <label>Phone</label>
                    <input type="text" 
                    placeholder="+91 8445502626"
                    className="userUpdateInput"
                     />
                </div>
                <div className="userUpdateItem">
                    <label>Address</label>
                    <input type="text" 
                    placeholder="Hatibagan,2No.Street, Kolkata"
                    className="userUpdateInput"
                     />
                </div>
            </div>
            <div className="userUpdateRight">
              <div className="userUpdateUpload">
                <img
                  className="userUpdateImg"
                  src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                  alt=""
                />
                <label htmlFor="file">
                  <Publish className="userUpdateIcon" />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <button className="userUpdateButton">Update</button>
            </div>
        </form>
    </div>
  )
}

export default UserInfoEdit;