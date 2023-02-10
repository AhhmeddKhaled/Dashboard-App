import './notifications.css';
import { Row  } from 'react-bootstrap';
import NotificationsMS from './NotificationsMS/NotificationsMS';
import NotificationsBox from './NotificationsBox/NotificationsBox';

function Notifications() {

    return(
        <Row className="notifications">

            <NotificationsMS />

            <NotificationsBox />

        </Row>


    );
}

export default Notifications;