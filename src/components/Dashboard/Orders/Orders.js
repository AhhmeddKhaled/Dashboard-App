import './orders.css'
import { Row, Col } from 'react-bootstrap';
import dashboard from '../../../JsonData/dashboard.json';
import { 
    MdArrowUpward, 
    MdInventory, 
    MdNotifications, 
    MdPayment, 
    MdShoppingCart, 
    MdVpnKey 
} from 'react-icons/md';

export default function Order() {

    const icons = [
        <MdNotifications />,
        <MdInventory />,
        <MdShoppingCart />,
        <MdPayment />,
        <MdVpnKey />
    ]
    return (

        <Col className='orders rounded'>
            <Row className="orderHead p-3">
                <Col>
                    <h5 className='m-0'>Orders overview</h5>
                    <span>
                        <MdArrowUpward />
                        <strong>24%</strong> this month
                    </span>
                </Col>
            </Row>

    {dashboard && dashboard.order.map((order, i) => {

        return (
            <Row className='
            order 
            d-md-inline-flex
            d-xl-flex 
            justify-content-between 
            p-3' 
            key={order.id}>
                <Col xs={2} className='
                orderIcon 
                position-relative
                p-0
                '>
                    {icons[i]}
                </Col>
                <Col className='orderPrice'>
                    <strong>
                        {order.price}
                    </strong>
                    <span>
                        {order.date}
                    </span>
                </Col>
            </Row>
        )})
}

        </Col>

    );
}