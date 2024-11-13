import { Outlet } from "react-router-dom";
import MyNavbar from "./components/Navbar/MyNavbar";
import { Container, Row } from "react-bootstrap";

const Root = () => {
  return (
    <Container fluid id="root-container">
      <Row className="welcome-section gx-0">
        <MyNavbar />
      </Row>
      <Row className="content-section gx-0 mt-6">
        <Outlet />
      </Row>
    </Container>
  );
};

export default Root;
