import './toggle.css';

export default function Toggle() {
    
    let toggle = (e) => {

        e.target.parentElement.classList.toggle("light");
        e.target.classList.toggle("fullRight");
    }
        
        
            
            // document.querySelector(".toggle span").classList.toggle("fullRight")
    return(
        <span className='toggle'>
            <span onClick={(e) => toggle(e)} ></span>
        </span>
    );
}