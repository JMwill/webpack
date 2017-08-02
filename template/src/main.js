{{#if_eq build "standalone"}}
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
{{/if_eq}}

import store from '@/store';
import xhr from '@/services';

import Vue from 'vue'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import App from './App'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
{{#router}}
import router from './router'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
{{/router}}

Vue.config.productionTip = false{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
Vue.prototype.$http = xhr;

/* eslint-disable no-new */
new Vue({
    el: '#app',
    store,
    {{#router}}
    router,
    {{/router}}
    {{#if_eq build "runtime"}}
    render: h => h(App){{#if_eq lintConfig "airbnb"}},{{/if_eq}}
    {{/if_eq}}
    {{#if_eq build "standalone"}}
    template: '<App/>',
    components: { App }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
    {{/if_eq}}
}){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
