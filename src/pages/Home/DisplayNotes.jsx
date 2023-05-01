import { Button, Card } from "react-bootstrap";
import { PropTypes } from "prop-types";

const DisplayNotes = (props) => {
  const { note, updateNote, handleDelete } = props;

  return (
    <div>
      <div className="d-flex justify-content-between">
        <h2>All Notes</h2>
        <input
          style={{ backgroundColor: "#212A3E" }}
          className="rounded-3 px-4 text-white"
          type="text"
          placeholder="Search Notes..."
        />
      </div>
      <Card
        className="text-black w-auto h-auto my-3 text-white"
        style={{ backgroundColor: "#212A3E", borderBottom: "2px solid #ccc" }}
      >
        <Card.Body>
          <Card.Title>{note.title}</Card.Title>
          <Card.Text>{note.content}</Card.Text>
          <div className="d-flex md:justify-content-center">
            <Button 
              className="me-2"
              variant="primary"
              onClick={() => handleDelete(note.id)}
            >
              DELETE
            </Button>
            <Button onClick={()=> updateNote({title:note.title, content:note.content, id:note.id })} type="edit" variant="success">
              EDIT
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

DisplayNotes.propTypes = {
  note: PropTypes.string.isRequired,
  handleDelete: PropTypes.string.isRequired,
  updateNote: PropTypes.string.isRequired,
};

export default DisplayNotes;
