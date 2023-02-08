import "./profileProjects.css";
import { Row, Col } from "react-bootstrap";
import ProfileProject from "./ProfileProject/ProfileProject";
import ImageRadius from "../../../Atoms/ImageRadius/ImageRadius";

export default function ProfileProjects() {
  return (
    <Row className="ProfileProjects">
      <Row className="ProfileProjectsTitle">
        <Col>
          <h6>Projects</h6>
        </Col>
      </Row>

      <ProfileProject
        src="https://demos.creative-tim.com/material-dashboard-react/static/media/home-decor-1.05e218fd495ccc65c99d.jpg"
        number="project #1"
        name="modern"
        info="As Uber works through a huge amount of internal management turmoil."
        img={
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
        }
      />

      <ProfileProject
        src="https://demos.creative-tim.com/material-dashboard-react/static/media/home-decor-2.b4e5397c9846645ba275.jpg"
        number="project #2"
        name="scandinavian"
        info="                Music is something that everyone has their own specific opinion about."
        img={
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
        }
      />

      <ProfileProject
        src="https://demos.creative-tim.com/material-dashboard-react/static/media/home-decor-4.5b448fd339a14695f6aa.jpeg"
        number="project #3"
        name="minimalist"
        info="Different people have different taste, and various types of music."
        img={
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
        }
      />

      <ProfileProject
        src="https://demos.creative-tim.com/material-dashboard-react/static/media/home-decor-3.74d13fcbd3c631fc7908.jpg"
        number="project #4"
        name="gothic"
        info="Why would anyone pick blue over pink? Pink is obviously a better color."
        img={
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
        }
      />
    </Row>
  );
}
