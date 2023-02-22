import './methodCard.css';
import { Row , Col, Button } from 'react-bootstrap';
import { TiPlus } from 'react-icons/ti';
import { MdModeEditOutline } from 'react-icons/md';
import billing from '../../../JsonData/Billing.json';

export default function MethodCard() {

    return(
        
        <Row className='method rounded m-0 mt-4'>

            <Row className='method-info m-0'>
            
                <Col xs='6' className='payment mb-sm-2 m-0 d-flex align-items-center'>
                    <span>Payment Method</span>
                </Col>
            
                <Col xs='6' className='new-card mb-sm-2 justify-content-end m-0 d-flex align-items-center'>
                    
                    <Button className='text-uppercase font-weight-bold rounded'>
                        
                        <TiPlus />
                        
                        <span>
                        
                            Add new card
                        
                        </span>
                    </Button>
                
                </Col>
            
            </Row>

            <Row className='method-cards m-0 d-flex justify-content-between'>
        {
            billing.methodCard.map(method => {

                return(

            <Col xs='12' md='6' className='methodCard m-lg-0 mt-2 mb-2 d-flex justify-content-between align-items-center rounded p-3'>
                
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