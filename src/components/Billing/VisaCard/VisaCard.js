import './VisaCard.css';
import { Row , Col } from 'react-bootstrap';
import { FaWifi } from 'react-icons/fa';
import billing from '../.././../JsonData/Billing.json';

export default function VisaCard() {

    return(
        
          <Col  xs={12} sm={5} className='visaCard 
          position-relative 
          d-flex
          flex-column
          justify-content-around 
          rounded
          '>
            <Col className='visacardOverlay
            position-absolute
            w-100
            h-100
            '></Col>

            <Row className='visaCardWifi'>
              <Col className='p-0'>
                <FaWifi />
              </Col>
            </Row>

            <Row className='visaCardPhone'>
              <Col className='p-0'>
                <span>
                    { billing.visaCard.phone}
                </span>
              </Col>
            </Row>

            <Row className='visaCardJack'>
              <Col xs={6} className='p-0'>
                <span>
                    { billing.visaCard.card}
                </span>
                <span className='font-weight-bold'>
                    { billing.visaCard.jack}
                </span>
              </Col>

              <Col className='p-0'>
                <span> 
                    {billing.visaCard.expires}
                </span>
                <span>
                    { billing.visaCard.date }
                </span>
              </Col>

              <Col className='p-0'>
                <img src={billing.visaCard.src} alt='' />
              </Col>
            </Row>
          </Col>

    )
}