import "./slider.css";
import { Container } from "react-bootstrap";
import SidebarBrand from "./SidebarBrand/SidebarBrand";
import SidebarLink  from "./SidebarLink/SidebarLink";

export default function Sidebar() {

  return (
    <>
      <Container className={ window.location.pathname.slice(1,).toUpperCase() === 'SIGNIN'  ? ' sidebar d-none' : window.location.pathname.slice(1,).toUpperCase() === 'SIGNUB' ? 'sidebar d-none' : ' sidebar d-block' }  >
        
        {/* Sidebar Brand Component */}
        <SidebarBrand />
        
        {/* Sidebar Link Component */}
        <SidebarLink />
              
      </Container>
    </>
  );
}
