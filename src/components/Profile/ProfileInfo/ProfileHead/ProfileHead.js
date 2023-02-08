import './profileHead.css';
import { Row , Col } from 'react-bootstrap';
import { MdHome , MdOutlineEmail , MdSettings } from 'react-icons/md'
export default function ProfileHead() {

    return(
                
        <Row className='profileHead'>

        <Col xs={2} className='profileHeadImg'>
            <img src='https://demos.creative-tim.com/material-dashboard-react/static/media/bruce-mars.8a606c4a6dab54c9ceff.jpg' alt='' />
        </Col>

        <Col xs={6} className='profileHeadInfo'>
            <h6>Richard Davis</h6>
            <span>CEO / Co-Founder</span>
        </Col>

        <Col xs={4} className='profileHeadIcon'>
        <span>
            <MdHome />
            <span>app</span>
        </span>
        <span>
            <MdOutlineEmail />
            <span>message</span>
        </span>

        <span>
        <MdSettings />
            <span>setting</span>
        </span>
        </Col>
    </Row>
    );
}