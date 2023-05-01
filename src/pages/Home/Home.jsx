import { Button, Col, Row } from "react-bootstrap";
// import Hero from "./Hero"
import DisplayNotes from "./DisplayNotes";
import { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../../Firebase/firebase-config";


const Home = () => {
  const [addNote, setAddNote] = useState({ title: "", content: "" });
  const [notes, setNotes] = useState([]);
  const [id, setId] = useState("");

  const notRef = collection(db, "notes");

  useEffect(() => {
    const getNotes = async () => {
      const data = await getDocs(notRef);
      setNotes(data.docs.map((docs) => ({ ...docs.data(), id: docs.id })));
    };
    getNotes();
  }, [notRef]);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setAddNote({ ...addNote, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addDoc(notRef, addNote);
    setAddNote({ content: "", title: "" });
  };

  const updateNote = async (note) => {
    setAddNote({ title: note.title, content: note.content });
    setId(note.id);
  };

  const updatedNote = async (id) => {
    const upNote = doc(db, "notes", id);
    await updateDoc(upNote, addNote);
    setAddNote({ content: "", title: "" });
  };

  const handleDelete = async (id) => {
    const deleteNote = doc(notRef, id);
    await deleteDoc(deleteNote);
  };

  return (
    <div className="ms-4">
      <Row>
        <Col sm={4}>
          <div
            className="p-4"
            style={{ width: "auto", backgroundColor: "#212A3E" }}
          >
            <form onSubmit={handleSubmit}>
              <div className="p-4white">
                <label className="text-black fs-5 my-2 text-white">
                  Add Notes
                </label>
                <input
                  className="w-100 border-0 text-white"
                  type="text"
                  placeholder="Enter Title..."
                  style={{ backgroundColor: "#212A3E" }}
                  name="title"
                  onChange={handleChange}
                  value={addNote.title}
                />{" "}
                <br />
                <textarea
                  style={{ backgroundColor: "#212A3E" }}
                  className="w-100 mt-3 border-0 text-white"
                  type="text"
                  placeholder="Type Content Here..."
                  rows={4}
                  name="content"
                  onChange={handleChange}
                  value={addNote.content}
                />
              </div>
              <div className="d-flex md:justify-content-center mt-2">
                <Button type="submit" className="me-2" variant="light">
                  SAVE
                </Button>
                <Button
                  onClick={() => updatedNote(id)}
                  className="ms-5"
                  variant="primary"
                >
                  UPDATE
                </Button>
              </div>
            </form>
          </div>
        </Col>

        <Col sm={8}>
          <div className="">
            <h5>All Notes</h5>
          </div>
          <div>
            {notes &&
              notes.map((note) => (
                <DisplayNotes
                  note={note}
                  key={note.id}
                  handleDelete={handleDelete}
                  updateNote={updateNote}
                />
              ))}
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Home;
