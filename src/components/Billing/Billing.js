import "./billing.css";
import { Row, Col } from "react-bootstrap";
import {
  MdAccountBalance,
  MdModeEditOutline,
  MdDelete,
  MdOutlineDateRange,
  MdExpandMore,
  MdExpandLess,
  MdPriorityHigh,
} from "react-icons/md";
import { FaPaypal, FaWifi } from "react-icons/fa";
import { TiPlus } from "react-icons/ti";
import Invoices from "./Invoices/Invoices";
import BillingCard from "./BillingCard/BillingCard";
import MethodCard from "./MethodCard/MethodCard";
import BillingInformation from "./BillingInformation/BillingInformation";
import BillingApp from "./BillingApp/BillingApp";
import './Invoices/Invoices.css'
function Billing() {
  return (
    <Row className="billing">
      <Col xs={8} className="cards">
        <Row>
          <Col xs={6}>
            <Col></Col>

            <Row>
              <Col>
                <FaWifi />
              </Col>
            </Row>

            <Row>
              <Col>
                <span>4562   1122   4594   7852</span>
              </Col>
            </Row>

            <Row>
              <Col xs={5}>
                <span>Card Holder</span>
                <span>jack peterson</span>
              </Col>

              <Col>
                <span>Expires</span>
                <span>11/22</span>
              </Col>

              <Col>
                <img src="https://demos.creative-tim.com/material-dashboard-react/static/media/mastercard.27fca3e7637a9458fb64.png" alt='' />
              </Col>
            </Row>
          </Col>

          <BillingCard
            icon={<MdAccountBalance />}
            title="salary"
            paragraph="Belong Interactive"
            price="+$2000"
          />
          <BillingCard
            icon={<FaPaypal />}
            title="paypal"
            paragraph="Freelance Payment"
            price="+$455.00"
          />
        </Row>

        <Row className='method'>
          <Row className='method-info'>
            <Col className='payment'>
              <span>Payment Method</span>
            </Col>

            <Col className='new-card'>
              <span>
                <TiPlus />
                <span>Add new card</span>
              </span>
            </Col>
          </Row>

          <Row className='method-cards'>
            <MethodCard
              src="https://demos.creative-tim.com/material-dashboard-react/static/media/mastercard.27fca3e7637a9458fb64.png"
              code="7852"
              icon={<MdModeEditOutline />}
            />
            <MethodCard
              src="https://demos.creative-tim.com/material-dashboard-react/static/media/visa.71c0d5e9e2aaee42e4c3.png"
              code="7852"
              icon={<MdModeEditOutline />}
            />
          </Row>
        </Row>
      </Col>

      <Col xs={4} className="invoices">
        <Row className="invoices-info">
          <Col className="invoices-title">
            <span>Invoices</span>
          </Col>

          <Col className="invoices-button">
            <button>View all</button>
          </Col>
        </Row>

        <Invoices date="March, 01, 2020" id="#MS-415646" price="$180" />
        <Invoices date="February, 10, 2021" id="#RV-126749" price="$250" />
        <Invoices date="April, 05, 2020" id="#QW-103578" price="$120" />
        <Invoices date="June, 25, 2019" id="#MS-415646" price="$180" />
        <Invoices date="March, 01, 2023" id="#AR-803481" price="$300" />
      </Col>

      <Col xs={7} className='information'>
        <Row className="information-title">
          <Col>
            <h6>Billing Information</h6>
          </Col>
        </Row>

        <BillingInformation
          title="lucas harper"
          icon={<MdDelete />}
          iconName="delete"
          iconTwo={<MdModeEditOutline />}
          iconTwoName="Edit"
          name="stone tech zone"
          email="lucas@stone-tech.com"
          number="FRB1235476"
        />

        <BillingInformation
          title="ethan james"
          icon={<MdDelete />}
          iconName="delete"
          iconTwo={<MdModeEditOutline />}
          iconTwoName="Edit"
          name="stone tech zone"
          email="lucas@stone-tech.com"
          number="FRB1235476"
        />

        <BillingInformation
          title="oliver liam"
          icon={<MdDelete />}
          iconName="delete"
          iconTwo={<MdModeEditOutline />}
          iconTwoName="Edit"
          name="viking burrito"
          email="oliver@burrito.com"
          number="FRB1235476"
        />
      </Col>

      <Col className="billing-app">
        <Row className='billing-app-info'>
          <Col className='billing-app-info-title'>
            <h6>Your Transaction's</h6>
          </Col>
          <Col className='billing-app-info-date'>
            <MdOutlineDateRange />
            <span>23 - 30 March 2023</span>
          </Col>
        </Row>
        <Row className='billing-app-newest'>
          <Col>
            <span>newest</span>
          </Col>
        </Row>

        <BillingApp
          icon={<MdExpandMore />}
          appName="Netflix"
          appDate="27 March 2020, at 12:30 PM"
          appPrice="- $ 2,500"
        />

        <BillingApp
          icon={<MdExpandLess />}
          appName="Apple"
          appDate="27 March 2022, at 04:30 AM"
          appPrice="+ $ 2,000"
        />

        <Row className='billing-app-yesterday'>
          <Col>
            <span>yesterday</span>
          </Col>
        </Row>

        <BillingApp
          icon={<MdExpandLess />}
          appName="Stripe"
          appDate="22 March 2021, at 03:45 PM"
          appPrice="+ $ 750"
        />

        <BillingApp
          icon={<MdExpandLess />}
          appName="HubSpot"
          appDate="25 March 2022, at 12:30 PM"
          appPrice="+ $ 1,000"
        />

        <BillingApp
          icon={<MdExpandLess />}
          appName="Creative Tim"
          appDate="16 April 2021, at 8:30 AM"
          appPrice="+ $ 2,500"
        />

        <BillingApp
          icon={<MdPriorityHigh />}
          appName="Webflow"
          appDate="29 October 2020, at 05:00 AM"
          appPrice="Pending"
        />
      </Col>
    </Row>
  );
}

export default Billing;
