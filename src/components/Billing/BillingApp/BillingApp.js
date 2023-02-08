import './billingApp.css';
import { Row, Col } from 'react-bootstrap';

export default function BillingApp(props) {

    return (

        <Row className="billing-app-card">
            <Col xs={2} className="billing-app-card-icon">
                <span>
                    { props.icon }
                </span>
            </Col>

            <Col xs={7} className="billing-app-card-info">

                <span className="billing-app-card-info-name">
                    { props.appName }
                </span>

                <span className='billing-app-card-info-date'>
                    { props.appDate }
                </span>
            </Col>

            <Col className='billing-app-card-price'>
                <span>
                    { props.appPrice }
                </span>
            </Col>
        </Row>
    );
}