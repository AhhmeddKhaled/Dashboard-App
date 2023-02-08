import './notifications.css';
import { Row , Col } from 'react-bootstrap';
import NotificationsMS from './NotificationsMS/NotificationsMS';

function Notifications() {

    return(
        <Row className="notifications">

        <Row className='notificatiosMS'>

            <Row className='notificationsTitle'>
                <Col>
                    <h6>
                        Alerts
                    </h6>
                </Col>
            </Row>
            <NotificationsMS />
        </Row>

        <Row>
            <Row>
                <Col>
                    <h6>Notifications</h6>
                    <span>Notifications on this page use Toasts from Bootstrap. Read more details here.</span>
                </Col>
            </Row>
            <Row>
                <Col><span>success notification</span></Col>
                <Col><span>info notification</span></Col>
                <Col><span>warning notification</span></Col>
                <Col><span>error notification</span></Col>
            </Row>
        </Row>
        </Row>


    );
}

export default Notifications;