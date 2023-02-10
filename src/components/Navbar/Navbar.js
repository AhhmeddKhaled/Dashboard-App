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
        
            <Container 
            className="navbar" 
            fixed="top"
            >

            <Row 
            className='section-title
            flex-grow-1
            flex-md-shrink-1
            '>

            <Col  
            xs={8}
            md={12}
            >
            <MdHome /> 
                <span className='nav-text'>
                    / Dashboard
                </span>
            </Col>
            
            <Col 
            xs={4}
            sm={12}
            className='
                justify-content-end
                justify-content-sm-start
            '
            >
                <h3 className='head-text 
                m-0
                '>
                    Dashboard
                </h3>
            </Col>
            </Row>

            <Row 
            className='
            flex-grow-1
            flex-wrap
            mt-3
            mt-sm-0
            justify-content-center
            justify-content-sm-end
            '>
            <Col 
            xs={6}
            sm={8} 
            className='
            d-flex
            justify-content-sm-end
            justify-content-start
            '>
            <input type="sreach" placeholder='search here'/>
            </Col>
            <Col xs={4} lg={3} className='d-flex align-items-center justify-content-end '>
                <MdPerson />
                <MdSettings onClick={() => openSettingBox()}/>
                <MdNotifications/>
            </Col>
            </Row>

            </Container>
    </Row>
    )
}