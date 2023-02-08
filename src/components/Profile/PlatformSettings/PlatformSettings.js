import "./platformSettings.css";
import { Row, Col } from "react-bootstrap";
import PlatformSettingsEmail from './PlatformSettingsEmail/PlatformSettingsEmail';

export default function PlatformSettings() {
    return (

        <Col className='platformSettings'>

            <Row className='platformSettingsTitle'>
                <Col>
                    <h6>platform settings</h6>
                </Col>
            </Row>

            <Row className='platformSettingsInfo'>

                <Row className='platformSettingsInfoTitle'>
                    <Col>
                        <span>account</span>
                    </Col>
                </Row>

                <PlatformSettingsEmail email="Email me when someone follows me" />

                <PlatformSettingsEmail email="Email me when someone answers on my post" />

                <PlatformSettingsEmail email="Email me when someone mentions me" />

            </Row>

            <Row>

                <Row className='platformSettingsInfoTitle'>
                    <Col>
                        <span>application</span>
                    </Col>
                </Row>

                <PlatformSettingsEmail email="New launches and projects" />

                <PlatformSettingsEmail email="Monthly product updates" />

                <PlatformSettingsEmail email="Subscribe to newsletter" />

            </Row>
        </Col>
    );
}
