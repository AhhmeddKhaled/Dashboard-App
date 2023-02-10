import './profileHead.css';
import { Row , Col } from 'react-bootstrap';
import { MdHome , MdOutlineEmail , MdSettings } from 'react-icons/md'
export default function ProfileHead() {

    return(
                
        <Row className='profileHead align-items-center '>

        <Col xs={12} lg={2} className='profileHeadImg 
        text-center
        mb-3
        m-0
        '>
            <img 
            className='rounded-circle'
            src='https://demos.creative-tim.com/material-dashboard-react/static/media/bruce-mars.8a606c4a6dab54c9ceff.jpg' alt='' />
        </Col>

        <Col xs={12} lg={4} className='
        profileHeadInfo 
        text-center
        mb-3
        m-0 
        '>
            <h6 className='
            font-weight-bold
            m-0
            '>Richard Davis</h6>
            <span>CEO / Co-Founder</span>
        </Col>

        <Col xs={12} lg={4} className='profileHeadIcon
        d-flex
        align-items-center 
        justify-content-center 
        justify-content-lg-end
        flex-grow-1
        '>
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

        <hr className=' d-sm-block d-lg-none mt-3 bg-primery h-10'/>

    </Row>
    );
}