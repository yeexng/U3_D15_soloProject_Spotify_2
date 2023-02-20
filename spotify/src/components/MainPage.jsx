import { Col, Container, Row } from "react-bootstrap";
import MusicPlayer from "./MusicPlayer";
import SideBar from "./SideBar";
import SongList from "./SongList";

const MainPage = () => {
  return (
    <div>
      <Container fluid>
        <Row>
          <Col md={2}>
            <SideBar />
          </Col>
          <Col md={10}>
            <SongList />
          </Col>
        </Row>
        <Row>
          <MusicPlayer />
        </Row>
      </Container>
    </div>
  );
};

export default MainPage;
