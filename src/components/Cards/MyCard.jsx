import Card from "react-bootstrap/Card";

function MyCard({ book }) {
  return (
    <Card style={{ height: "410px" }} className="p-2">
      <Card.Img
        variant="top"
        src={`https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`}
        width={"150px"}
        height={"250px"}
      />
      <Card.Body>
        <Card.Title>
          <strong>Title: </strong>
          {book.title}
        </Card.Title>
        <Card.Text>
          <strong>Author: </strong>
          {book.author_name}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default MyCard;
