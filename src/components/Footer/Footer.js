import './footer.css';
import {Row,Col} from 'react-bootstrap';

export default function Footer() {

    return(
        <Row className='footer'>
            <Col xs={7}>
                <span>
                © 2023, made with ♥ by 
                <strong> Creative  </strong>
                for a Ahmed khaled.
                </span>
            </Col>

            <Col>
                <span>Creative Tim</span>
                <span>About Us</span>
                <span>Blog</span>
                <span>License</span>
            </Col>
        </Row>
    );
}