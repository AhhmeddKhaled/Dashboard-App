import * as React from 'react';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import Links from './components/Links/Links';
import { Container } from 'react-bootstrap';
import SettingBox from './components/SettingBox/SettingBox';
import NotificationsMessage from './Atoms/NotificationsMessage/NotificationsMessage';

export default function App() {

  return (

    <Container className="app">

      <Sidebar />
    
      <Links />
    
      <SettingBox />
    
      <NotificationsMessage />
    
    </Container>

);

}

