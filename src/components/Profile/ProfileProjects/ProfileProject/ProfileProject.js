import './profileProject.css';
import { Row , Col } from 'react-bootstrap';

export default function ProfileProject(props) {

    return(
        <Col xs={3} className='ProfileProject'>

        <Row className='ProfileProjectImg'>
            <Col>
                <img src={ props.src } alt='' />
            </Col>
        </Row>

        <Row className='ProfileProjectInfo'>
            <Col>
                <span className='ProfileProjectInfoNumber'>
                    { props.number }
                </span>

                <span className='ProfileProjectInfoName'>
                    { props.name }
                </span>

                <span className='ProfileProjectInfoInfo'>
                    { props.info }
                </span>
            </Col>
        </Row>

        <Row className='ProfileView'>
            <Col>
                <button>
                    view project
                </button>

                { props.img }
            </Col>
        </Row>
    </Col>
    );
}