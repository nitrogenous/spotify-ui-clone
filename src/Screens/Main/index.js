import Header from '../../Components/Header/';
import Sidebar from '../../Components/Sidebar/';
import ControlBar from '../../Components/ControlBar/';
import Container from '../../Components/Container';

import './index.scss';

const Main = (props) => {
  return (
    <div className="main-screen">
      <Header />
      <Sidebar />
      <ControlBar />
      <Container />
    </div>
  );
};

export default Main;
