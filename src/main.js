import Vue from 'vue'
import App from './App.vue'
import {Select, Dialog, Checkbox, Button, Slider, Option} from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(Select);
Vue.use(Dialog);
Vue.use(Checkbox);
Vue.use(Button);
Vue.use(Slider);
Vue.use(Option);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
