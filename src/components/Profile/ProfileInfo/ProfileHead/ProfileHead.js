import './profileHead.css';
import { Row , Col } from 'react-bootstrap';
import { MdHome , MdOutlineEmail , MdSettings } from 'react-icons/md';

export default function ProfileHead() {

    let background = (e) => {

        document.querySelectorAll('.profileHeadIcon > span ').forEach(span => span.classList.remove('background'));
        e.target.parentElement.classList.add('background');

    }
    return(

        <Row className='profileHead align-items-center '>

        <Col xs={12} xl={2} className='profileHeadImg 
        text-center
        mb-3
        m-0
        '>
            <img 
            className='rounded-circle'
            src='https://demos.creative-tim.com/material-dashboard-react/static/media/bruce-mars.8a606c4a6dab54c9ceff.jpg' alt='' />
        </Col>

        <Col xs={12} xl={4} className='
        profileHeadInfo 
        mb-3
        m-0 
        '>
            <h6 className='
            font-weight-bold
            m-0
            '>Richard Davis</h6>
            <span>CEO / Co-Founder</span>
        </Col>

        <Col xs={12} xl={4} className='profileHeadIcon
        d-flex
        align-items-center 
        justify-content-center 
        justify-content-xl-end
        flex-grow-1
        '>
        <span onClick={(e) => background(e)}>
            <MdHome />
            <span>app</span>
        </span>
        <span onClick={(e) => background(e)}>
            <MdOutlineEmail />
            <span>message</span>
        </span>

        <span onClick={(e) => background(e)}>
        <MdSettings />
            <span>setting</span>
        </span>
        </Col>

        <hr className=' d-sm-block d-lg-none mt-3 bg-primery h-10'/>

    </Row>
    );
}