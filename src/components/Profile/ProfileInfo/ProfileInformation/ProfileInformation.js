import './profileInformation.css';
import { Row , Col } from 'react-bootstrap';
import { FaTwitter ,  FaInstagram } from 'react-icons/fa';
import { MdFacebook } from 'react-icons/md';
import ProfileInformationData from './ProfileInformationData/ProfileInformationData';

export default function ProfileInformation() {

    return(
        
        <Col className='ProfileInformation'>

            <Row className='ProfileInformationTitle'>
                <Col>
                    <h6>
                        profile information
                    </h6>
                </Col>
            </Row>

            <Row className='ProfileInformationInfo'>
                <Col>
                    <span>
                        Hi, I’m Alec Thompson, Decisions: If you can’t decide, the answer is no. If two equally difficult paths, choose the one more painful in the short term (pain avoidance is creating an illusion of equality).
                    </span>
                </Col>
            </Row>

            <Row className='ProfileInformationData'>
                <ProfileInformationData head="full name: " data=" Ahmed khaled" />
                <ProfileInformationData head="mobile: " data=" (+20) 10 21 03  24 25" />
                <ProfileInformationData head="email: " data=" ahmedkhaled7229@gmail.com" />
                <ProfileInformationData head="location: " data=" Egypt,Cairo,Elmaade" />
                <ProfileInformationData head="social: " data={ [<MdFacebook key='1' />,<FaTwitter key='2' />,<FaInstagram key='3' />]} />
                <ProfileInformationData head="full name: " data=" Alec M. Thompson" />
            </Row>

        </Col>
    );
} 