import './link.css';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export let backgroundLink;
export default function Linkk(props) {


        // document.querySelectorAll('.link').forEach(link => {
            
            // if(link.outerText === window.location.pathname.slice(1,)) {

                // link.classList.add('background')
            // }
        // })
    
    
    // let backgroundLink = (e) => {

        // document.querySelectorAll(".link").forEach(link => {
            
            // link.classList.remove("background");
            
        // })
        
        // e.target.parentElement.classList.add("background");
        // document.querySelector('.nav-text').innerHTML = `/ ${e.target.outerText}`;
        // document.querySelector('.head-text').innerHTML = e.target.outerText;

        

    // }

    backgroundLink = () => {

        // e.preventDefault();

        return window.location.pathname.slice(1,).toUpperCase() === props.name.toUpperCase() ? 'link background' : 'link';

    }
    return(
        <Col className={ backgroundLink() } xs={12}   >
            <Link to={ props.link } onClick={backgroundLink()} >
                { props.icon }
                { props.name }
            </Link>
        </Col>
    );
}