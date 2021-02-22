import React from 'react';
import PropTypes from 'prop-types';

const Bloc = ({ time, type }) => {
    return (
        <>
            <strong>{time}</strong>
            <em>{type}</em>
        </>
    );
};

export default Bloc;

Bloc.propTypes = {
    time: PropTypes.number,
    type: PropTypes.string.isRequired,
}
