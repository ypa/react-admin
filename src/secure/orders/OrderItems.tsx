import React, { Component } from 'react';
import Wrapper from '../Wrapper';
import axios from 'axios';
import { Order } from '../../classes/order';
import { OrderItem } from '../../classes/orderItem';

class OrderItems extends Component<{ match: any }> {
  state = {
    orderItems: [],
  };
  id = 0;

  componentDidMount = async () => {
    this.id = this.props.match.params.id;

    const response = await axios.get(`/orders/${this.id}`);

    const orderItems: OrderItems = response.data.data.order_items;

    this.setState({
      orderItems: orderItems,
    });
  };

  render() {
    return (
      <Wrapper>
        <div className="table-responsive">
          <table className="table table-striped table-sm">
            <thead>
              <tr>
                <th>#</th>
                <th>Product Title</th>
                <th>Price</th>
                <th>Quantity</th>
              </tr>
            </thead>
            <tbody>
              {this.state.orderItems.map((orderItem: OrderItem) => {
                return (
                  <tr key={orderItem.id}>
                    <td>{orderItem.id}</td>
                    <td>{orderItem.productTitle}</td>
                    <td>{orderItem.price}</td>
                    <td>{orderItem.quantity}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </Wrapper>
    );
  }
}

export default OrderItems;
