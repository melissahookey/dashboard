import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { Container, Row, Col } from "react-bootstrap";
import { Navigation } from './components/Nav/Nav';
import { Todocard } from './components/Form/Form';
import { CalendarComp } from "./components/Calendar/Calendar";


function App() {
  return (
      <div className="App">
        <Container fluid={true}>
          <Row className="mx-0">
            <Col>
              <Navigation />
            </Col>
          </Row>
          <div className="mainContent">
            <Row>
              <Col>
                <Todocard />
              </Col>
              <Col>
                <CalendarComp />
              </Col>
            </Row>
          </div>
        </Container> 
      </div>
  );
}

export default App;
