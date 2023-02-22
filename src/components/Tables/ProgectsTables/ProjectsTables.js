import './projectsTables.css';
import { Row, Col } from 'react-bootstrap';
import { MdMoreVert } from 'react-icons/md';
import tables from '../../../JsonData/Tables.json';

export default function ProjectsTables() {

    return (

        <Row className='Projects'>


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


            {
                tables && tables.projectsTables.map(project => {
                    return (
                        <Row className="project-table">
                            <Col xs={3} className="project-info">
                                <img className="project-img" src={project.src} alt="" />
                                <Col className="project-title">
                                    <span > {project.title} </span>
                                </Col>
                            </Col>

                            <Col className="project-price">
                                <span> {project.price} </span>
                            </Col>

                            <Col className="project-status">
                                <span> {project.status} </span>
                            </Col>

                            <Col className="project-rate" xs={3}>
                                <span className="rate"> {project.rate} </span>
                                <span>
                                    <span
                                        data-width={project.rate}
                                        data-background={project.background}
                                    ></span>
                                </span>
                            </Col>

                            <Col className="project-icon">
                                <span>
                                    <MdMoreVert />
                                </span>
                            </Col>
                        </Row>
                    )
                })}

        </Row>

    );
}