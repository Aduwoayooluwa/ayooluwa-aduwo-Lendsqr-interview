import { DropdownProfileIcon, NotificationBellIcon, ProfileImage } from "../assets";
import { Search } from "../components/input";
import { Logo } from "../components/logo";
import "./style/header.scss"
import { Link } from "@tanstack/react-router";
import { Menu, Dropdown, Avatar } from 'antd';

const UserProfileDropdown = () => {
  const menu = (
    <Menu>
      <Menu.Item key="0">
        Change Theme
      </Menu.Item>
      <Menu.Item key="1">
        Help
      </Menu.Item>
      <Menu.Item key="2">
        Log Out
      </Menu.Item>
    </Menu>
  );

  return (
    <Dropdown overlay={menu} trigger={['click']}>
      <a className="ant-d-user-dropdown" onClick={e => e.preventDefault()}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Avatar src={ProfileImage} size={48}  style={{ marginRight: '8px' }} />
          <p className="p-text-name">Adedeji</p>  <img src={DropdownProfileIcon} alt="dropdown" style={{ marginLeft: '8px' }} />
        </div>
      </a>
    </Dropdown>
  );
};
export default function Header() {
    return (
        <div className="header">
            <div className="header-container">
                <Logo />
                <Search />

                <div className="header-right-items">

                    <Link to={"/"}  className="p-docs">Docs</Link>

                    <img src={NotificationBellIcon} className="notification-bell" alt="notification bell" />

                    <div className="display-name">
                        <UserProfileDropdown />
                        
                    </div>
                </div>
            </div>
        </div>
    )
}