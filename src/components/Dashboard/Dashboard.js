import { Container, Row } from "react-bootstrap";
import Box from "./Box/Box";
import FullChart from "../../Atoms/Chart/FullChart";
import Projects from "./Projects/Projects";
import Order from "./Orders/Orders";


function Dashboard() {

  return (
    <>
      <Container className="dashboard">

        {/* Box Component */}
        <Box />

        {/* Chart Component */}
        <FullChart />

        <Row className="projectsAndOrders justify-content-between">

            {/* Project Component */}
            <Projects />

            {/* Orders Component */}
            <Order />

        </Row>
      </Container>
    </>
  );
}
export default Dashboard;
