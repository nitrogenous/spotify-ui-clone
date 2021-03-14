import './index.scss';

import { ReactComponent as Logo } from '../../Sources/logo_spotify_big.svg';
import { ReactComponent as FilledHome } from '../../Sources/home_filled.svg';
import { ReactComponent as Search } from '../../Sources/search_small.svg';
import { ReactComponent as Library } from '../../Sources/library_small.svg';


const Sidebar = () => {
  return (
    <nav className="sidebar">
      <div className="logo">
        <a href="#">
          <Logo />
        </a>
      </div>
      <ul className="directories">
        <li>
          <a href="#" className="directory current">
            <div className="directory-logo">
              <FilledHome />
            </div>
            <span className="directory-name">Home</span>
          </a>
        </li>
        <li>
          <a href="#" className="directory">
            <div className="directory-logo">
              <Search />
            </div>
            <span className="directory-name">Search</span>
          </a>
        </li>
        <li>
          <a href="#" className="directory">
            <div className="directory-logo">
              <Library />
            </div>
            <span className="directory-name">Your Library</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
