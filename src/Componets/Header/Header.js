// This is is the header of the app
import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import '../css/heder.css'

class Header extends React.Component{
    constructor(props) {
        super(props);
    }
    //This is the nav menu
    render() {
        return(
            <div className='header'>
                <Container fluid={true}>
                    <Row>
                        <h2>Media Search Engine </h2>
                    </Row>
                    <Row>
                        <Col lg={"auto"} as={"span"}><a href='/search/movie'>Movies</a></Col>
                        <Col lg={"auto"} as={"span"}> <a href='/search/tv'>TvShows</a></Col>
                        <Col lg={"auto"} as={"span"}> <a href='/search/music'>Music</a></Col>
                        <Col lg={"auto"} as={"span"}><a href='/search/ebook'>Ebooks</a></Col>
                        <Col lg={"auto"} as={"span"}><a href='/search/audiobook'>Audiobooks</a></Col>
                        <Col lg={"auto"} as={"span"}><a href='/search/podcast'>Podcast</a></Col>
                        <Col lg={"auto"} as={"span"}> <a href='/search/all'>All</a></Col>
                        <Col lg={"auto"} as={"span"}> <a href='/display/my list'>My list</a></Col>
                    </Row>
                </Container>
            </div>

        )
    }
}
export default Header