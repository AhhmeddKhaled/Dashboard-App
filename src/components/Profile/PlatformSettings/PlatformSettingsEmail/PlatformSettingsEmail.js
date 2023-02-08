import "./platformSettingsEmail.css";
import { Row, Col } from "react-bootstrap";
import Toggle from "../../../../Atoms/Toggle/Toggle";

export default function PlatformSettingsEmail(props) {
  return (
    <Row className="PlatformSettingsEmail">
      <Toggle />

      <Col xs={9}>
        <span>{props.email}</span>
      </Col>
    </Row>
  );
}
