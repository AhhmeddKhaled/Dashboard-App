import './links.css';
import { Routes, Route } from 'react-router-dom';
import {Container, Row, Col } from 'react-bootstrap';
import { MdSettings } from 'react-icons/md';
import NavBar from './../Navbar/Navbar';
import Footer from './../Footer/Footer';
import Dashboard from './../Dashboard/Dashboard'
import Tables from './../Tables/Tables'
import Billing from './../Billing/Billing'
import Notifications from './../Notifications/Notifications';
import Profile from './../Profile/Profile';
import SignIn from './../Sign/SignIn/SignIn';
import SignUb from './../Sign/SignUb/SignUb';


export default function Links() {


    return (
        <Container className="routes" style={{position: "relative"}}>

        <NavBar />

            <Routes>
                <Route exact path='/' element={<Dashboard />} />
                <Route path="/Dashboard" element={<Dashboard/>} />
                <Route path="/Tables" element={<Tables />} />
                <Route path="/Billing" element={<Billing />} />
                <Route path="/Notifications" element={<Notifications />} />
                <Route path="/Profile" element={<Profile />} />
                <Route path="/SignIn" element={<SignIn />} />
                <Route path="/SignUb" element={<SignUb />} />
        
            </Routes>

            <Row className="setting">
                <Col>
                    <MdSettings />
                </Col>
            
            </Row>
            
            <Footer />
        
        </Container>
    )
}