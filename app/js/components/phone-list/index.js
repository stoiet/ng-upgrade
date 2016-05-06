import template from './template.html';

export default class PhoneList {

  constructor(filteredPhoneList) {
    this._filteredPhoneList = filteredPhoneList;
  }

  get phones() {
    return this._filteredPhoneList.phones;
  }

  get hasPhones() {
    return this.phones.length > 0;
  }

  $onInit() {
    this._filteredPhoneList.fetch();
  }

  handleSearchTextChange(searchText) {
    this._filteredPhoneList.setSearchText(searchText);
  }

  handleCarrierChange(carrier) {
    this._filteredPhoneList.setCarrier(carrier);
  }

  static create() {
    return {
      controller: ['filteredPhoneList', PhoneList],
      template
    };
  }

}
