import './box.css';
import { Row, Col } from 'react-bootstrap';
import { MdLeaderboard, MdPersonAdd, MdStoreMallDirectory, MdWeekend } from 'react-icons/md';
import dashboard from '../../../JsonData/dashboard.json';

export default function Box() {

    const icons = [<MdWeekend />,<MdLeaderboard />,<MdStoreMallDirectory />,<MdPersonAdd />];
    return (
        <Row className="
        dashboardBox 
        justify-content-between 
        mb-5">

            {
                dashboard.box.map((box, i) => {

                    return (

                        <Col xs={3} className="
                        card 
                        position-relative
                        p-0
                        d-flex
                        flex-column
                        align-content-between
                        rounded
                        " key={box.id}>
                            <Col className="
                            box
                            position-absolute
                            d-flex
                            justify-content-center
                            align-items-center
                            rounded
                            ">
                                { icons[i] }
                            </Col>

                            <Col className='card-info p-3'>
                                <span className='card-info-title d-block'> { box.title } </span>
                                <span className='card-info-number d-block'> { box.number } </span>
                            </Col>

                            <Col className='card-rate p-3'>
                                <p>
                                    <span> { box.rate } </span>
                                    { box.parag }
                                </p>
                            </Col>
                        </Col>
                    )

                })

            }

        </Row>

    );
}