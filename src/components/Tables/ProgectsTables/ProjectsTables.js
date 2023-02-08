import './projectsTables.css';
import { Row, Col } from 'react-bootstrap';
import { MdMoreVert } from 'react-icons/md';

export default function ProjectsTables(props) {

    return(
        <Row className="project-table">
        <Col xs={3} className="project-info">
        <img className="project-img" src={ props.src } alt=""/>
        <Col className="project-title">
        <span > { props.title } </span>
        </Col>
        </Col>

        {/* <Col> */}
        <Col className="project-price">
        <span> { props.price } </span>
        </Col>
        {/* </Col> */}

        <Col className="project-status">
        <span> { props.status } </span>
        </Col>

        <Col className="project-rate" xs={3}>
        <span className="rate"> { props.rate } </span>
        <span>
            <span 
            data-width={ props.rate }
            data-background={ props.background }
            ></span>
        </span>
        </Col>

        <Col className="project-icon">
        <span>
            <MdMoreVert />
        </span>
        </Col>
    </Row>
    );
}