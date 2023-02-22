import { Line } from "react-chartjs-2";
import { Col } from 'react-bootstrap'
import 'chart.js/auto'


import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
    );

    export const LineChart = ({ chartData }) => {
    

    return (

        <Col className='canvas position-relative rounded'>
            <Line
                data={chartData}
            />
        </Col>
);
};
