import React, { Component } from 'react';

import ConfiguredRadium from 'ConfiguredRadium';
import Icon from '../components/Icon';
import PropTypes from 'prop-types';

const styles = {
    icon: {
        marginRight: '0.5em'
    }
};

@ConfiguredRadium
export default class NumberTable extends Component {

    static propTypes = {
        numbers: PropTypes.array.isRequired,
        onMoreClick: PropTypes.func.isRequired
    };

    renderTableRows( numbers ) {
        if ( !numbers ) {
            return null;
        }

        return numbers.map(( number, index ) => {
            return (
                <tr key={index}>
                    <td>{number}</td>
                </tr>
            );
        });
    }

    render( ) {
        const { onMoreClick, numbers } = this.props;

        return (
            <div>
                <table>
                    <tbody>
                        {this.renderTableRows( numbers )}
                    </tbody>
                </table>
                <button onClick={onMoreClick}><Icon style={styles.icon} name="Add"/>get more random data</button>
            </div>
        );
    }
}
