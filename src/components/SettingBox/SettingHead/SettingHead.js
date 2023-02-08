import './settingHead.css';
import { Row , Col } from 'react-bootstrap';
import { MdClose } from 'react-icons/md';

export default function SettingHead() {

    let closeSetting = () => {

        document.querySelector(".setting-box").classList.remove("open");

    }
    return(
                
        <Row className='settingHead'>

            <Col xs={10} className='settingHeadTitle'>
                <h6>Material UI Configurator</h6>
                <span>See our dashboard options.</span>
            </Col>

            <Col className='settingHeadIcon'>
                <span id="close" onClick={() => closeSetting()}>
                    <MdClose />
                </span>
            </Col>
        </Row>
    )
}