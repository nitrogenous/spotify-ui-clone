import Header from '../../Components/Header/';
import Sidebar from '../../Components/Sidebar/';
import ControlBar from '../../Components/ControlBar/';
import ContainerWrapper from '../../Components/ContainerWrapper/';

const Main = (props) => {
  return (
    <div>
      <Header />
      Main
      <Sidebar />
      <ContainerWrapper />
      <ControlBar />
    </div>
  );
};

export default Main;
