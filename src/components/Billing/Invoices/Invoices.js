import './Invoices.css';
import { Row , Col, Button } from 'react-bootstrap'
import { MdPictureAsPdf } from 'react-icons/md';
import billing from '../../../JsonData/Billing.json';

export default function Invoices() {

    return(
        <Col xl='4' xs='12' className="invoices mt-3 mt-xl-0 rounded">

        <Row className="invoices-info justify-content-between align-items-center">
            <Col className="invoices-title">
                <span>Invoices</span>
            </Col>

            <Col className="invoices-button">
                <Button className='text-uppercase'>View all</Button>
            </Col>
        </Row>

        {
            billing.invoices.map(invoice => {

                return(
                    
        <Row className="invoices-data justify-content-between align-items-center">
        
        <Col>
            <span className="month"> { invoice.date } </span>
            <span className='id'> { invoice.id } </span>
        </Col>
        
        <Col className='d-flex justify-content-end align-items-center'>
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