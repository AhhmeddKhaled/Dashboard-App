import './orders.css'
import { Row , Col } from 'react-bootstrap';

export default function Order(props) {

    return(
        <Row className='order'>

            <Col xs={2} className='orderIcon'>
                { props.icon}
            </Col>

            <Col className='orderPrice'>
                <strong>
                    { props.price}
                </strong>

                <span>
                    { props.date }
                </span>
            </Col>
        </Row>
    );
}