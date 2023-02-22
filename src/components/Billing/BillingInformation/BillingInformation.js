import './billingInformation.css';
import { Row , Col } from 'react-bootstrap';
import { MdDelete, MdModeEditOutline } from 'react-icons/md';
import billing from '../../../JsonData/Billing.json';

export default function BillingInformation() {

    return(

        <Col xs={12} xl={7} className='information rounded m-0 m-xl-2 mt-3 mt-xl-0 '>

            <Row className="information-title">
                <Col>
                    <h6>Billing Information</h6>
                </Col>
            </Row>

            <Row className='information-data'>
                
                { billing && billing.information.map(info => {

        return (

        <>
            <Row className='information-data-info'>

    <Col xs={6} className='information-data-info-title'>
        <span className='text-capitalize'> { info.title } </span>
    </Col>

    <Col className='information-data-info-delete d-flex justify-content-center'>
        <span className='d-flex align-items-center text-uppercase'> 
            <MdDelete />
            delete
        </span>
    </Col>

    <Col className='information-data-info-edit d-flex justify-content-center'>
        <span className='d-flex align-items-center text-uppercase'> 
            <MdModeEditOutline />
            edit
        </span>
    </Col>

            </Row>

            <Row className='information-cv'>

    <Row className='information-cv-name'>
      <Col className='text-capitalize'>
          <span>Company Name :   </span>
          <span> { info.name } </span>
      </Col>
    </Row>

    <Row className='information-cv-email'>
        <Col className='text-capitalize'>
            <span>Email Address :   </span>
            <span> { info.email } </span>
        </Col>
    </Row>

    <Row className='information-cv-phone'>
        <Col className='text-capitalize'>
            <span>VAT Number :   </span>
            <span> { info.number } </span>
        </Col>
    </Row>

            </Row>
        </>
        
        )})}
            
            </Row>

        </Col>

    );
}