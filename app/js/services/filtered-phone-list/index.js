
export default class FilteredPhoneList {

  constructor($filter, phoneRepository) {
    this._$filter = $filter;
    this._phoneRepository = phoneRepository;
    this._searchText = '';
    this._carrier = '';
    this._allPhones = [];
    this._filteredPhones = [];
  }

  get phones() {
    return this._filteredPhones;
  }

  fetch() {
    this._allPhones = this._phoneRepository
      .getAll()
      .then(phones => {
        this._allPhones = phones;
        this._filterPhones();
      });
  }

  setSearchText(searchText) {
    this._searchText = searchText;
    this._filterPhones();
  }

  setCarrier(carrier) {
    this._carrier = carrier;
    this._filterPhones();
  }

  _filterPhones() {
    this._filteredPhones = this._$filter('filter')(this._allPhones, {
      name: this._searchText,
      carrier: this._carrier
    });
  }

  static create() {
    return [
      '$filter',
      'phoneRepository',
      FilteredPhoneList
    ];
  }

}
