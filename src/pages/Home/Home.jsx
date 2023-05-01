import { Button, Card, Col, Row } from "react-bootstrap";
// import Hero from "./Hero"
import DisplayNotes from "./DisplayNotes";
import { useEffect, useState } from "react";
import { collection, getDocs,addDoc, deleteDoc, doc} from "firebase/firestore";
import { db } from "../../Firebase/firebase-config";

const Home = () => {
  const [addNote,setAddNote]=useState({title:"",content:""})
  const [notes, setNotes] = useState([]);
  

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
    await addDoc(notRef, addNote)
    setAddNote({content:"",title:""})
  };

  const handleDelete =async (id)=>{
    const deleteNote=doc(notRef, id);
    await deleteDoc(deleteNote)
    console.log("check id",id)
  }

  return (
    <div className="mx-4">
      <Row>
        <Col sm={4}>
          <div>
            <Card style={{ width: "auto", backgroundColor: "#212A3E" }}>
              <form
                // method="post"
                onSubmit={handleSubmit}
              >
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
                <div className="d-flex md:justify-content-center">
                  <Button type="submit" className="me-2" variant="primary">
                    SUBMIT
                  </Button>
                  <Button type="edit" className="me-2" variant="primary">
                    SUBMIT
                  </Button>
                </div>
              </form>
            </Card>
          </div>
        </Col>

        <Col sm={8}>
          <div>
          
            {
              notes && notes.map(note=>(
                <DisplayNotes
                 note={note}
                  key={note.id}
                   handleDelete={handleDelete}
                   />
              ))  
            }
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Home;
