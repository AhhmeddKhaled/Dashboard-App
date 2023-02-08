import './imageRadius.css';
import { Col } from 'react-bootstrap';

export default function ImageRadius(props) {

    return(
        <Col className="imgRadius">
            { props.img }
        </Col>
    );
}