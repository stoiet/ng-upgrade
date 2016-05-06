import template from './template.html';

export default class Copyright {

  constructor(ACTUAL_YEAR) {
    this.actualYear = ACTUAL_YEAR;
  }

  static create() {
    return {
      controller: ['ACTUAL_YEAR', Copyright],
      template
    };
  }

}
