// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import store from './store/index.js'
Vue.config.productionTip = false
import ELEMENT from 'element-ui'
import VCharts from 'v-charts'

Vue.use(ELEMENT)
Vue.use(VCharts)
axios.defaults.baseURL = (process.env.NODE_ENV === 'development') ? '' : '';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.headers['X-Requested-With'] = 'XMLHttpRequest';
let serializer = (obj = {}) => {
	var param = [];
	for (let key in obj) {
		param.push(key + '=' + obj[key]);
	}
	return param.join('&');
}
// 添加请求拦截器
axios.interceptors.request.use((config) => {
	config.data = serializer(config.data);
	return config;
}, function (error) {
	return Promise.reject(error);
});
// 添加响应拦截器
axios.interceptors.response.use(function (response) {
	//对响应数据做点什么
    if (response.status === 200) {
        return response.data;
    }
}, function (error) {
	return Promise.reject(error);
});
Vue.prototype.$axios = Vue.$axios = axios;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
