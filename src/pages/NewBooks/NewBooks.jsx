import { Container } from "react-bootstrap";
import "./NewBooks.css";
import BooksList from "../../components/Books/BooksList";

const NewBooks = () => {
  return (
    <Container fluid className="new-books-container">
      <h2>My New Books</h2>
    </Container>
  );
};

export default NewBooks;
