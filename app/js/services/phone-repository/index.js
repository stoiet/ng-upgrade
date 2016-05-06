
export default class PhoneRepository {

  constructor($http) {
    this._$http = $http;
  }

  getAll() {
    return this._$http.get('/api/phones.json')
      .then(function (response) {
        return response.data;
      });
  }

  getOne(phoneId) {
    return this._$http.get(`/api/${phoneId}.json`)
      .then(function (response) {
        return response.data;
      });
  }

  static create() {
    return ['$http', PhoneRepository];
  }

}
