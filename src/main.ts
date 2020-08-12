import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {Icon, Button, Container, Header, Aside, Main, Footer ,Link, Radio, Checkbox, Select, 
  TimePicker, Upload, Cascader, Form, Table, Tag, Pagination, Message, MessageBox, Tooltip, Tabs, Notification} from 'element-ui'
Vue.use(Icon)
Vue.use(Button)
Vue.use(Container);
Vue.use(Header);
Vue.use(Aside);
Vue.use(Main);
Vue.use(Footer);
Vue.use(Link);
Vue.use(Radio)
Vue.use(Checkbox)
Vue.use(Select)
Vue.use(TimePicker)
Vue.use(Upload)
Vue.use(Cascader)
Vue.use(Form)
Vue.use(Table)
Vue.use(Tag)
Vue.use(Pagination)
Vue.use(Tooltip)
Vue.use(Tabs)
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$prompt = MessageBox.prompt;
Vue.prototype.$notify = Notification;
Vue.prototype.$message = Message;

Vue.config.productionTip = false

require('./assets/scss/element-variables.scss')
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
