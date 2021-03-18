import './index.scss';

import { ReactComponent as Plus } from '../../../../Sources/Plus.svg';
import { ReactComponent as Liked } from '../../../../Sources/Liked.svg';


const Playlists = () => {
  return (
    <div className="playlists">
      <h5 classname="wrapper-title">PLAYLISTS</h5>
      <div>
        <button >
          <div>
            <Plus />
          </div>
          <span>
            Create Playlist
          </span>
        </button>
        <button>
          <div>
            <Liked />
          </div>
          <span>
            Liked Songs
          </span>
        </button>
      </div>
      <hr />
    </div>
  );
};

export default Playlists;
