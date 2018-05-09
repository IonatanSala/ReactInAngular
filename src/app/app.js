import angular from 'angular';
import { react2angular } from 'react2angular'
import ReactButton from './reactButton/Reactbutton';

import '../style/app.css';
import { CounterSerivce } from './counter.service.js';

let app = () => {
  return {
    template: require('./app.html'),
    controller: 'AppCtrl',
    controllerAs: 'app'
  }
};

class AppCtrl {
  constructor() {
    this.url = 'https://github.com/preboot/angular-webpack';
  }
}

const MODULE_NAME = 'app';

export const appModule = angular.module(MODULE_NAME, []);

appModule
  .directive('app', app)
  .controller('AppCtrl', AppCtrl)
  .component('reactButton', react2angular(ReactButton, ['buttonText'], ['CounterSerivce']));

CounterSerivce(appModule)

export default MODULE_NAME;
