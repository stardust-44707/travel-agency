import React from 'react';
import PropTypes from 'prop-types';
import styles from './OrderOption.scss';

const OrderOptionText = ({setOptionValue}) => (
  <div className={styles.text}>
    <input className={styles.input}
      type="text"
      placeholder="text"
      onChange={event => setOptionValue(event.currentTarget.value)}
    />
  </div>
);

OrderOptionText.propTypes = {
  setOptionValue: PropTypes.func,
};

export default OrderOptionText;
