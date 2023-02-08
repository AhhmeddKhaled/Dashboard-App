import './billingInformation.css';
import { Row , Col } from 'react-bootstrap';

export default function BillingInformation(props) {

    return(
        
        <Row className='information-data'>

            <Row className='information-data-info'>

                <Col xs={6} className='information-data-info-title'>
                    <span> { props.title } </span>
                </Col>

                <Col className='information-data-info-delete'>
                    <span> { props.icon } { props.iconName } </span>
                </Col>

                <Col className='information-data-info-edit'>
                    <span> { props.iconTwo } { props.iconTwoName } </span>
                </Col>
            </Row>

            <Row className='information-cv'>

                <Row className='information-cv-name'>
                    <Col>
                        <span>Company Name :   </span>
                        <span> { props.name } </span>
                    </Col>
                </Row>

                <Row className='information-cv-email'>
                    <Col>
                        <span>Email Address :   </span>
                        <span> { props.email } </span>
                    </Col>
                </Row>

                <Row className='information-cv-phone'>
                    <Col>
                        <span>VAT Number :   </span>
                        <span> { props.number } </span>
                    </Col>
                </Row>
            </Row>
        </Row>
    );
}