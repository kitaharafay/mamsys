import Vue from 'vue'
import {
  Button,
  Layout,
  Menu,
  Icon,
  Card,
  Tree
} from 'ant-design-vue'
import App from './App.vue'
import router from './routes'
import store from './store/index'

Vue.config.productionTip = false

Vue.component(Button.name, Button)
Vue.component(Layout.name, Layout)
Vue.component(Layout.Sider.name, Layout.Sider)
Vue.component(Layout.Content.name, Layout.Content)
Vue.component(Layout.Header.name, Layout.Header)
Vue.component(Menu.name, Menu)
Vue.component(Menu.Item.name, Menu.Item)
Vue.component(Icon.name, Icon)
Vue.component(Card.name, Card)
Vue.component(Tree.name, Tree)


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
