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
                <Layout>
                <Container fluid>
                    <Col>
                        <Row>
               


                               

                <Route exact path='/' component={Home} />




                           
                            
                        </Row>
                    </Col>
                    </Container>
                </Layout>
            </Router>
        );
    }
}
export default App;
