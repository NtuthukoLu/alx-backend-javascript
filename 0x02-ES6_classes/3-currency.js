export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  // Get
  get code() {
    return (this._code);
  }

  get name() {
    return (this._name);
  }

  // setter

  set code(value) {
    this._code = value;
    return (value);
  }

  set name(value) {
    this._name = value;
    return (value);
  }

  displayFullCurrency() {
    return (`${this.name} (${this.code})`);
  }
}
