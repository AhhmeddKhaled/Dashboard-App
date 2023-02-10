import './Invoices.css';
import { Row , Col } from 'react-bootstrap'
import { MdPictureAsPdf } from 'react-icons/md';
import billing from '../../../JsonData/Billing.json';

export default function Invoices() {

    return(
        <Col xs lg='4' md='12' className="invoices">

        <Row className="invoices-info">
            <Col className="invoices-title">
                <span>Invoices</span>
            </Col>

            <Col className="invoices-button">
                <button>View all</button>
            </Col>
        </Row>

        {
            billing.invoices.map(invoice => {

                return(
                    
        <Row className="invoices-data">
        
        <Col>
            <span className="month"> { invoice.date } </span>
            <span className='id'> { invoice.id } </span>
        </Col>
        
        <Col>
            <span className='price'> { invoice.price } </span>
            <span className='icon'>
            <MdPictureAsPdf /> pdf
            </span>
        </Col>
        
        </Row>
                )
            })  
        }
        </Col>
        
    );
}