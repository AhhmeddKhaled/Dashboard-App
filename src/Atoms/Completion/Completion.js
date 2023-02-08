import './completion.css';
import { Col } from 'react-bootstrap';

export default function Completion(props) {

 
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

    return(
        <Col id='completion' className='completion'>
         <span>
           <span data-width={ props.width } data-background={ props.background }>

           </span>
         </span>
        </Col>

    );
}