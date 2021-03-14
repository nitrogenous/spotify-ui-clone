import Header from '../../Components/Header/';
import Sidebar from '../../Components/Sidebar/';
import ControlBar from '../../Components/ControlBar/';
import Container from '../../Components/Container';

const Main = (props) => {
  return (
    <div>
      <Header />
      Main
      <Sidebar />
      <Container />
      <ControlBar />
    </div>
  );
};

export default Main;
