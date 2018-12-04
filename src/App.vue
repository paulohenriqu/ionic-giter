<template>
  <div>
  <ion-app> 
    <ion-menu side="start">
      <ion-header>
        <ion-toolbar>
          <ion-title>Menu</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content>
        <ion-list>
          <router-link to="/">
            <ion-menu-toggle>
              <ion-item>
                Home
              </ion-item>      
            </ion-menu-toggle>  
          </router-link>
          <router-link to="/page2">
            <ion-menu-toggle>
              <ion-item>
                Page2
              </ion-item>  
            </ion-menu-toggle>  
          </router-link>    
          <router-link to="/gps">
            <ion-menu-toggle>
              <ion-item>
                GPS
              </ion-item>  
            </ion-menu-toggle>  
          </router-link>    
          <router-link to="/tabs">
            <ion-menu-toggle>
              <ion-item>
                Tabs
              </ion-item>  
            </ion-menu-toggle>  
          </router-link> 
           <router-link to="/camera">
            <ion-menu-toggle>
              <ion-item>
                Câmera
              </ion-item>  
            </ion-menu-toggle>  
          </router-link>    
          <router-link to="/file">
            <ion-menu-toggle>
              <ion-item>
                File
              </ion-item>  
            </ion-menu-toggle>  
          </router-link>    
          <router-link to="/sqlite">
            <ion-menu-toggle>
              <ion-item>
                SQLite
              </ion-item>  
            </ion-menu-toggle>  
          </router-link>    
        </ion-list> 
      </ion-content>  
    </ion-menu>
    <ion-vue-router/>
  </ion-app>
  <ion-menu-controller></ion-menu-controller>
  </div>
</template>

<style> 
</style>

<script>
export default {
  name: 'App',
 
}
</script>


