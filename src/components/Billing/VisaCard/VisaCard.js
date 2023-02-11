import './VisaCard.css';
import { Row , Col } from 'react-bootstrap';
import { FaWifi } from 'react-icons/fa';
import billing from '../.././../JsonData/Billing.json';

export default function VisaCard() {

    return(
        
          <Col  lg='5' xs='12' className='visaCard 
          position-relative 
          d-flex
          flex-column
          justify-content-around 
          rounded
          mb-sm-3 mb-lg-1'>
            <Col className='visacardOverlay
            position-absolute
            w-100
            h-100
            '></Col>

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

              <Col
              className='d-flex align-items-center justify-content-end'
              >
                <img src={billing.visaCard.src} alt='' />
              </Col>
            </Row>
          </Col>

    )
}