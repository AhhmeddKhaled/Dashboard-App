import './billingCard.css';
import { Row, Col } from 'react-bootstrap';

export default function BillingCard(props) {

    return (

        <Col xs={3} className='card'>

            <Row className="card-icon">
                <Col>
                    <span> { props.icon } </span>
                </Col>
            </Row>

            <Row className='card-info'>
                <Col>
                    <span className="card-info-title"> { props.title } </span>
                    <span className='card-info-paragraph'> { props.paragraph } </span>
                </Col>
            </Row>

            <Row className='card-price'>
                <Col>
                    <span> { props.price } </span>
                </Col>
            </Row>
        </Col>
    );
}