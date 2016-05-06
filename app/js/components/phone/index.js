import template from './template.html';

export default class Phone {

  constructor($routeParams, phoneRepository) {
    this._$routeParams = $routeParams;
    this._phoneRepository = phoneRepository;
    this.phone = {};
  }

  $onInit() {
    this._phoneRepository
      .getOne(this._$routeParams.phoneId)
      .then(phone => this.phone = phone);
  }

  static create() {
    return {
      controller: [
        '$routeParams',
        'phoneRepository',
        Phone
      ],
      template
    };
  }

}
