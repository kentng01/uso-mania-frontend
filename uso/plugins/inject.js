import Vue from 'vue';

import { Howl, Howler } from 'howler';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUserSecret } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// import createjs from 'createjs/builds/createjs-2015.11.26.min.js'; // https://stackoverflow.com/questions/47540846/dependency-not-found-even-defined-in-package-json-and-node-modules

Vue.config.productionTip = false;

library.add(faUserSecret);

Vue.component('FontAwesomeIcon', FontAwesomeIcon);

Vue.use(Howl);
Vue.use(Howler);
