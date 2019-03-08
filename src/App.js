import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Layout from './Components/Layout';
import  Home  from './Pages/Home';

class App extends Component {
    displayName = App.name

    render() {
        return (
            <Router>
                <Container fluid>
                    <Col>
                        <Row>
               


                                <h1>hello</h1>

                <Route exact path='/' component={Home} />




                           
                            
                        </Row>
                    </Col>
                </Container>
            </Router>
        );
    }
}
export default App;

ReactDOM.render(
    <App />,
    document.getElementById('root')
);