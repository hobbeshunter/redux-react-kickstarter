import React, { Component } from 'react';

import ConfiguredRadium from 'ConfiguredRadium';
import NavBar from './NavBar';
import PropTypes from 'prop-types';
import styleGlobals from 'styleGlobals';

const styles = {
    app: {
        backgroundColor: styleGlobals.colors.grayLight,
        minHeight: '100vh'
    },

    main: {
        width: styleGlobals.dimensions.appWidth,
        padding: 2 * styleGlobals.dimensions.spacing.l,
        boxSizing: 'border-box',
        marginLeft: 'auto',
        marginRight: 'auto'
    }
};

@ConfiguredRadium
export default class App extends Component {

    static propTypes = {
        children: PropTypes.object
    }

    componentDidMount( ) {
        this.setTopSpacing( );
    }

    componentDidUpdate( ) {
        this.setTopSpacing( );
    }

    setTopSpacing( ) {
        this.main.style.marginTop = this.navbar.clientHeight + 'px';
    }

    render( ) {
        const { children } = this.props;

        return (
            <div style={[ styles.app ]}>
                <NavBar ref={( navbar ) => {
                    this.navbar = navbar;
                }}/>
                <div style={[ styles.main ]} ref={( main ) => {
                    this.main = main;
                }}>
                    {children}
                </div>
            </div>
        );
    }
}
