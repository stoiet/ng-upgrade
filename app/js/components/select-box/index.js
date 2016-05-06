import template from './template.html';

export default class SelectBox {

  constructor() {
    this.isOpen = false;
    this.selectedOption = null;
  }

  handleOpenStateChange() {
    this.isOpen = !this.isOpen;
  }

  handleOptionSelect(option) {
    this.selectedOption = option;
    this.optionChange({ event: option });
    this.isOpen = false;
  }

  static create() {
    return {
      bindings: {
        options: '<',
        optionChange: '&',
        placeholder: '@'
      },
      controller: [SelectBox],
      template
    };
  }

}
