<template>
  
    <ion-page class="ion-page" main>  
       <toolbar title="Page2"/>          
        <ion-content class="ion-content" padding>
            <h2>Page 2</h2>   

            <ion-list>
  <ion-item>
    <ion-avatar slot="start">
      
    </ion-avatar>
    <ion-label>
      <h2>Finn</h2>
      <h3>I'm a big deal</h3>
      <p>Listen, I've had a pretty messed up day...</p>
    </ion-label>
  </ion-item>
  <ion-item>
    <ion-avatar slot="start">
     
    </ion-avatar>
    <ion-label>
      <h2>Finn</h2>
      <h3>I'm a big deal</h3>
      <p>Listen, I've had a pretty messed up day...</p>
    </ion-label>
  </ion-item>
</ion-list>

        </ion-content>
    </ion-page>

</template>
 
<script>
export default {
  name: "Page2",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }, 
  
};
</script>
 
<style scoped>
</style>