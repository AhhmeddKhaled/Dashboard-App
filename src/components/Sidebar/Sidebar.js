import "./slider.css";
import { Container , Col  } from "react-bootstrap";
import SidebarBrand from "./SidebarBrand/SidebarBrand";
import SidebarLink, { closeSidebar } from "./SidebarLink/SidebarLink";
import {BsXLg} from 'react-icons/bs'

export default function Sidebar() {

  const path = window.location.pathname.slice(1,).toUpperCase();

  let signMode = () =>
    path === 'SIGNIN' ? 'sidebar d-none'
      : path === 'SIGNUB' ? 'sidebar d-none' : 'sidebar  rounded';

  return (
    <Container className={signMode()}>

    <Col className='close'>
      <BsXLg  onClick={ () => closeSidebar() } />
    </Col>
      <SidebarBrand />

      <SidebarLink />

    </Container>
  );
}
