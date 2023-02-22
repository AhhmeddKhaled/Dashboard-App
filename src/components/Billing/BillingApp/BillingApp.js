import React from "react";
import { Row, Col } from "react-bootstrap";
import {
	MdExpandLess,
	MdExpandMore,
	MdOutlineDateRange,
	MdPriorityHigh,
} from "react-icons/md";
import "./billingApp.css";
import billing from '../../../JsonData/Billing.json';

export default function BillingApp() {

	const icons = [<MdExpandMore />, <MdExpandLess />];
	const iconsTwo = [<MdExpandLess />, <MdExpandLess />, <MdExpandLess />, <MdPriorityHigh />];

	return (
		<Col className="billing-app mt-3 mt-xl-0 rounded">
			<Row className="billing-app-info">
				<Col className="billing-app-info-title">
					<h6>Your Transaction's</h6>
				</Col>
				<Col className="billing-app-info-date d-flex align-items-center justify-content-end">
					<MdOutlineDateRange />
					<span>23 - 30 March 2023</span>
				</Col>
			</Row>
			<Row className="billing-app-newest">
				<Col>
					<span className='text-uppercase'>newest</span>
				</Col>
			</Row>

			{

				billing && billing.billingApp[0].map((app, i) => {

					return (

						<Row className="billing-app-card judtify-content-between align-items-center">
							<Col xs={2} className="billing-app-card-icon">
								<span>
									{icons[i]}
								</span>
							</Col>

							<Col xs={7} className="billing-app-card-info">

								<span className="billing-app-card-info-name">
									{app.appName}
								</span>

								<span className='billing-app-card-info-date'>
									{app.appDate}
								</span>
							</Col>

							<Col className='billing-app-card-price'>
								<span>
									{app.appPrice}
								</span>
							</Col>
						</Row>
					)

				})

			}

			<Row className="billing-app-yesterday">
				<Col>
					<span className='text-uppercase'>yesterday</span>
				</Col>
			</Row>

			{

				billing && billing.billingApp[1].map((app, i) => {

					return (

						<Row className="billing-app-card judtify-content-between align-items-center">
							<Col xs={2} className="billing-app-card-icon">
								<span>
									{iconsTwo[i]}
								</span>
							</Col>

							<Col xs={7} className="billing-app-card-info">

								<span className="billing-app-card-info-name">
									{app.appName}
								</span>

								<span className='billing-app-card-info-date'>
									{app.appDate}
								</span>
							</Col>

							<Col className='billing-app-card-price'>
								<span>
									{app.appPrice}
								</span>
							</Col>
						</Row>
					)

				})

			}
		</Col>
	);
}
