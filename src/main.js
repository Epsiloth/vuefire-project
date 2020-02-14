import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import { firestorePlugin } from 'vuefire'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import firebase from 'firebase'

import Login from './components/login.vue'
import Privado from './components/privado.vue'
import Register from './components/register.vue'

import './registerServiceWorker'

Vue.use(VueRouter)
Vue.use(firestorePlugin) 
// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.config.productionTip = false

const routes = [
  { path: '/', component: Login },
  { path: '/login', component: Login },
  { path: '/register', component: Register},
  { path: '/privado', component: Privado, meta: {
  	requiresAuth: true
  } }
]

const router = new VueRouter({
	routes
})

router.beforeEach((to, from, next) => {
	firebase.auth().onAuthStateChanged((user) => {
		const currentUser = user;
		const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

		if(requiresAuth && !currentUser) next('login');
		else next()
	});
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
