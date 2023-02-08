import './Invoices.css';
import { Row , Col } from 'react-bootstrap'
import { MdPictureAsPdf } from 'react-icons/md';

export default function Invoices(props) {

    return(
        <Row className="invoices-data">
        <Col>
            <span className="month"> { props.date } </span>
            <span className='id'> { props.id } </span>
        </Col>
        <Col>
            <span className='price'> { props.price } </span>
            <span className='icon'>
            <MdPictureAsPdf /> pdf
            </span>
        </Col>
        </Row>
        
    );
}