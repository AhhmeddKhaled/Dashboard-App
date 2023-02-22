import './completion.css';
import { Col } from 'react-bootstrap';

export default function Completion(props) {
  
    return(
        <Col className='completion'>
          <span>
            <span style={{width: props.width,background: props.background}}>
            </span>
          </span>
        </Col>

    );
}