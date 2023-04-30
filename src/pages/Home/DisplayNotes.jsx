import { Button, Card } from "react-bootstrap"

const DisplayNotes = (data) => {
  const {title,content}=data.data;
  
  return (
    <div>
        <div className="d-flex justify-content-between">
        <h2>All Notes</h2> 
        <input  style={{backgroundColor: "#212A3E"}} className="rounded-3 px-4 text-white" type="text" placeholder="Search Notes..." /> 
        </div>
    <Card className="text-black w-auto h-auto my-3 text-white" style={{backgroundColor: "#212A3E", borderBottom: '2px solid #ccc' }} >
    <Card.Body>
      <Card.Title>{title}</Card.Title>
      <Card.Text>{content}</Card.Text>
      <div className="d-flex md:justify-content-center">
      <Button className="me-2" variant="primary">SUBMIT</Button>
      <Button variant="success">UPDATE</Button>
      </div>
    </Card.Body>
  </Card> 
  </div>
  )
}

export default DisplayNotes