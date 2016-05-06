
export default class ShortDescription {

  transform(input, length) {
    let result = input;
    length = this._getLength(length);

    if (this._isInputOverflow(input, length)) {
      result = this._getShortedInput(input);
    }

    return result;
  }

  _isInputOverflow(input, length) {
    return input && input.length > length;
  }

  _getLength(length) {
    return length || 100;
  }

  _getShortedInput(input) {
    return input.substring(0, length) + '...';
  }

  static create() {
    const shortDescription = new ShortDescription();
    return [() => shortDescription.transform.bind(shortDescription)];
  }

}
