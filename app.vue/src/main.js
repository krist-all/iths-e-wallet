import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router";
import store from './store';
import router from './router'


Vue.config.productionTip = false

Vue.use(VueRouter);


new Vue({
  store,
  router,
  data(){
    return {
      activeIndex: 0
      , cardData : [
        {  id: 99
        , holder: 'KRISTJAN ALLIKMAA'
        , vendor: 'BITCOIN INC'
        , number: '1234123412341234'
        , validMonth: '9'
       , validYear: '24'
      },
      {
        id: 98
        , holder: 'KRISTJAN ALLIKMAA'
        , vendor: 'NINJA BANK'
        , number: '5555666677779999'
        , validMonth: '7'
       , validYear: '23'
      },
      {  id: 97
      , holder: 'KRISTJAN ALLIKMAA'
      , vendor: 'EVIL CORP'
      , number: '6666123466661234'
      , validMonth: '6'
     , validYear: '27'
    }]
    }
  },
  render: h => h(App)
}).$mount('#app')
