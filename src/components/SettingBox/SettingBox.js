import './settingBox.css';

import {Container,Row,Col} from 'react-bootstrap';

import { AiOutlineStar,AiOutlineTwitter,AiFillFacebook } from 'react-icons/ai';

import SettingHead from './SettingHead/SettingHead';
import SettingColors from './SettingColors/SettingColors';
import SettingSidebarMode from './SettingSidebarMode/SettingSidebarMode';
import NavbarFixed from './NavbarFixed/NavbarFixed';
import SettingMode from './SettingMode/SettingMode';

export default function SettingBox(props) {

    return(
        <Container className='setting-box'>

        {/* Setting Header Component */}
        <SettingHead />

        {/* Setting Colors Component */}
        <SettingColors />

        {/* Setting Sidebar Mode Component */}
        <SettingSidebarMode />

        {/* Setting Navbar Fixed */}
        <NavbarFixed />

        {/* Setting Mode  */}
        <SettingMode />


        <Row>
            <Col>
                <button>
                    view documentation
                </button>
            </Col>
        </Row>

        <Row>
            <Col>
                <span>
                    <AiOutlineStar /> star
                </span>
                <span>
                    2,320
                </span>
            </Col>
        </Row>
        <Row>
            <Col>
                <h3>Thank you for sharing!</h3>
            </Col>
            <Col xs={12}>
                <span>
                    <AiOutlineTwitter /> <span>tweet</span>
                </span>
                <span>
                    <AiFillFacebook /> <span>share</span>
                </span>
            </Col>
        </Row>
        </Container>
    )
}