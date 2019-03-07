import React, { Component } from 'react';
import AppBar from './AppBar';
import Grid from './Grid';

export class Layout extends Component {
    displayName = Layout.name

    render() {
        return (
            <Grid >
                <AppBar />

                {this.props.children}

            </Grid>
        );
    }
}
