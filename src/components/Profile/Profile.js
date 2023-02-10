import './profile.css';

import { Row  } from 'react-bootstrap';

import ProfileBackground from './ProfileBackground/ProfileBackground';
import ProfileInfo from './ProfileInfo/ProfileInfo';

export default function Profile() {

    return(
        
        <Row className="profile m-0">

        {/* Profile Background Component */}
        <ProfileBackground />

        {/* Profile Info Component */}
        <ProfileInfo />


        </Row>
    );
}
