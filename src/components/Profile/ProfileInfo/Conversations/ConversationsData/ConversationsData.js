import "./conversationsData.css";
import { Row, Col } from "react-bootstrap";

export default function ConversationsData(props) {
    return (

        <Row className='ConversationsData'>

            <Col xs={3} className='ConversationsDataImg'>
                <img src={ props.src } alt='' />
            </Col>

            <Col xs={6} className='ConversationsDataInfo'>
                <span> { props.name } </span>
                <span> { props.parag } </span>
            </Col>

            <Col xs={3} className='ConversationsDataRebly'>
                <span>rebly</span>
            </Col>

        </Row>
    );
}
