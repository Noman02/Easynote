import { Button, Card } from "react-bootstrap"



const Notes = () => {
  return (
   <div >
   <Card style={{ width: 'auto', backgroundColor: '#212A3E' }}>
    <form>
        <div className="p-4white">
        <label className="text-black fs-5 my-2 text-white">Add Notes</label>
        <input className="w-100 border-0 text-white" type="text" placeholder="New Note" style={{backgroundColor: "#212A3E"}} /> <br/>
        <textarea  style={{backgroundColor: "#212A3E"}} className="w-100 mt-3 border-0 text-white" type="text" placeholder="content" rows={4} />
        </div>
        <div className="d-flex md:justify-content-center">
        <Button className="me-2" variant="primary">SUBMIT</Button>
        <Button variant="success">UPDATE</Button>
        </div>
    </form>
 </Card>
   </div>
  )
}

export default Notes