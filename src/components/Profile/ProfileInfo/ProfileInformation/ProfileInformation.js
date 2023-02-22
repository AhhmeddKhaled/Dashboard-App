import './profileInformation.css';
import { Row, Col } from 'react-bootstrap';
import { FaTwitter, FaInstagram } from 'react-icons/fa';
import { MdFacebook } from 'react-icons/md';
import profile from '../../../../JsonData/Profile.json';


export default function ProfileInformation() {

    const Data = [
        " Ahmed khaled",
        " (+20) 10 21 03  24 25",
        " ahmedkhaled7229@gmail.com",
        " Egypt,Cairo,Elmaade",
        [
            <MdFacebook />,
            <FaTwitter />,
            <FaInstagram />
        ],
        " Alec M. Thompson"
    ]
    return (

        <Col xs={12} xl={4} className='ProfileInformation'>

            <Row className='ProfileInformationTitle'>
                <Col>
                    <h6 className='
                    font-weight-bold
                    text-capitalize
                    '>
                        profile information
                    </h6>
                </Col>
            </Row>

            <Row className='ProfileInformationInfo'>
                <Col>
                    <span>
                        Hi, I’m Alec Thompson, Decisions: If you can’t decide, the answer is no. If two equally difficult paths, choose the one more painful in the short term (pain avoidance is creating an illusion of equality).
                    </span>
                </Col>
            </Row>

            <Row className='ProfileInformationData'>
                {profile && profile.ProfileInformationData.map((data , i) => {

                    return (

                        <Row className='ProfileInformationData' key={data.id}>

                            <Col>
                                <span>
                                    {data.head}
                                </span>

                                <span>
                                    {Data[i]}
                                </span>
                            </Col>

                        </Row>
                    )
                })}
            </Row>

        </Col>
    );
} 