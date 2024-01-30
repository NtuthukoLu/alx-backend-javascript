export default class Airport {
  constructor(name, code) {
    this._name = name;
    this._code = code;
  }

  log(){
    return `Airport [${this._code}] {_name: '${this._name}', _code: '${this._code}'}`;
  }
  toString() {
    return `[Object ${this._code}]`;
  }
}
