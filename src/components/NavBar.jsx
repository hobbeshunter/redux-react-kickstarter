import React, { Component } from 'react';

import ConfiguredRadium from 'ConfiguredRadium';
import { Link } from 'react-router';
import PropTypes from 'prop-types';
import styleGlobals from 'styleGlobals';

const styles = {
    wrapper: {
        base: {
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0
        },

        dark: {
            background: styleGlobals.colors.grayDark,
            color: styleGlobals.colors.grayLight
        },

        light: {
            background: styleGlobals.colors.grayLight,
            color: styleGlobals.colors.graydark
        }
    },

    nav: {
        base: {
            marginLeft: 'auto',
            marginRight: 'auto',
            display: 'block',
            maxWidth: styleGlobals.dimensions.appWidth,
            paddingLeft: 2 * styleGlobals.dimensions.spacing.l,
            paddingRight: 2 * styleGlobals.dimensions.spacing.l,
            boxSizing: 'border-box'
        },

        navLeft: {
            margin: 0,
            padding: 0,
            listStyle: 'none',
            display: 'flex',
            alignItems: 'stretch',
            boxSizing: 'border-box'
        },

        element: {
            boxSizing: 'border-box',
            display: 'block'
        },

        link: {
            color: 'inherit',
            textDecoration: 'none',
            padding: styleGlobals.dimensions.spacing.m,
            boxSizing: 'border-box',
            display: 'block',

            ':hover': {
                backgroundColor: styleGlobals.colors.primary
            }
        }
    }
};

@ConfiguredRadium
export default class NavBar extends Component {
    static propTypes = {
        colorScheme: PropTypes.oneOf([ 'dark', 'light' ]).isRequired
    };

    static defaultProps = {
        colorScheme: 'dark'
    }

    get clientHeight( ) {
        return this.wrapper.clientHeight;
    }

    render( ) {
        const RadiumLink = ConfiguredRadium( Link );

        return (
            <div style={[
                styles.wrapper.base,
                styles.wrapper[this.props.colorScheme]
            ]} ref={( wrapper ) => {
                this.wrapper = wrapper;
            }}>
                <nav style={styles.nav.base}>
                    <ul style={styles.nav.navLeft}>
                        <li style={styles.nav.element}>
                            <RadiumLink style={styles.nav.link} to="/">Home</RadiumLink>
                        </li>
                        <li style={styles.nav.element}>
                            <RadiumLink style={styles.nav.link} to="test">Test</RadiumLink>
                        </li>
                    </ul>
                </nav>
            </div>
        );
    }

}
