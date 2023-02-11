import './billingCard.css';
import { Row, Col } from 'react-bootstrap';
import billing from '../../../JsonData/Billing.json';
import { MdAccountBalance } from 'react-icons/md';
import { FaPaypal } from 'react-icons/fa';

export default function BillingCard() {

    const icons = [<MdAccountBalance />,<FaPaypal />];

    
    return(
        
        <Col xs lg='7' md='12' className='d-flex justify-content-between'>
        {

        billing.billingCard.map((card , i) => {

            return(


            <Col xs lg='6' md='5' className='card m-lg-1 mt-lg-0 mb-lg-0' key={i}>
                <Row className="card-icon">
                    <Col>
                        <span> { icons[i] } </span>
                    </Col>
                </Row>
                <Row className='card-info'>
                    <Col>
                        <span className="card-info-title"> { card.title } </span>
                        <span className='card-info-paragraph'> { card.paragraph } </span>
                    </Col>
                </Row>
                <Row className='card-price'>
                    <Col>
                        <span> { card.price } </span>
                    </Col>
                </Row>
            </Col>
            )
    })
        }
            </Col>
        )
}