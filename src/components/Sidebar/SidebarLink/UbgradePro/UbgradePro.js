import './ubgradePro.css';
import { Row , Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function UbgradePro() {

    return(

        <Row className='ubgrade'>

            <Col>
                <Link>Ubgrade to Pro </Link>
            </Col>
            
        </Row>
    )
}