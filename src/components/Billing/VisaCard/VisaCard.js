import './VisaCard.css';
import { Row , Col } from 'react-bootstrap';
import { FaWifi } from 'react-icons/fa';
import billing from '../.././../JsonData/Billing.json';

export default function VisaCard() {

    return(
        
          <Col xs lg='5' md='12' className='visaCard d-flex justify-content-between'>
            <Col className='visacardOverlay'></Col>

            <Row className='visaCardWifi'>
              <Col>
                <FaWifi />
              </Col>
            </Row>

            <Row className='visaCardPhone'>
              <Col>
                <span>
                    { billing.visaCard.phone}
                </span>
              </Col>
            </Row>

            <Row className='visaCardJack'>
              <Col xs={5}>
                <span>
                    { billing.visaCard.card}
                </span>
                <span>
                    { billing.visaCard.jack}
                </span>
              </Col>

              <Col>
                <span> 
                    {billing.visaCard.expires}
                </span>
                <span>
                    { billing.visaCard.date }
                </span>
              </Col>

              <Col>
                <img src={billing.visaCard.src} alt='' />
              </Col>
            </Row>
          </Col>

    )
}