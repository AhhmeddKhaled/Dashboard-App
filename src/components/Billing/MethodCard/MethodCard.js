import './methodCard.css';
import { Row , Col, Button } from 'react-bootstrap';
import { TiPlus } from 'react-icons/ti';
import { MdModeEditOutline } from 'react-icons/md';
import billing from '../../../JsonData/Billing.json';

export default function MethodCard() {

    return(
        
        <Row className='method m-0 mt-4'>

            <Row className='method-info'>
            
                <Col xs='6' className='payment mb-sm-2'>
                    <span>Payment Method</span>
                </Col>
            
                <Col xs='6' className='new-card mb-sm-2 justify-content-end'>
                    
                    <Button className='text-uppercase font-weight-bold rounded'>
                        
                        <TiPlus />
                        
                        <span>
                        
                            Add new card
                        
                        </span>
                    </Button>
                
                </Col>
            
            </Row>

            <Row className='method-cards'>
        {
            billing.methodCard.map(method => {

                return(

            <Col xs='12' md='5' className='methodCard m-lg-0 mt-2 mb-2'>
                
                <Col sm='11'>
                    <img src={method.src} alt='' />
                    <span className='stars'>***** ***** *****</span>
                    <span className='code'> { method.code } </span>
                </Col>

                <Col className='method-icon'>
                    <span> 
                        <MdModeEditOutline /> 
                    </span>
                </Col>

            </Col>
                )
            })
        }
            </Row>
        </Row>
        
    );
}