import './profileInformationData.css';
import { Row , Col } from 'react-bootstrap';

export default function ProfileInformationData(props) {

    return(
        <Row className='ProfileInformationData'>

            <Col>
                <span>
                    { props.head }
                </span>

                <span>
                    { props.data }
                </span>
            </Col>
        
        </Row>

    );
}