<template>
  
    <ion-page class="ion-page" main>     
        <toolbar title="Câmera"/>            
        <ion-content class="ion-content" padding>
            
        <ion-card>    
           <ion-button @click="foto">Tirar Foto</ion-button>
           <input type="file">
           <img v-if='imagePath !== ""' v-bind:src="imagePath">
        </ion-card> 


        </ion-content>
    </ion-page>

</template>
 
<script>
export default {
  name: "Camera",
  data() {
    return {
      imagePath: ""
    };
  },
  methods: {
     foto() {
        if (navigator.camera) {
          navigator.camera.getPicture((imageData)=>{
              this.imagePath="data:image/jpeg;base64,"+imageData;
          }, (error)=>{
              console.log(error);
          }, 
          {
              destinationType: Camera.DestinationType.DATA_URL,
          });
        }else{         
         console.log("Câmera não disponível");
        }
      },
     
  }
};
</script>
 
<style scoped>
</style>