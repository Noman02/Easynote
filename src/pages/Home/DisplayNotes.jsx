import { Button, Card } from "react-bootstrap";
import { PropTypes } from "prop-types";
import moment from "moment";
import "./DisplayNotes.css";

const DisplayNotes = (props) => {
  const { note, updateNote, handleDelete } = props;

  return (
    <div
      className="text-black w-auto h-auto text-white"
      style={{ backgroundColor: "#212A3E", borderBottom: "2px solid #ccc" }}
    >
      <Card.Body className="my-3">
        <Card.Title className="mb-3">{note.title}</Card.Title>
        <Card.Text>{note.content}</Card.Text>
        <span className="text-muted">
          <small className="me-2">Created</small>
          {moment().format("Do MMMM YYYY")}
        </span>
        <div className="d-flex md:justify-content-center">
          <Button
            className="me-2 text-warning delete"
            variant="outline"
            size="sm"
            onClick={() => handleDelete(note.id)}
          >
            Delete
          </Button>
          <Button
            onClick={() =>
              updateNote({
                title: note.title,
                content: note.content,
                id: note.id,
              })
            }
            type="edit"
            variant="outline"
            className="text-white edit"
          >
            Edit
          </Button>
        </div>
      </Card.Body>
    </div>
  );
};

DisplayNotes.propTypes = {
  note: PropTypes.string.isRequired,
  handleDelete: PropTypes.string.isRequired,
  updateNote: PropTypes.string.isRequired,
};

export default DisplayNotes;
