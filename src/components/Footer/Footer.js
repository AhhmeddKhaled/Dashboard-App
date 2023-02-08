import './footer.css';
import {Row,Col} from 'react-bootstrap';

export default function Footer() {

    return(
        <Row className='footer'>
            <Col xs={8}>
                <span>
                © 2023, made with ♥ by 
                <strong> Creative Tim </strong>
                for a better web.
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