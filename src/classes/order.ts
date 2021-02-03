import { OrderItem } from "./orderItem";

export class Order {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  total: number;
  orderItems: OrderItem[];

  constructor(id = 0, firstName = '', lastName = '', email = '', total = 0, orderItems = []) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.total = total;
    this.orderItems = orderItems;
  }
}
