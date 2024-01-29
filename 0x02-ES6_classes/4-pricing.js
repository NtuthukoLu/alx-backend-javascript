export default class Pricing {
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  // getter and setter
  get amount() {
    return (this._amount);
  }

  set amount(value) {
    this._amount = value;
    return value;
  }

  get currency() {
    return (this._currency);
  }

  set currency(value) {
    this._currency = value;
    return (value);
  }

  displayFullPrice() {
    return (`${this.amount} ${this._currency.name} (${this.currency.code})`);
  }

  static convertPrice(amount, converionRate) {
    return (amount * converionRate);
  }
}
