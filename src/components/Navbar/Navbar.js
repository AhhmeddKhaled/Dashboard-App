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
        <Row style={{marginBottom: "30px"}} 
        className={ window.location.pathname.slice(1,).toUpperCase() === 'SIGNIN'  ? 'nav d-none' : window.location.pathname.slice(1,).toUpperCase() === 'SIGNUB' ? 'nav d-none' : ' nav d-block' }
        >
        
            <Container className="navbar" fixed="top">
            <Row>
            <Col xs={12}>
            <MdHome /> 
            <span className='nav-text'>
            / Dashboard
            </span>
            </Col>
            <Col><h3 className='head-text'>
                Dashboard
            </h3></Col>
            </Row>

            <Row>
            <Col xs={8}>
            <input type="sreach" placeholder='search here'/>
            </Col>
            <Col xs={4}>
                <MdPerson />
                <MdSettings onClick={() => openSettingBox()}/>
                <MdNotifications/>
            </Col>
            </Row>
            </Container>
    </Row>
    )
}