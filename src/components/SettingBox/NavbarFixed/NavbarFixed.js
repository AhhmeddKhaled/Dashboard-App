import './navbarFixed.css';
import { Row , Col } from 'react-bootstrap';




export default function NavbarFixed() {

    let navbarFixedLocalStorage = localStorage.getItem("navbar_fixed_option")

    if(navbarFixedLocalStorage !== null) {

        if(navbarFixedLocalStorage === '30px') {

            console.log('fixed');
        }else {

            console.log('not fixed');
        }
    }

    let fixed = (e) =>  {

        e.target.classList.toggle("fullRight");
        
        e.target.parentElement.classList.toggle("light");
        
        let navFixed = document.querySelector(".nav");
        
        navFixed.classList.toggle("fixed");
        
        let rout = document.querySelector(".routes")
        
        rout.classList.toggle("fixedPadding");
        
        
}


    return(
        <Row className='settingNavbarFixed'>
            <Col>
                <h6>Navbar Fixed</h6>
                <span className='toggle'>
                    <span onClick={(e) => fixed(e)}></span>
                </span>
            </Col>
        </Row>
        )
}