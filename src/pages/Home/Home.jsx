import { Col, Row} from "react-bootstrap"
// import Hero from "./Hero"
import Notes from "./Notes"
import DisplayNotes from "./DisplayNotes"

const Home = () => {
  return (
    <div className="mx-4">
    <Row>
    <Col sm={4}>
    <Notes/>
    </Col>
    <Col sm={8}>
      <DisplayNotes/>
    </Col>
      </Row>
    </div>
  )
}

export default Home