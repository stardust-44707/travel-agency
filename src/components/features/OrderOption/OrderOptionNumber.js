import React from 'react';
import PropTypes from 'prop-types';
import styles from './OrderOption.scss';

const OrderOptionNumber = ({ currentValue, limits, setOptionValue }) => (
  <div className={styles.number}>
    <input className={styles.input}
      type="number"
      value={currentValue}
      min={limits.min}
      max={limits.max}
      onChange={event => setOptionValue(event.currentTarget.value)}
    />
  </div>
);

OrderOptionNumber.propTypes = {
  currentValue: PropTypes.array,
  limits: PropTypes.object,
  setOptionValue: PropTypes.func,
};


export default OrderOptionNumber;
