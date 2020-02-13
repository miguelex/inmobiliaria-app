import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

class AppNavbar extends Component {
    render() {
        return (
            <div>
                <AppBar position="static">
                    <Toolbar></Toolbar>
                </AppBar>
            </div>
        );
    }
}

export default AppNavbar;