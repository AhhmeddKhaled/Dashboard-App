import './tables.css';
import { Row, Col } from 'react-bootstrap';

import AuthorsTables from './AuthorsTables/AuthorTables';
import ProjectsTables from './ProgectsTables/ProjectsTables';

function Tables() {

    return (
        <>

        <Row className="Authors-Table">

        <Row className="authorHead">
            <Col xs={5}>
                <span>author</span>
            </Col>

            <Col>
            <span>function</span>
            </Col>

            <Col>
            <span>status</span>
            </Col>

            <Col>
            <span>employed</span>
            </Col>

            <Col>
            <span>action</span>
            </Col>
        </Row> 


        <AuthorsTables 
        src="https://demos.creative-tim.com/material-dashboard-react/static/media/team-2.13ae2ce3e12f4cfed420.jpg"
        name="John Michael"
        email="john@creative-tim.com"
        jop="Manager"
        jopTwo="Organization"
        state="online"
        date="23/04/18"
        action="Edit"
        / >

        
        <AuthorsTables 
        src='https://demos.creative-tim.com/material-dashboard-react/static/media/team-3.0ef0be95e6850814c79e.jpg'
        name="Alexa Liras"
        email="alexa@creative-tim.com"
        jop="Programator"
        jopTwo="Developer"
        state="offline"
        date="11/01/19"
        action="Edit"
        / >

        
        <AuthorsTables 
        src='https://demos.creative-tim.com/material-dashboard-react/static/media/team-4.85c82b6e60178804017f.jpg'
        name="Laurent Perrier"
        email="laurent@creative-tim.com"
        jop="Executive"
        jopTwo="Projects"
        state="online"
        date="19/09/17"
        action="Edit"
        / >

        
        <AuthorsTables
        src='https://demos.creative-tim.com/material-dashboard-react/static/media/team-3.0ef0be95e6850814c79e.jpg'
        name="Michael Levi"
        email="michael@creative-tim.com"
        jop="Programator"
        jopTwo="Developer"
        state="online"
        date="24/12/08"
        action="Edit"
        / >


        <AuthorsTables
        src='https://demos.creative-tim.com/material-dashboard-react/static/media/team-3.0ef0be95e6850814c79e.jpg'
        name="Richard Gran"
        email="richard@creative-tim.com"
        jop="Manager"
        jopTwo="Executive"
        state="offline"
        date="24/10/21"
        action="Edit"
        / >
        
            
        <AuthorsTables
        src='https://demos.creative-tim.com/material-dashboard-react/static/media/team-4.85c82b6e60178804017f.jpg'
        name="Miriam Eric"
        email="miriam@creative-tim.com"
        jop="Programator"
        jopTwo="Developer"
        state="offline"
        date="14/09/20"
        action="Edit"
        / >

        </Row>

        <Row className="Projects-Table">
        

        <Row className="project-head">
            <Col xs={3}>
                <span>project</span>
            </Col>

            <Col>
            <span>budget</span>
            </Col>

            <Col>
            <span>status</span>
            </Col>

            <Col xs={3}>
            <span>completion</span>
            </Col>

            <Col>
            <span>action</span>
            </Col>
        </Row>

        <ProjectsTables
        src='https://demos.creative-tim.com/material-dashboard-react/static/media/logo-asana.d758f410d82760a61d1eabcb03409de6.svg'
        title="Asana"
        price="$2,500"
        status="working"
        rate="60%"
        background="linear-gradient(195deg, rgb(73, 163, 241), rgb(26, 115, 232))"
        />

        <ProjectsTables
        src='https://demos.creative-tim.com/material-dashboard-react/static/media/github.067f80f311bc16bd0d1216457d09bdb3.svg'
        title="Github"
        price="$5,000"
        status="done"
        rate="100%"
        background="linear-gradient(195deg, rgb(102, 187, 106), rgb(67, 160, 71))"
        />

        <ProjectsTables
        src='https://demos.creative-tim.com/material-dashboard-react/static/media/logo-atlassian.f2b0e8570a4b4ce768854ff3dad1a6e1.svg'
        title="Atlassian"
        price="$3,400"
        status="canceled"
        rate="30%"
        background="linear-gradient(195deg, rgb(239, 83, 80), rgb(229, 57, 53))"
        />

        <ProjectsTables
        src='https://demos.creative-tim.com/material-dashboard-react/static/media/logo-spotify.e83cf56c9d99a1fdf59e8deb58bbe470.svg'
        title="Spotify"
        price="$14,000"
        status="working"
        rate="80%"
        background="linear-gradient(195deg, rgb(73, 163, 241), rgb(26, 115, 232))"
        />

        <ProjectsTables
        src='https://demos.creative-tim.com/material-dashboard-react/static/media/logo-slack.7c47c5aa474b5c4fb39fcf05ffb8e4e7.svg'
        title="Slack"
        price="$1,000"
        status="working"
        rate="0%"
        background=""
        />

        <ProjectsTables
        src='https://demos.creative-tim.com/material-dashboard-react/static/media/logo-invision.a1062115730dcd10e1c4f4abe7b9ab33.svg'
        title="Invesion"
        price="$2,300"
        status="done"
        rate="100%"
        background="linear-gradient(195deg, rgb(102, 187, 106), rgb(67, 160, 71))"
        />

        </Row>
        </>
    );
}

export default Tables;