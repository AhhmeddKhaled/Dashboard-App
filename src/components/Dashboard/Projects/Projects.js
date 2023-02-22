import './projects.css';
import { Row, Col } from 'react-bootstrap';
import ImageRadius from '../../../Atoms/ImageRadius/ImageRadius';
import Completion from '../../../Atoms/Completion/Completion';
import { MdDone, MdMoreVert } from 'react-icons/md';
import dashboard from '../../../JsonData/dashboard.json';

export default function Projects() {

    const imageRadius = [
        <ImageRadius img={[
            <img
                src="https://demos.creative-tim.com/material-dashboard-react/static/media/team-1.0fd36e0ee93dcfacdef8.jpg"
                alt=""
                key="1"
            />,
            <img
                src="https://demos.creative-tim.com/material-dashboard-react/static/media/team-3.0ef0be95e6850814c79e.jpg"
                alt=""
                key="2"
            />,
            <img
                src="https://demos.creative-tim.com/material-dashboard-react/static/media/team-2.13ae2ce3e12f4cfed420.jpg"
                alt=""
                key="3"
            />,
            <img
                src="https://demos.creative-tim.com/material-dashboard-react/static/media/team-4.85c82b6e60178804017f.jpg"
                alt=""
                key="4"
            />,
        ]} />,
        <ImageRadius
            img={[
                <img
                    src="https://demos.creative-tim.com/material-dashboard-react/static/media/team-2.13ae2ce3e12f4cfed420.jpg"
                    key="1"
                    alt=""
                />,
                <img
                    src="https://demos.creative-tim.com/material-dashboard-react/static/media/team-4.85c82b6e60178804017f.jpg"
                    key="2"
                    alt=""
                />,
            ]}
        />,
        <ImageRadius
            img={[
                <img
                    src="https://demos.creative-tim.com/material-dashboard-react/static/media/team-1.0fd36e0ee93dcfacdef8.jpg"
                    alt=""
                    key="1"
                />,
                <img
                    src="https://demos.creative-tim.com/material-dashboard-react/static/media/team-3.0ef0be95e6850814c79e.jpg"
                    alt=""
                    key="2"
                />,
            ]}
        />,
        <ImageRadius
            img={[
                <img
                    src="https://demos.creative-tim.com/material-dashboard-react/static/media/team-1.0fd36e0ee93dcfacdef8.jpg"
                    alt=""
                    key="1"
                />,
                <img
                    src="https://demos.creative-tim.com/material-dashboard-react/static/media/team-3.0ef0be95e6850814c79e.jpg"
                    alt=""
                    key="2"
                />,
                <img
                    src="https://demos.creative-tim.com/material-dashboard-react/static/media/team-2.13ae2ce3e12f4cfed420.jpg"
                    alt=""
                    key="3"
                />,
                <img
                    src="https://demos.creative-tim.com/material-dashboard-react/static/media/team-4.85c82b6e60178804017f.jpg"
                    alt=""
                    key="4"
                />,
            ]}
        />,
        <ImageRadius
            img={[
                <img
                    src="https://demos.creative-tim.com/material-dashboard-react/static/media/team-4.85c82b6e60178804017f.jpg"
                    alt=""
                    key="4"
                />,
            ]}
        />,
        <ImageRadius
            img={[
                <img
                    src="https://demos.creative-tim.com/material-dashboard-react/static/media/team-1.0fd36e0ee93dcfacdef8.jpg"
                    key="1"
                    alt=""
                />,
                <img
                    src="https://demos.creative-tim.com/material-dashboard-react/static/media/team-4.85c82b6e60178804017f.jpg"
                    key="4"
                    alt=""
                />,
            ]}
        />
    ];
    const completion = [
        <Completion width="80%" background="green" />,
        <Completion width="50%" background="blue" />,
        <Completion width="0%" background="red" />,
        <Completion width="90%" background="green" />,
        <Completion width="60%" background="yellow" />,
        <Completion width="10%" background="red" />
    ];

    return (
        <Col xs={12} xl={8} className='projects rounded p-4'>
            <Row className="projectHead d-flex align-items-center justify-content-between pt-4 pb-4">
                <Col xs={10}>
                    <h5>Projects</h5>
                    <span>
                        <MdDone />
                        <strong>30 done</strong> this month
                    </span>
                </Col>
                <Col xs={2} className='d-flex justify-content-end'>
                    <MdMoreVert />
                </Col>
            </Row>

            <Row className="projectTitles">
                <Col xs={6}>
                    <span>companies</span>
                </Col>

                <Col>
                    <span>members</span>
                </Col>
                <Col>
                    <span>budget</span>
                </Col>
                <Col>
                    <span>completion</span>
                </Col>
            </Row>

            {dashboard && dashboard.project.map((project, i) => {

                return (
                    <Row className='project pt-3 pb-3' key={project.id}>
                        <Col xs={6} className='imgAndTitle d-flex align-items-center'>
                            <img src={project.src} alt='' />
                            <span>
                                {project.title}
                            </span>
                        </Col>
                        {imageRadius[i]}
                        <Col className='price'>
                            <span>
                                {project.price}
                            </span>
                        </Col>
                        <Col id='completion' className='completion d-flex align-items-center'>
                            {completion[i]}
                        </Col>
                    </Row>
                )
            })
            }

        </Col>

    );
}