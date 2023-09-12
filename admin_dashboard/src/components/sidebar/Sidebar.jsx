import "./sidebar.css";
import SidebarMenu from "../sidebarMenu/SidebarMenu";


const Sidebar = () => {
  return (
    <div className="sidebar">
        <div className="sidebarWrapper">
        <SidebarMenu />
        </div>
    </div>
  )
}

export default Sidebar;