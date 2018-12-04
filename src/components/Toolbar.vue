<template>

    <ion-header>
        <ion-toolbar>
            <ion-buttons slot="start">
                <ion-back-button/>
            </ion-buttons>
            <ion-title>{{ title }}</ion-title>
        </ion-toolbar>
    </ion-header>

</template>

<script>
export default {
  name: "Toolbar",
  props: { title: String}, 
};
</script>