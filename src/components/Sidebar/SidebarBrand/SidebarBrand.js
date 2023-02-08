import './sidebarBrand.css';
import { Row , Col , Dropdown } from 'react-bootstrap';

export default function SidebarBrand() {

    return(

        <Row className="brand">
            <Col className="brand-icon">
                <img src="./imgs/brand.png" alt="brand" />
                <h2>
                    Material Dashboard 2
                </h2>
            </Col>
            <Dropdown.Divider />
        </Row>
    );
}