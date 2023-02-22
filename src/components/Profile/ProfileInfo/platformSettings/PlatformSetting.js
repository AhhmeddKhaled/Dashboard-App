import "./PlatformSetting.css";
import { Row, Col } from "react-bootstrap";
import profile from '../../../../JsonData/Profile.json';
import Toggle from "../../../../Atoms/Toggle/Toggle";
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

                {profile && profile.platformEmail[0].map((email , i) => {

                    return (


                        <Row className="PlatformSettingsEmail" key={i}>
                            <Toggle />

                            <Col xs={8}>
                                <span> {email} </span>
                            </Col>
                        </Row>
                    )
                })

                }

            </Row>

            <Row className='platformSettingsInfo'>

                <Row className='platformSettingsInfoTitle'>
                    <Col>
                        <span>application</span>
                    </Col>
                </Row>
                {profile && profile.platformEmail[1].map(email => {

                    return (


                        <Row className="PlatformSettingsEmail">
                            <Toggle />

                            <Col xs={8}>
                                <span> {email} </span>
                            </Col>
                        </Row>
                    )
                })

                }

            </Row>

        </Col>
    );
}
