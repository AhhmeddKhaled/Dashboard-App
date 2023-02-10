import { Alert , Row , Col } from 'react-bootstrap';
import './NotificationsMS.css';
import { IoIosClose } from 'react-icons/io'

export default function NotificationsMS() {

    
    let removeMessage = (e) => {

        e.target.parentElement.classList.add('d-none');

    }
    
    return(

        <Row className='notificatiosMS'>

            <Row className='notificationsTitle'>
                <Col>
                    <h6>
                        Alerts
                    </h6>
                </Col>
            </Row>
            <Row className='notificationsAlert'>
                {
                    [
                        'primary',                    
                        'secondary',
                        'success',
                        'danger',
                        'warning',
                        'info',
                        'light',
                        'dark'
                    ].map((variant) => {

                    return(
                    <Alert key={variant} variant={variant} data-show={variant} >
                    <span>
                        A simple { variant }  alert with Give it a cliick f you like.
                        <strong>
                            an example link                        
                        </strong>
                    </span>
                    <IoIosClose onClick={(e) => removeMessage(e)} />
                    </Alert>
                    )
                })
            } 
        </Row>
        </Row>

    );
}