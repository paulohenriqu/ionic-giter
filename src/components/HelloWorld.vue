<template>
  
<ion-page class="ion-page" main>   
  <ion-header>
        <ion-toolbar>
            <ion-buttons slot="start">
                <ion-menu-button/>
            </ion-buttons>
            <ion-title>Home</ion-title>
        </ion-toolbar>
    </ion-header>              
  <ion-content class="ion-content" padding>
    <ion-button @click="alert">Trigger Alert</ion-button>  
    <ion-button @click="openAction">Action Sheet</ion-button>  
     <ion-button @click="load">Loader</ion-button>  
     <ion-button @click="modal">Modal</ion-button> 
     <ion-button @click="toast">Toast</ion-button>  
    <ion-button @click="openMenu">Menu</ion-button>
    <ion-button @click="request">Requisição</ion-button>  
    <router-link to="/page2">Go to page</router-link>                      
  </ion-content>
</ion-page>

</template>
 
<script>
import JokesResource from "@/services/requests";

export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  methods: {
    alert() {
      this.$ionic.alertController
        .create({
          header: "Olá!",
          message: "Este é um exemplo de aviso",
          buttons: ["Ok"]
        })
        .then(a => a.present());
    },
    openMenu() {
      document.querySelector("ion-menu-controller").open("start");
    },

    openAction() {
      this.$ionic.actionSheetController
        .create({
          header: "Opções",
          backdropDismiss: false,
          buttons: [
            {
              text: "Deletar",
              role: "destructive",
              icon: "trash",
              handler: () => {
                console.log("Deletar clicked");
              }
            },
            {
              text: "Compartilhar",
              icon: "share",
              handler: () => {
                console.log("Compartilhar clicked");
              }
            },
            {
              text: "Cancelar",
              icon: "close",
              role: "cancel",
              handler: () => {
                console.log("Cancelar clicked");
              }
            }
          ]
        })
        .then(a => a.present());
    },

    load() {
      let loader;
      this.$ionic.loadingController
        .create({
          message: "Carregando"
        })
        .then(l => {
          l.present();
          loader = l;
        });

      setTimeout(() => {
        loader.dismiss();
      }, 3000);
    },

    modal() {
      this.$ionic.modalController
        .create({
          component: {
            template: `<div>
                          <toolbar title='modal'>
                         <ion-content padding>
                              <h1>Conteúdo da modal</h1>
                          </ion-content>
                        </div>`
          }
        })
        .then(m => m.present());
    },
    toast() {
      this.$ionic.toastController
        .create({
          message: "Ação completada com sucesso",
          showCloseButton: true,
          position: "top",
          closeButtonText: "Done",
          duration: 3000
        })
        .then(t => t.present());
    },
    request() {
      console.log("Requisição");

      const resource = new JokesResource();
      resource.get().then(r => {
        console.log(r.data);
      });
    }
  }
};
</script>
 
<style scoped>
</style>