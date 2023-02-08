import './settingMode.css';
import { Row , Col } from 'react-bootstrap';

export default function SettingMode() {
    
    
    
    
    
    
    let mode = (e) => {
        
        e.target.classList.toggle("fullRight");
        
        e.target.parentElement.classList.toggle("light");
        
        
        document.body.classList.toggle("dark-mode");
        
        
        let app = document.querySelector(".app")
        app.classList.toggle("light-mode");
        document.querySelector(".setting-box").classList.toggle("settingToggle")
        // document.querySelector(".profile > .row:nth-child(2)").classList.toggle("profileMode")
        document.documentElement.style.setProperty('--box-shadow','1px 1px 5px rgb(61, 62, 63)');
        document.querySelector(".notificationsMessag").classList.toggle("notBackground");


    }
    return(
        <Row className='SettingMode' data-color='green'>
            <Col>
                <h6>Light   /   Dark</h6>
                <span className='toggle'>
                    <span onClick={ (e) => mode(e) }></span>
                </span>
            </Col>
        </Row>

    );
}