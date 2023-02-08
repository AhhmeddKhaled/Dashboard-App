import './download.css';
import { Row , Col, Button } from 'react-bootstrap';
import { MdDonutLarge , MdPerson } from 'react-icons/md'
import { BsPersonCircle , BsFillKeyFill } from 'react-icons/bs'

export default function Download(props) {

    return(
        
        <Row className="signIn-nav">
        <Col xs={3}>
            <h4>Material Dashboard 2</h4>
        </Col>

        <Col xs={6}>
            <span>
                <MdDonutLarge /> 
                <span>Dashboard</span>
            </span>

            <span>
                <MdPerson /> 
                <span>Profile</span>
            </span>

            <span>
                <BsPersonCircle /> 
                <span>Sign Up</span>
            </span>

            <span>
                <BsFillKeyFill />
                <span>Sign In</span>
            </span>
        </Col>

        <Col xs={3}>
            <Button>Free Download</Button>
        </Col>

    </Row>

    );
}