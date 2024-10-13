import { Outlet } from "react-router-dom";
import MyNavbar from "./components/Navbar/MyNavbar";
import { Container, Row } from "react-bootstrap";

const Root = () => {
  return (
    <Container fluid id="root-container">
      <Row>
        <MyNavbar />
      </Row>
      <Row>
        <Outlet />
      </Row>
    </Container>
  );
};

export default Root;
