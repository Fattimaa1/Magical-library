import { Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./Hero.css";
import Books from "../../assets/bookss.png";
import MyButton from "../Button/MyButton";

const Hero = () => {
  const navigate = useNavigate();

  const onClickHandler = () => {
    navigate("/new-books");
  };

  return (
    <Row className="hero-section p-0 gx-0">
      <Col
        className="hero-text p-3 d-flex flex-column justify-content-center align-items-center"
        xs={12}
        md={6}
      >
        <h1 className="hero-text-title">Welcome to my library!</h1>

        <p>
          Step into a world of knowledge and imagination; <br /> where every
          page turns a new chapter in your reading journey!
        </p>
        <MyButton buttonText="New Books" onClickHandler={onClickHandler} />
      </Col>
      <Col
        className="hero-photo d-flex justify-content-center align-items-center"
        xs={12}
        md={6}
      >
        <img src={Books} alt="" />
      </Col>
    </Row>
  );
};

export default Hero;
