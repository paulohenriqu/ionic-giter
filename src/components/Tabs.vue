<template>
  
    <ion-page class="ion-page" main>  
       <toolbar title="Tabs"/>
       <ion-content class="ion-content" padding>  
           
            <ion-tabs>
                <ion-tab href="tab1" label="tab1" icon="calendar" name="tab1">
                    <!--<ion-vue-router name="tab1"/>-->
                    <h2>Tab 1</h2>
                </ion-tab>
                <ion-tab href="tab2" label="tab2" icon="contacts" name="tab2">
                    <!--<ion-vue-router name="tab2"/>-->   
                    <h2>Tab 2</h2>                 
                </ion-tab>
            </ion-tabs>
        </ion-content>
       
    </ion-page>

</template>
 
<script>
export default {
  name: "Tabs",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }, 
  methods:{
      change(){
          console.log("Change");
      }
  }
  
};
</script>
 
<style scoped>
</style>