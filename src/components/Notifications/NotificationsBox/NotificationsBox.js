import './NotificationsBox.css';
import { Row , Col } from 'react-bootstrap';
import { useState } from 'react';

export let [ show , setShow ] = '';
export default function NotificationsBox() {

    [show , setShow ] = useState('')

    let showMessage = (e) => {

        document.querySelectorAll('.alert').forEach(alert => {
            
            if(e.target.dataset.show === alert.dataset.show) {
                
                alert.classList.add('d-flex');
        
            }else {

                alert.classList.add('d-none');

            }
            }); 


    }

    return(
        
        <Row className='notoficitionsBox'>

            <Row className='notoficitionsBoxTitle'>
                <Col>
                    <h6>Notifications</h6>
                    <span>Notifications on this page use Toasts from Bootstrap. Read more details here.</span>
                </Col>
            </Row>

            <Row>
        {
            [
                {
                    notification: 'success notifications',
                    dataShow: 'success'
                },
                {
                    notification: 'info notifications',
                    dataShow: 'info'
                    
                },
                {
                    notification: 'warning notifications',
                    dataShow: 'warning'
                },
                {
                    notification: 'error notifications',
                    dataShow: 'danger'
                }
        ].map((notification , i)=> {

            return(
                <Col key={i} data-show={notification.dataShow} onClick={(e) => showMessage(e) } >
                    <span data-show={notification.dataShow} onClick={(e) => showMessage(e) }>
                        {notification.notification} 
                    </span>
                </Col>
            )
        })
    }
            </Row>
    </Row>
    )
}