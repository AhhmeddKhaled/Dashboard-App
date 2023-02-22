import './authorTables.css';
import { Row, Col } from 'react-bootstrap';
import tables from '../../../JsonData/Tables.json';

export default function AuthorsTables() {

    return (

        <Row className="Authors">

            <Row className="authorHead p-3 m-0">
                <Col xs={5}>
                    <span>author</span>
                </Col>

                <Col>
                    <span>function</span>
                </Col>

                <Col>
                    <span>status</span>
                </Col>

                <Col>
                    <span>employed</span>
                </Col>

                <Col>
                    <span>action</span>
                </Col>

            </Row>

            {
                tables && tables.authorsTables.map(author => {
                    return (

                        <Row className="author p-3 m-0" key={author.id}>
                            <Col xs={5} className="img">
                                <img src={author.src} alt='' />
                                <Col>
                                    <span className="author-name"> {author.name} </span>
                                    <span className="author-email"> {author.email} </span>
                                </Col>
                            </Col>

                            <Col>
                                <Col>

                                    <span className="author-jop"> {author.jop} </span>
                                    <span className="author-jopTwo"> {author.jopTwo} </span>
                                </Col>
                            </Col>

                            <Col>
                                <span className="author-state"> {author.state} </span>
                            </Col>

                            <Col>
                                <span className="author-date">
                                    {author.date}
                                </span>
                            </Col>

                            <Col>
                                <span className="author-action"> {author.action} </span>
                            </Col>
                        </Row>
                    )
                })}

        </Row>

    );
}