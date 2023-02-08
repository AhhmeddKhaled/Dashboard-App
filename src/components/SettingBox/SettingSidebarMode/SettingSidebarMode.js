import './settingSidebarMode.css'
import { Row , Col } from 'react-bootstrap';

export default function SettingMode() {

    window.onload = () => {
        SidebarMode()
    }

    let SidebarMode = () => {

    let SidebarModeButton = document.querySelectorAll(".settingSidebarModeButton button")

        SidebarModeButton.forEach(button => {

        button.addEventListener('click',(e) => {

            document.querySelector(".sidebar").style.background = e.target.dataset.background;
            document.querySelector(".sidebar .brand .brand-icon h2").style.color = e.target.dataset.color;
            document.querySelector(".sidebar .brand  hr").style.background = ` ${e.target.dataset.color}`;
            document.querySelectorAll(".links div a").forEach(link => {
                
                link.style.color = e.target.dataset.color;
            })
        })
    })
}
SidebarMode();

    return(
        
        <Row className='settingSidebarMode'>
            <Col xs={12} className='settingSidebarModeTitle'>
                <h6>Sidenav Type</h6>
                <span>Choose between different sidenav types.</span>
            </Col>

            <Col className='settingSidebarModeButton'>
                <button 
                data-background="rgb(26,32,53)"
                data-color="#ddd">Dark</button>
                <button 
                data-background="transparent"
                data-color="black">transparent</button>
                <button 
                data-background="white"
                data-color="black">White</button>
            </Col>
        </Row>
    );
}