import './box.css';
import { Col } from 'react-bootstrap';

export default function Box(props) {

    return (
        <Col xs={3} className="card">
            <Col className="box">
                {props.icon}
            </Col>

            <Col className='card-info'>
                <span className='card-info-title'> {props.title} </span>
                <span className='card-info-number'> {props.number} </span>
            </Col>

            <Col className='card-rate'>
                <p>
                    <span> {props.rate} </span>
                    {props.parag}
                </p>
            </Col>
        </Col>
    );
}