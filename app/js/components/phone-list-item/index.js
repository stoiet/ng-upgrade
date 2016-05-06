import template from './template.html';

export default class PhoneListItem {

  static create() {
    return {
      bindings: {
        phone: '<'
      },
      controller: PhoneListItem,
      template
    };
  }

}
