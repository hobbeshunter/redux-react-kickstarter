import * as randomNumbersActions from '../actions/randomNumbers';

import React, { Component } from 'react';

import NumberTable from '../components/NumberTable';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getLastNumberSet } from '../reducers/numbers';
import { withRouter } from 'react-router';

// This is a wrapper container. First we implement lifecycle methods (componentDidMount, ...) and than we pass it to redux connect.
class NewestNumbers extends Component {
    static propTypes = {
        fetchRandomNumbers: PropTypes.func.isRequired
    }

    componentDidMount( ) {
        randomNumbersActions.fetchRandomNumbers( );
    }

    render( ) {
        const {
            fetchRandomNumbers,
            ...rest
        } = this.props;
        return <NumberTable onMoreClick={fetchRandomNumbers} {...rest}/>;
    }
}

const mapStateToProps = ( state ) => {
    return {numbers: getLastNumberSet( state )};
};

// eslint-disable-next-line no-class-assign
NewestNumbers = withRouter( connect( mapStateToProps, randomNumbersActions )( NewestNumbers )); // When passing the actions directly through, redux automatically wraps them with dispatch

export default NewestNumbers;
