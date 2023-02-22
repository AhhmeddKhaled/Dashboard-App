import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import { MdSchedule } from "react-icons/md";
import res from "../../JsonData/chart.json";
import { BarChart } from "./BarChart";
import "./FullChart.css";
import { LineChart } from "./LineChart";

const data = Object.values(res);
const Bar = data[0];
const LineOne = data[1];
const LineTwo = data[2];

export default function Chart() {
  const [BarData, setBarData] = useState({
    labels: Bar.map(data => data.year),
    datasets: [
      {
        label: "sales",
        data: Bar.map(data => data.rate),
        backgroundColor: "#fff",
      },
    ],
  });

  const [LineDataOne, setLineDataOne] = useState({
    labels: LineOne.map(data => data.year),
    datasets: [
      {
        label: "sales",
        data: LineOne.map(data => data.rate),
        backgroundColor: "#fff",
        borderColor: "#fff",
        borderWidth: 4,
      },
    ],
  });

  const [LineDataTwo, setLineDataTwo] = useState({
    labels: LineTwo.map(data => data.year),
    datasets: [
      {
        label: "sales",
        data: LineTwo.map(data => data.rate),
        backgroundColor: "#fff",
        borderColor: "#fff",
        borderWidth: 4,
      },
    ],
  });

  const chartData = [
    <BarChart chartData={BarData} />,
    <LineChart chartData={LineDataOne} />,
    <LineChart chartData={LineDataTwo} />,
  ];

  return (
    <Row className="charAt justify-content-between mb-4">
      {res &&
        res.data.map((item, i) => {
          return (
            <Col className="chartCard position-relative p-4 rounded" key={i}>
                  { chartData[i] }
              <Col className="info pb-3">
                    <h4 className='m-0'> {item.title} </h4>
                    <span> {item.parag} </span>
              </Col>
              <Col className="day">
                <MdSchedule />
                    <span>{item.day}</span>
              </Col>
            </Col>
          );
        })}
    </Row>
  );
}
