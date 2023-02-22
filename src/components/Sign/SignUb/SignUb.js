import "./SignUb.css";
import { Row, Col, Form } from "react-bootstrap";
import Forms from "../../../Atoms/Form/Forms";
import Download from "../../../Atoms/DownloadDashboard/Download";

export default function SignUb() {
  return (
    <Row className="sign-ub">
      <Row className="signub-background">
        <Col></Col>
      </Row>

      <Download />
      <Forms
        title="Join us today"
        parag="Enter your email and password to register"
        acount="Already have an account?"
        submit='Sign ub'
        toggle={
          <Form.Check
            className='d-flex align-items-center m-3 mt-1 mb-1'
            type="checkbox"
            label="I agree the Terms and Conditions"
          />
        }
        sign="Sign in"
        link="/SIgnIn"
        input={[
          <Form.Group className='m-3 p-0'><Form.Control type="text" placeholder="Name" /></Form.Group>,
          <Form.Group className='m-3 p-0'><Form.Control type="email" placeholder="Email" /></Form.Group>,
          <Form.Group className='m-3 p-0'><Form.Control type="password" placeholder="Password" /></Form.Group>
        ]}
      />
    </Row>
  );
}
