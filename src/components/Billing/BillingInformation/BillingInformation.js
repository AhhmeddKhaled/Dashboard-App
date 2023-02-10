import './billingInformation.css';
import { Row , Col } from 'react-bootstrap';
import { MdDelete, MdModeEditOutline } from 'react-icons/md';
import billing from '../../../JsonData/Billing.json';

export default function BillingInformation() {

    return(

        <Col xs={7} className='information'>

            <Row className="information-title">
                <Col>
                    <h6>Billing Information</h6>
                </Col>
            </Row>

            <Row className='information-data'>
                {
                billing && billing.information.map(info => {

        return (

<>

<Row className='information-data-info'>

    <Col xs={6} className='information-data-info-title'>
        <span> { info.title } </span>
    </Col>

    <Col className='information-data-info-delete'>
        <span> 
            <MdDelete />
            delete
        </span>
    </Col>

    <Col className='information-data-info-edit'>
        <span> 
            <MdModeEditOutline />
            edit
        </span>
    </Col>

</Row>

<Row className='information-cv'>

    <Row className='information-cv-name'>
      <Col>
          <span>Company Name :   </span>
          <span> { info.name } </span>
      </Col>
    </Row>

    <Row className='information-cv-email'>
        <Col>
            <span>Email Address :   </span>
            <span> { info.email } </span>
        </Col>
    </Row>

    <Row className='information-cv-phone'>
        <Col>
            <span>VAT Number :   </span>
            <span> { info.number } </span>
        </Col>
    </Row>

</Row>
</>
        )

    })

}
            </Row>

        </Col>

    );
}