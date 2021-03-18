import { ReactComponent as Logo } from '../../../../Sources/logo_spotify_big.svg';
import './index.scss';

const SidebarLogo = () => {
  return (
    <div className="sidebar-logo">
      <a href="#">
        <Logo alt="spotify-logo"/>
      </a>
    </div>
  );
};

export default SidebarLogo;