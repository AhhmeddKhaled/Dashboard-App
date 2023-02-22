import { Row } from 'react-bootstrap';
import NotificationsMS from './NotificationsMS/NotificationsMS';
import NotificationsBox from './NotificationsBox/NotificationsBox';

export default function Notifications() {

    return (
        <Row className="notifications">

            <NotificationsMS />

            <NotificationsBox />

        </Row>


    );
}
