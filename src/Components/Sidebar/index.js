import SidebarLogo from './Components/SidebarLogo';
import NavigationList from './Components/NavigationList';
import Playlists from './Components/Playlists';

import './index.scss';

const Sidebar = () => {
  return (
    <nav className="sidebar">
      <SidebarLogo />
      <NavigationList />
      <Playlists />
    </nav>
  );
};

export default Sidebar;
