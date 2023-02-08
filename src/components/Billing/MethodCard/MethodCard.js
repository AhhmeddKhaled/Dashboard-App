import './methodCard.css';
import { Col } from 'react-bootstrap';

export default function MethodCard(props) {

    return(
        <Col xs={5} className='methodCard'>
            <Col xs={10}>
                <img src={props.src} alt="" />
                <span className='stars'>***** ***** *****</span>
                <span className='code'> { props.code } </span>
            </Col>

            <Col className='method-icon'>
                <span> { props.icon } </span>
            </Col>
        </Col>
    );
}