import './form.css';
import { Row , Col, Button , Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Formm(props) {

    return(
        <Form>
        <Row className="social-media">
        <Row>
            <Col>
                <h6> { props.title } </h6>
            </Col>
        </Row>
        <Row>
            <Col>
                { props.parag }
            </Col>
        </Row>
        </Row>


    <Row>
        <Col>
        { props.input[0] }
        { props.input[1] }
        { props.input[2] }
        </Col>
    </Row>



    <Row className='remember'>
            { props.toggle }
            <span> { props.message } </span>
    </Row>

    <Row className='submit'>
        <Col className='p-3 pt-0 pb-0'>
            <Button type="submit">

                { props.submit }

            </Button>
        </Col>

    </Row>

    <Row className='acount'>
        <Col>
            <span>

            { props.acount }
                <Link to={props.link}>
                    { props.sign }
                </Link>
            </span>
        </Col>
    </Row>
</Form>
    );
}