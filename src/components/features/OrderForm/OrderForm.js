import React from 'react';
import {Row, Col} from 'react-flexbox-grid';
import PropTypes from 'prop-types';
import OrderSummary from '../OrderSummary/OrderSummary';


const OrderForm = props => (
  <Row>
    <Col xs={12}>
      <OrderSummary tripCost={props.tripCost} options={props.options}/>
    </Col>
  </Row>
);

OrderForm.propTypes = {
  options: PropTypes.node,
  tripCost: PropTypes.string,
};

export default OrderForm;
