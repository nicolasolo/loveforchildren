import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Layout from './Components/Layout';
import  Home  from './Pages/Home';

export default class App extends Component {
    displayName = App.name

    render() {
        return (
            <Router>
                <Layout>
                    
                <Route exact path='/' component={Home} />
                </Layout>
            </Router>
        );
    }
}
