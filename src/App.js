import * as React from 'react';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import Links from './components/Links/Links';
import { Container , Col } from 'react-bootstrap';
import SettingBox from './components/SettingBox/SettingBox';
import NotificationsMessage from './Atoms/NotificationsMessage/NotificationsMessage';
import {AiOutlineMenu} from 'react-icons/ai';

export default function App() {

  let openSidebar = (e) => {
    
    document.querySelector('.sidebar').classList.add('open');
    e.target.classList.add('d-none');
  }
  return (

    <Container className="app mw-100 m-0 p-2 p-lg-5 position-relative d-flex justify-content-between">

      <Sidebar />
    
    <Col className='d-block d-md-none burger'>
    <AiOutlineMenu onClick={(e) => openSidebar(e)  }/>
    </Col>
      <Links />
    
      <SettingBox />
    
      <NotificationsMessage />
    
    </Container>

);

}

