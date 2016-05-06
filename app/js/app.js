'use strict';

import { PhoneRepository, CarrierRepository, FilteredPhoneList } from './services';
import { Copyright, PhoneListItem,  SearchBox, SelectBox, CarrierSelect, PhoneList, Phone } from './components';
import { ShortDescription } from './filters';

angular
  .module('phoneApp', [
    'ngRoute'
  ])

  .service('phoneRepository', PhoneRepository.create())
  .service('carrierRepository', CarrierRepository.create())
  .service('filteredPhoneList', FilteredPhoneList.create())

  .component('copyright', Copyright.create())
  .component('phoneListItem', PhoneListItem.create())
  .component('searchBox', SearchBox.create())
  .component('selectBox', SelectBox.create())
  .component('carrierSelect', CarrierSelect.create())
  .component('phoneList', PhoneList.create())
  .component('phone', Phone.create())

  .filter('shortDescription', ShortDescription.create())

  .constant('ACTUAL_YEAR', 2016)

  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/', { template: '<phone-list></phone-list>' })
      .when('/phone/:phoneId', { template: '<phone></phone>' })
      .otherwise({ redirectTo: '/' });
  }]);
