import './navbar.css';
import {Container,Row,Col} from 'react-bootstrap';
import {
    MdHome,
    MdPerson,
    MdNotifications,
    MdSettings,
    } from 'react-icons/md';

export default function NavBar() {

    let openSettingBox = () => {

        document.querySelector(".setting-box").classList.add("open");

    }
    return(
        <Row  
        className={ window.location.pathname.slice(1,).toUpperCase() === 'SIGNIN'  ? 'nav d-none' : window.location.pathname.slice(1,).toUpperCase() === 'SIGNUB' ? 'nav d-none' : 'nav d-block m-4 mt-0' }
        >
        
            <Container className="navbar m-0 h-100 d-flex" fixed="top">

            <Col className='section-title'>

            <Col xs={12}>
            <MdHome /> 
                <span className='nav-text'>
                    / Dashboard
                </span>
            </Col>
            
            <Col xs={12}>
                <h3 className='head-text m-0 font-weight-bold'>
                    Dashboard
                </h3>
            </Col>
            </Col>

            <Col className=' d-flex justify-content-end search-box'>
            <Col xs={8} className='d-flex justify-content-end mb-0'>
            <input className='rounded' type="sreach" placeholder='search here'/>
            </Col>
            <Col xs={4} className='d-flex align-items-center justify-content-end '>
                <MdPerson />
                <MdSettings onClick={() => openSettingBox()}/>
                <MdNotifications/>
            </Col>
            </Col>

            </Container>
    </Row>
    )
}