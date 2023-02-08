import "./dashboard.css";
import { Container, Row, Col } from "react-bootstrap";
import Project from "./Projects/Projects";
import Order from "./Orders/Orders";
import ImageRadius from "../../Atoms/ImageRadius/ImageRadius";
import Completion from "../../Atoms/Completion/Completion";
import FullChart from "../../Atoms/Chart/FullChart";
import Box from "./Box/Box";
import { MdWeekend,MdLeaderboard,MdStoreMallDirectory,MdPersonAdd,MdDone,MdMoreVert,MdArrowUpward,MdNotifications,MdInventory2,MdShoppingCart,MdPayment,MdVpnKey,} from "react-icons/md";


function Dashboard() {

  return (
    <>
      <Container className="dashboard">

        {/* Start Box Component */}
        <Row className="dashboardBox">
          <Box
            icon={<MdWeekend />}
            title="Bookings"
            number="281"
            rate="+55%"
            parag="han lask week"
          />
          <Box
            icon={<MdLeaderboard />}
            title="Today's Users"
            number="2,300"
            rate="+3%"
            parag="than last month"
          />
          <Box
            icon={<MdStoreMallDirectory />}
            title="Revenue"
            number="34k"
            rate="+1%"
            parag="than yesterday"
          />
          <Box
            icon={<MdPersonAdd />}
            title="Followers"
            number="+91"
            parag="Just updated"
          />
        </Row>
        {/* End Box Component */}

        {/* Chart Component */}
        <FullChart />

        
        <Row xs={8} className="projectsAndOrders">
          {/* Projects Styling */}
          <Col xs={8}>
            <Row className="projectHead">
              <Col xs={10}>
                <h5>Projects</h5>
                <span>
                  <MdDone />
                  <strong>30 done</strong> this month
                </span>
              </Col>
              <Col xs={2}>
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

            {/* Project Component */}
            <Project
              src="https://demos.creative-tim.com/material-dashboard-react/static/media/logo-xd.6e37886f94dba0c2967ece68a152e30c.svg"
              title="Material UI XD Version"
              img={
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
                />
              }
              price="$14,000"
              completion={<Completion width="80%" background="green" />}
            />

            <Project
              src="https://demos.creative-tim.com/material-dashboard-react/static/media/logo-atlassian.f2b0e8570a4b4ce768854ff3dad1a6e1.svg"
              title="Add Progress Track"
              img={
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
                />
              }
              price="$3,000"
              completion={<Completion width="50%" background="blue" />}
            />

            <Project
              src="https://demos.creative-tim.com/material-dashboard-react/static/media/logo-slack.7c47c5aa474b5c4fb39fcf05ffb8e4e7.svg"
              title="Fix Platform Errors"
              img={
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
                />
              }
              price="Not set"
              completion={<Completion width="0%" background="red" />}
            />

            <Project
              src="https://demos.creative-tim.com/material-dashboard-react/static/media/logo-spotify.e83cf56c9d99a1fdf59e8deb58bbe470.svg"
              title="Launch our Mobile App"
              img={
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
                />
              }
              price="$20,500"
              completion={<Completion width="90%" background="green" />}
            />

            <Project
              src="https://demos.creative-tim.com/material-dashboard-react/static/media/logo-jira.c19fd4e416babfbd0fdb0a794188c601.svg"
              title="Add the New Pricing Page"
              img={
                <ImageRadius
                  img={[
                    <img
                      src="https://demos.creative-tim.com/material-dashboard-react/static/media/team-4.85c82b6e60178804017f.jpg"
                      alt=""
                      key="4"
                    />,
                  ]}
                />
              }
              price="$500"
              completion={<Completion width="60%" background="yellow" />}
            />

            <Project
              src="https://demos.creative-tim.com/material-dashboard-react/static/media/logo-invision.a1062115730dcd10e1c4f4abe7b9ab33.svg"
              title="Redesign New Online Shop"
              img={
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
              }
              price="$2,000"
              completion={<Completion width="10%" background="red" />}
            />
          </Col>

          {/* Orders Styling */}
          <Col>
            <Row className="orderHead">
              <Col>
                <h5>Orders overview</h5>
                <span>
                  <MdArrowUpward />
                  <strong>24%</strong> this month
                </span>
              </Col>
            </Row>

            <Order
              icon={<MdNotifications />}
              price="$2400, Design changes"
              date="22 DEC 7:20 PM"
            />

            <Order
              icon={<MdInventory2 />}
              price="New order #1832412"
              date="21 DEC 11 PM"
            />

            <Order
              icon={<MdShoppingCart />}
              price="Server payments for April"
              date="21 DEC 9:34 PM"
            />

            <Order
              icon={<MdPayment />}
              price="New card added for order #4395133"
              date="20 DEC 2:20 AM"
            />

            <Order
              icon={<MdVpnKey />}
              price="New card added for order #4395133"
              date="18 DEC 4:54 AM"
            />
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default Dashboard;
