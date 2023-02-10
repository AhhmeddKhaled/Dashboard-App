import './sidebarLink.css';
import { Row } from 'react-bootstrap';
import Linkk from './Link/Link';
import {MdDashboard,MdTableView,MdOutlineReceiptLong,MdNotifications,MdPerson,MdOutlineLogin,MdAssignment,} from "react-icons/md";
import UbgradePro from './UbgradePro/UbgradePro';

export default function SidebarLink() {


    return(

        <Row className='links'>

        {/* Links Component */}
        <Linkk link='/Dashboard' icon={<MdDashboard />} name='Dashboard' className='background' />            
        <Linkk link='/Tables' icon={<MdTableView />} name='Tables' />            
        <Linkk link='/Billing' icon={<MdOutlineReceiptLong />} name='Billing' />            
        <Linkk link='/Notifications' icon={<MdNotifications />} name='Notifications' />            
        <Linkk link='/Profile' icon={<MdPerson />} name='Profile' />            
        <Linkk link='/SignIn' icon={<MdOutlineLogin />} name='Sign In' />            
        <Linkk link='/SignUb' icon={<MdAssignment />} name='Sign Ub' />

        {/* Ubgrade Pro Component */}
        <UbgradePro />

        </Row>
    )
}