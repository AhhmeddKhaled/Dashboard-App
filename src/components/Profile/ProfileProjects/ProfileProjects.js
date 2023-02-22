import "./profileProjects.css";
import { Row, Col } from "react-bootstrap";
import ImageRadius from "../../../Atoms/ImageRadius/ImageRadius";
import profile from '../../../JsonData/Profile.json';

export default function ProfileProjects() {

  const imageRadius = [
    <ImageRadius
      img={[
        <img
          src="https://demos.creative-tim.com/material-dashboard-react/static/media/team-1.0fd36e0ee93dcfacdef8.jpg"
          alt=""
          key="1"
        />,
        <img
          src="https://demos.creative-tim.com/material-dashboard-react/static/media/team-2.13ae2ce3e12f4cfed420.jpg"
          alt=""
          kry="2"
        />,
        <img
          src="https://demos.creative-tim.com/material-dashboard-react/static/media/team-3.0ef0be95e6850814c79e.jpg"
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
          src="https://demos.creative-tim.com/material-dashboard-react/static/media/team-1.0fd36e0ee93dcfacdef8.jpg"
          alt=""
          key="1"
        />,
        <img
          src="https://demos.creative-tim.com/material-dashboard-react/static/media/team-2.13ae2ce3e12f4cfed420.jpg"
          alt=""
          kry="2"
        />,
        <img
          src="https://demos.creative-tim.com/material-dashboard-react/static/media/team-3.0ef0be95e6850814c79e.jpg"
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
          src="https://demos.creative-tim.com/material-dashboard-react/static/media/team-1.0fd36e0ee93dcfacdef8.jpg"
          alt=""
          key="1"
        />,
        <img
          src="https://demos.creative-tim.com/material-dashboard-react/static/media/team-2.13ae2ce3e12f4cfed420.jpg"
          alt=""
          kry="2"
        />,
        <img
          src="https://demos.creative-tim.com/material-dashboard-react/static/media/team-3.0ef0be95e6850814c79e.jpg"
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
          src="https://demos.creative-tim.com/material-dashboard-react/static/media/team-1.0fd36e0ee93dcfacdef8.jpg"
          alt=""
          key="1"
        />,
        <img
          src="https://demos.creative-tim.com/material-dashboard-react/static/media/team-2.13ae2ce3e12f4cfed420.jpg"
          alt=""
          kry="2"
        />,
        <img
          src="https://demos.creative-tim.com/material-dashboard-react/static/media/team-3.0ef0be95e6850814c79e.jpg"
          alt=""
          key="3"
        />,
        <img
          src="https://demos.creative-tim.com/material-dashboard-react/static/media/team-4.85c82b6e60178804017f.jpg"
          alt=""
          key="4"
        />,
      ]}
    />
  ]
  return (

    <Row className="ProfileProjects justify-content-between m-3">
      <Row className="ProfileProjectsTitle">
        <Col>
          <h6>Projects</h6>
        </Col>
      </Row>

      {profile && profile.projects.map((project, i) => {

        return (

          <Col xs={12} md={6} xl={3} className='ProfileProject' key={project.id}>

            <Row className='ProfileProjectImg'>
              <Col>
                <img src={project.src} alt='' />
              </Col>
            </Row>

            <Row className='ProfileProjectInfo'>
              <Col>
                <span className='ProfileProjectInfoNumber'>
                  {project.number}
                </span>

                <span className='ProfileProjectInfoName'>
                  {project.name}
                </span>

                <span className='ProfileProjectInfoInfo'>
                  {project.info}
                </span>
              </Col>
            </Row>

            <Row className='ProfileView'>
              <Col>
                <button>
                  view project
                </button>

                {imageRadius[i]}
              </Col>
            </Row>
          </Col>


        )
      })}
    </Row>

  );
}
