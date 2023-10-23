import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ApplicationNavbar from './Components/Navbar';
import Item from './Components/Item';
import './App.css';

function App() {

  return (
    <div>
      <ApplicationNavbar />
      <Container fluid>
        <Row>
          {[1,1,1,1,1,1,1,1,1,1,1,1].map((item, i) => {
            return (
              <Col xs='12' md='6' lg='4' className='mb-2'>
                <Item key={i} />
              </Col>
            )
          })}
        </Row>
      </Container>
    </div>
  );
}

export default App;
