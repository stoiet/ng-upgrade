
export default class CarrierRepository {

  constructor($http) {
    this._$http = $http;
  }

  getAll() {
    return this._$http.get('/api/carriers.json')
      .then(function (response) {
        return response.data;
      });
  }

  static create() {
    return ['$http', CarrierRepository];
  }

}
