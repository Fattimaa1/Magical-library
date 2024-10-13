import { Row, Col } from "react-bootstrap";
import Books from "../../assets/books.jpg";

const Hero = () => {
  return (
    <Row>
      <Col>
        <h1>Welcome to my library!</h1>
      </Col>
      <Col>
        <img src={Books} alt="" />
      </Col>
    </Row>
  );
};

export default Hero;
