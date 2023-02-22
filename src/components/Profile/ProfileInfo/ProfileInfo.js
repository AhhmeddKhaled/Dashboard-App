import './profileInfo.css';

import ProfileHead from './ProfileHead/ProfileHead';
import PlatformSettings from './platformSettings/PlatformSetting';
import ProfileInformation from './ProfileInformation/ProfileInformation';
import Conversations from './Conversations/Conversations';
import ProfileProjects from './../ProfileProjects/ProfileProjects'
import { Row } from 'react-bootstrap';

export default function ProfileInfo() {

    return(

        <Row className='profile-info'>

            {/* Profile Header Component */}
            <ProfileHead />

            <Row className='profile-data'>

                {/* Platform Setting Component */}
                <PlatformSettings />

                {/* Profile Information Component */}
                <ProfileInformation />

                {/* profile Conversations Component */}
                <Conversations />

                {/* Profile Projects Component */}
                <ProfileProjects />
                
            </Row>

        </Row>
    
    );
}