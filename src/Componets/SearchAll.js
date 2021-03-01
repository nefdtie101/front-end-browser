// This is is the search for the all category
import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';



// This is a class the movie class
class SearchAll extends React.Component{
    constructor(props) {
        super(props);
        this.getAll = this.getAll.bind(this)

    }
    getAll(){
        let e = document.getElementById('searchAll').value;
        console.log(e)
        localStorage.setItem('search',e);
        window.location.replace(this.props.redirect)
    }

    render() {
        return(
            <Container fluid={true}>
                <Row>
                    <h2>{this.props.heading}</h2>
                    <input id='searchAll'/>
                    <button onClick={this.getAll}>Search</button>
                </Row>
            </Container>
        )
    }

}
export default SearchAll