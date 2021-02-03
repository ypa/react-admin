export class OrderItem {
  id: number;
  productTitle: string;
  price: number;
  quantity: number;

  constructor(id = 0, productTitle = '', price = 0, quantity = 0) {
    this.id = id;
    this.productTitle = productTitle;
    this.price = price;
    this.quantity = quantity;
  }
}
