import './notificationsMessage.css';
import {Col} from 'react-bootstrap';
import {
    MdEmail,
    MdPodcasts,
    MdShoppingCart,
    MdClose,
} from 'react-icons/md';

export default function NotificationsMessage() {

    return(
        <Col className="notificationsMessag">
        <span className='close'>
            <MdClose />
        </span>
            <Col>
            <MdEmail />
                <span>check new messages</span>
            </Col>

            <Col>
            <MdPodcasts />
                <span>manage podcust sessinos</span>
            </Col>

            <Col>
            <MdShoppingCart />
                <span>payment successfully completed</span>
            </Col>
        </Col>
    );
}