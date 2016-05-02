'use strict';

const Rx = require('rxjs/Rx');


class FilteredPhoneList {

  constructor($filter, phoneRepository) {
    this._filter = $filter('filter');
    this._phoneRepository = phoneRepository;

    this._phones = new Rx.ReplaySubject(1);
    this._searchText = new Rx.BehaviorSubject('');
    this._selectedCarrier = new Rx.BehaviorSubject('');
  }


  get phones$() {
    return Rx.Observable.combineLatest(this._phones, this._searchText, this._selectedCarrier)
      .map(([phones, searchText, selectedCarrier]) => this._filterPhones(phones, searchText, selectedCarrier));
  }


  get hasAny$() {
    return this.phones$.map((phones) => phones.length > 0);
  }
  
  
  load() {
    this._phoneRepository
      .getAll()
      .then((phones) => this._phones.next(phones));
  }


  setSelectedCarrier(carrier) {
    this._selectedCarrier.next(carrier);
  }


  setSearchText(value) {
    this._searchText.next(value);
  }


  _filterPhones(phones, searchText, selectedCarrier) {
    return this._filter(phones, { name: searchText, carrier: selectedCarrier });
  }


  static create() {
    return ['$filter', 'phoneRepository', FilteredPhoneList];
  }

}


module.exports = FilteredPhoneList;