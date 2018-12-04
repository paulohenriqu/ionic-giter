<template>
  
    <ion-page class="ion-page" main>     
        <toolbar title="GPS"/>            
        <ion-content class="ion-content" padding>
            
        <ion-card>    
            <ion-card-header>
                <ion-card-title>Sua Posição</ion-card-title>
            </ion-card-header>
            <ion-card-content>
                <p>Latitude: {{geolocation.latitude}} </p>
                <p>Longitude: {{geolocation.longitude}}</p>
                <ion-list>
                <ion-item v-for="(posicao,index) in rastreamento" :key="index">
                    <p>Latitude: {{posicao.latitude}} </p>
                    <p>Longitude: {{posicao.longitude}}</p>
                </ion-item>   
                 </ion-list>   
            </ion-card-content>
            <ion-card-footer>
                <ion-button @click='localizar'>Localizar</ion-button>
                <ion-button @click='rastrear'>Rastrear</ion-button>
            </ion-card-footer>
        </ion-card> 


        </ion-content>
    </ion-page>

</template>
 
<script>
export default {
  name: "Gps",
  data() {
    return {
      geolocation: {},
      rastreamento:[]
    };
  },
  methods: {
    localizar() {
      console.log("GPS plugin");
      navigator.geolocation.getCurrentPosition(({coords}) => {
        this.geolocation = coords;          
      });
    }, 
    rastrear(){
        console.log("Rastreia");
        let watchId = navigator.geolocation.watchPosition(({ coords })=>{
             this.rastreamento.push(coords); 
        });
    }
  }
};
</script>
 
<style scoped>
</style>