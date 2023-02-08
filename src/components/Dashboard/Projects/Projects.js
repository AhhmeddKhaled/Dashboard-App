import './projects.css';
import { Row, Col } from 'react-bootstrap';

export default function Project(props) {

    let  completion =  () => {

        let comp = document.querySelectorAll("[id='completion'] span span ");

        comp.forEach(span => {

            span.style.width = span.dataset.width
            span.style.background = span.dataset.background
            console.log(span);

        })
    }

    window.onload = () => {

        completion();
        }

        return (

        <Row className='project'>

            <Col xs={6} className='imgAndTitle'>
            <img src={ props.src } alt='' />
            <span>
                { props.title }
            </span>
            </Col>

            { props.img }

            <Col className='price'>
            <span>
            { props.price }
            </span>
            </Col>

            <Col id='completion' className='completion'> 

            { props.completion}
            </Col>

        </Row>
    );
}