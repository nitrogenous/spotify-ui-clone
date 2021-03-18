import { ReactComponent as FilledHome } from '../../../../Sources/home_filled.svg';
import { ReactComponent as Search } from '../../../../Sources/search_small.svg';
import { ReactComponent as Library } from '../../../../Sources/library_small.svg';

import './index.scss';


const NavigationList = () => {
  return (
    <ul className="navigation-list">
      <li>
        <a href="#" className="navigation current">
          <div className="navigation-logo">
            <FilledHome alt="home-navigation-logo"/>
          </div>
          <span className="navigation-name">Home</span>
        </a>
      </li>
      <li>
        <a href="#" className="navigation">
          <div className="navigation-logo">
            <Search alt="search-navigation-logo"/>
          </div>
          <span className="navigation-name">Search</span>
        </a>
      </li>
      <li>
        <a href="#" className="navigation">
          <div className="navigation-logo">
            <Library alt="library-navigation-logo"/>
          </div>
          <span className="navigation-name">Your Library</span>
        </a>
      </li>
    </ul>
  );

};

export default NavigationList;
