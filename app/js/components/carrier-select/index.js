import template from './template.html';

export default class CarrierSelect {

  constructor(carrierRepository) {
    this._carrierRepository = carrierRepository;
    this.carriers = [];
  }

  $onInit() {
    this._carrierRepository
      .getAll()
      .then(carriers => this.carriers = carriers);
  }

  handleCarrierChange(carrier) {
    this.onChange({ event: carrier });
  }

  static create() {
    return {
      bindings: {
        onChange: '&'
      },
      controller: ['carrierRepository', CarrierSelect],
      template
    };
  }

}
