import "./sidebarLink.css";
import { Row, Col } from "react-bootstrap";
import {
    MdDashboard,
    MdTableView,
    MdOutlineReceiptLong,
    MdNotifications,
    MdPerson,
    MdOutlineLogin,
    MdAssignment,
} from "react-icons/md";
import UbgradePro from "./UbgradePro/UbgradePro";
import { Link } from "react-router-dom";

export let closeSidebar;
export default function SidebarLink() {
    const linkName = ['Dashboard','Tables','Billing','Notifications','Profile','Sign in','Sign ub'];
    const path = window.location.pathname.slice(1,).toUpperCase();
    const link = 'link';
    const backgroundLink = 'link background';


    let background = (e) => {
        document.querySelectorAll(".link").forEach((link) => {
            link.classList.remove("background");
        });
        e.target.parentElement.classList.add("background");
        document.querySelector(".nav-text").innerHTML = `/ ${e.target.outerText}`;
        document.querySelector(".head-text").innerHTML = e.target.outerText;
    };

    let sidebarRemove = () => {
        document.querySelector('.sidebar').classList.remove('d-md-block');
        document.querySelector('.nav').classList.add('d-none');
    }
    closeSidebar = () => {

        document.querySelector('.sidebar').classList.remove('open');
        document.querySelector('.burger svg').classList.remove('d-none');

    } 
        return (
        <Row className="links">
            <Col 
            className={
                path === '' ? backgroundLink : 
                path === linkName[0].toUpperCase() ? backgroundLink : link 
                } xs={12} id='Dashboard'>
                <Link to="/Dashboard" onClick={
                    (e) => {
                        background(e)
                        closeSidebar()
                        }}>
                    <MdDashboard />
                    {linkName[0]}
                </Link>
            </Col>
            <Col className={path === linkName[1].toUpperCase() ? backgroundLink : link} xs={12}>
                <Link to="/Tables" onClick={(e) => {
                    background(e)
                    closeSidebar()
                    }}>
                    <MdTableView />
                    {linkName[1]}
                </Link>
            </Col>
            <Col className={path === linkName[2].toUpperCase() ? backgroundLink : link} xs={12}>
                <Link to="/Billing" onClick={(e) => {
                    background(e)
                    closeSidebar()
                    }}>
                    <MdOutlineReceiptLong />
                    {linkName[2]}
                </Link>
            </Col>
            <Col className={path === linkName[3].toUpperCase() ? backgroundLink : link} xs={12}>
                <Link to="/Notifications" onClick={(e) => {
                    background(e)
                    closeSidebar()
                    }}>
                    <MdNotifications />
                    {linkName[3]}
                </Link>
            </Col>
            <Col className={path === linkName[4].toUpperCase() ? backgroundLink : link} xs={12}>
                <Link to="/Profile" onClick={(e) => {
                    background(e)
                    closeSidebar()
                    }}>
                    <MdPerson />
                    {linkName[4]}
                </Link>
            </Col>
            <Col className={path === linkName[5].toUpperCase() ? backgroundLink : link} xs={12}>
                <Link to="/SignIn" onClick={(e) => {
                    background(e) 
                    sidebarRemove()
                    closeSidebar()
                    }}>
                    <MdOutlineLogin />
                    {linkName[5]}
                </Link>
            </Col>
            <Col className={path === linkName[6].toUpperCase() ? backgroundLink : link} xs={12}>
                <Link to="/SignUb" onClick={(e) => {
                    background(e) 
                    sidebarRemove()
                    closeSidebar()
                    }}>
                    <MdAssignment />
                    {linkName[6]}
                </Link>
            </Col>

            {/* Ubgrade Pro Component */}
            <UbgradePro />
        </Row>
    );
}
