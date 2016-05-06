import template from './template.html';

export default class SearchBox {

  constructor() {
    this.value = '';
  }

  static create() {
    return {
      bindings: {
        onChange: '&'
      },
      controller: [SearchBox],
      template
    };
  }

}
