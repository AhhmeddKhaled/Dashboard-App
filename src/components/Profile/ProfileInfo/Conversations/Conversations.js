import './conversations.css';
import { Row, Col } from 'react-bootstrap';
import profile from '../../../../JsonData/Profile.json'

export default function Conversations() {

    return (

        <Col className='Conversations'>

            <Row className='ConversationsTitle'>
                <Col>
                    <h6>
                        conversations
                    </h6>
                </Col>
            </Row>

            {profile && profile.conversationsData.map(conver => {

                return (

                    <Row className='ConversationsData' key={conver.id}>

                        <Col xs={2} xl={4} className='ConversationsDataImg'>
                            <img src={conver.src} alt='' />
                        </Col>

                        <Col xs={8} xl={6} className='ConversationsDataInfo'>
                            <span> {conver.name} </span>
                            <span> {conver.parag} </span>
                        </Col>

                        <Col xs={2} className='ConversationsDataRebly'>
                            <span>rebly</span>
                        </Col>

                    </Row>
                )
            })}

        </Col>
    );
}