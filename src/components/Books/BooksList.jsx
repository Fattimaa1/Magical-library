import { useEffect, useState } from "react";
import { Container, Form, Row, Col } from "react-bootstrap";

import MyCard from "../cards/MyCard";

const BooksList = () => {
  const [books, setBooks] = useState([]);
  const [query, setQuery] = useState("harry potter");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    booksFetchData(query);
  }, [query]);

  const booksFetchData = async () => {
    try {
      const response = await fetch(
        `https://openlibrary.org/search.json?q=${query}`
      );
      const data = await response.json();
      setBooks(data.docs);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <Row className="py-5 justify-content-center">
        <h2>Search among books!</h2>
        <Form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <Form.Group className="mb-3" controlId="search">
            <Form.Control
              type="text"
              placeholder="Search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </Form.Group>
        </Form>
      </Row>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <Row>
          {books &&
            books?.map((book, index) => (
              <Col key={index} sm={12} md={4} lg={3} className="px-1 py-3">
                <MyCard book={book} />
              </Col>
            ))}
        </Row>
      )}
    </Container>
  );
};

export default BooksList;
