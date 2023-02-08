import './authorTables.css';
import { Row, Col } from 'react-bootstrap';

export default function AuthorsTables(props) {

    return(
                
        <Row className="author">
            <Col xs={5} className="img">
            <img src={props.src} alt=""/>
            <Col>
            <span className="author-name"> {props.name} </span>
            <span className="author-email"> {props.email} </span>
            </Col>
            </Col>

            <Col>
            <Col>

            <span className="author-jop"> {props.jop} </span>
            <span className="author-jopTwo"> {props.jopTwo} </span>
            </Col>
            </Col>

            <Col>
            <span className="author-state"> {props.state} </span>
            </Col>

            <Col>
            <span className="author-date">
            { props.date }
            </span>
            </Col>

            <Col>
            <span className="author-action"> {props.action} </span>
            </Col>
        </Row>
    );
}