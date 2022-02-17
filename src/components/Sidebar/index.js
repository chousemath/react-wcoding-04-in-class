import SidebarButton from "./SidebarButton";
import "./styles.css";
const Sidebar = ({ setContent }) => {
  return (
    <div className="sidebar-container">
      <SidebarButton setContent={setContent} text="Users" />
      <SidebarButton setContent={setContent} text="Posts" />
    </div>
  );
};

export default Sidebar;
