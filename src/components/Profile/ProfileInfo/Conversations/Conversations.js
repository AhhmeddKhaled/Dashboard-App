import './conversations.css';
import { Row , Col } from 'react-bootstrap';
import ConversationsData from './ConversationsData/ConversationsData';

export default function Conversations() {

    return(

        <Col className='Conversations'>

            <Row className='ConversationsTitle'>
                <Col>
                    <h6>
                        conversations
                    </h6>
                </Col>
            </Row>
            
        <ConversationsData  
        src="https://demos.creative-tim.com/material-dashboard-react/static/media/kal-visuals-square.3210e28a48ff572ae88b.jpg"
        name='Sophie B.' 
        parag='Hi! I need more information..'
        />
        <ConversationsData  
        src='https://demos.creative-tim.com/material-dashboard-react/static/media/marie.c28f32663b6432b46f78.jpg'
        name='Anne Marie' 
        parag='Awesome work, can you..'
        />
        <ConversationsData  
        src="https://demos.creative-tim.com/material-dashboard-react/static/media/ivana-square.f7bc23b269d1d2509c82.jpg" 
        name='Ivanna' 
        parag='About files I can..'
        />
        <ConversationsData  
        src="https://demos.creative-tim.com/material-dashboard-react/static/media/team-4.85c82b6e60178804017f.jpg" 
        name='Peterson' 
        parag='Have a great afternoon..'
        />
        <ConversationsData
        src="https://demos.creative-tim.com/material-dashboard-react/static/media/team-3.0ef0be95e6850814c79e.jpg"   
        name='Nick Daniel' 
        parag='Hi! I need more information..'
        />
        </Col>
    );
}