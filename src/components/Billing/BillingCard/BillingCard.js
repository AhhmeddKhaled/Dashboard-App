import './billingCard.css';
import { Row, Col } from 'react-bootstrap';
import billing from '../../../JsonData/Billing.json';
import { MdAccountBalance } from 'react-icons/md';
import { FaPaypal } from 'react-icons/fa';

export default function BillingCard() {

    const icons = [<MdAccountBalance />,<FaPaypal />];

    
    return(
        
        <Col xs={12} sm={7} className='app-cards d-flex justify-content-between'>
        {

        billing.billingCard.map((card , i) => {

            return(


            <Col className='card rounded' key={i}>
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