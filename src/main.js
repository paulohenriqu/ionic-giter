// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";

import Toolbar from "./components/Toolbar";

import { Ionic, IonicVueRouter, IonicAPI } from "@modus/ionic-vue";

Ionic.init();
Vue.use(IonicVueRouter);
Vue.use(IonicAPI);

Vue.config.productionTip = false;

Vue.component("toolbar", Toolbar);

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App),
  mounted() {
    document.onreadystatechange = () => {
      if (document.readyState == "complete") {

        
        FCMPlugin.onNotification(function(data) {
          if (data.wasTapped) {
            //Notificação foi recebida no desktop e clicada pelo usuário.
            console.log("backgroud", data);
          } else {
            //Notificação foi recebida quando o aplicativo estava aberto.
            console.log("foreground", data);
          }
        });


        FCMPlugin.onTokenRefresh(function(token){
          console.log( token );
      });

      FCMPlugin.subscribeToTopic('series');
      

     
      //FCMPlugin.unsubscribeFromTopic('series');
      

      /*

     var notificationOpenedCallback = function(jsonData) {
      console.log('notificationOpenedCallback: ' + JSON.stringify(jsonData));
    };
  
    window.plugins.OneSignal
      .startInit("0b668b27-e96e-4e20-81f6-078c606fb240")
      .handleNotificationOpened(notificationOpenedCallback)
      .endInit();
*/
      
      }
    };
  }
}).$mount("#app");
