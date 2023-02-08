import "./signIn.css";
import { Row, Col , Form} from "react-bootstrap";
import Toggle from "../../../Atoms/Toggle/Toggle";
import { FaFacebookSquare } from "react-icons/fa";
import { AiOutlineGoogle, AiFillGithub } from "react-icons/ai";
import Formm from "../../../Atoms/Form/Forms";
import Download from "../../../Atoms/DownloadDashboard/Download";

export default function SignIn() {

    return (
        <Row className="signInn">
            <Col className="overlay"></Col>

            <Download />

    <Formm
        title="Sign in"
        parag={[
            <FaFacebookSquare key="1" />,
            <AiFillGithub key="2" />,
            <AiOutlineGoogle key="3" />,
        ]}
        acount="Don't have an account?"
        sign="Sign Ub"
        // link="/SignUb"
        submit='Sign in'
        toggle={
        <Toggle />
        }
        message='Remember my'
        placeholder={["Email", "Password"]}
        input={[
            <Form.Group className='m-3 p-0'><Form.Control type="email" placeholder="Email" /></Form.Group>,
            <Form.Group className='m-3 p-0'><Form.Control type="password" placeholder="Password"  /></Form.Group>
        ]}
    />
    </Row>
);
}
