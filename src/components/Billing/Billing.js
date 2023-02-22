import { Row , Col } from "react-bootstrap";
import VisaCard from "./VisaCard/VisaCard";
import BillingCard from "./BillingCard/BillingCard";
import MethodCard from "./MethodCard/MethodCard";
import Invoices from "./Invoices/Invoices";
import BillingInformation from "./BillingInformation/BillingInformation";
import BillingApp from "./BillingApp/BillingApp";

export default function Billing() {
  return (
    <Row className="billing">
    
      <Row className='m-0 mb-3 p-0'>

      <Col xs={12} xl={8} className="cards p-0 p-xl-2 pt-xl-0 pb-xl-0">
        <Row className='justify-content-md-center m-0'>

        {/* Visa Card Component */}
            <VisaCard />

        {/* Billing Card Component */}
            <BillingCard />
        </Row>

        {/* Method Card Component */}
        <MethodCard />
      </Col>

      {/* Invoices Component */}
        <Invoices />

      </Row>

      {/* Billing Information Component */}
        <BillingInformation />

      {/* Billing App Component */}
        <BillingApp />

    </Row>
  );
}

