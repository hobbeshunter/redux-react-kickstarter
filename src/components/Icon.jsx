import React, { Component } from 'react';

import ConfiguredRadium from 'ConfiguredRadium';
import PropTypes from 'prop-types';
import icons from '../icons';

const styles = {
    wrapper: {
        fontSmoothing: 'antialised',
        display: 'inline-block',
        height: '1.25em',
        width: '1.25em',
        verticalAlign: 'baseline'
    },

    svg: {
        height: '100%',
        width: '100%',
        verticalAlign: 'text-bottom'
    }
};

@ConfiguredRadium
export default class Icon extends Component {

    static propTypes = {
        name: PropTypes.string.isRequired,
        style: PropTypes.object
    }

    render( ) {
        const { name, style, ...rest } = this.props;

        const SVGComponent = icons[name];
        if ( SVGComponent === undefined ) {
            // eslint-disable-next-line no-console
            console.warn( 'Unknown icon: ' + name );
            return null;
        }

        const RadiumSVGComponent = ConfiguredRadium(SVGComponent);

        return (
            <span {...rest} style={[style, styles.wrapper]}>
                <RadiumSVGComponent style={styles.svg} />
            </span>
        );
    }
}
