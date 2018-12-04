<template>
  
    <ion-page class="ion-page" main>     
        <toolbar title="File Transfer"/>            
        <ion-content class="ion-content" padding>
            
        <ion-card>    
           <ion-button @click="foto">Tirar Foto</ion-button>
           <ion-button @click="upload">Upload</ion-button>
           <ion-button @click="download">Download</ion-button>
           <input type="file">
           <img v-if='imagePath !== ""' v-bind:src="imagePath">
        </ion-card> 


        </ion-content>
    </ion-page>

</template>
 
<script>
export default {
  name: "FileTransfer",
  data() {
    return {
      imagePath: "",
      imageURI: ""
    };
  },
  methods: {
    foto() {
      if (navigator.camera) {
        navigator.camera.getPicture(
          imageData => {
            this.imagePath = window.Ionic.WebView.convertFileSrc(imageData);
            this.imageURI = imageData;
          },
          error => {
            console.log(error);
          },
          {
            destinationType: Camera.DestinationType.FILE_URI
          }
        );
      } else {
        console.log("Câmera não disponível");
      }
    },
    upload() {
      var options = new FileUploadOptions();
      options.fileKey = "file";
      options.fileName = this.imageURI.substr(
        this.imageURI.lastIndexOf("/") + 1
      );
      options.mimeType = "image/jpeg";
      options.headers = {};

      var params = {};
      params.nome = "testeNome";
      params.container = "br1";
      options.params = params;

      var ft = new FileTransfer();

      ft.upload(
        this.imageURI,
        encodeURI("http://192.168.101.166:8080/api/upload"),
        data => {
          console.log(data + " Upload efetuado com sucesso");
        },
        err => {
          console.log(err);
        },
        options
      );
    },
    download() {

    var fileTransfer = new FileTransfer();

      let directory = cordova.file.dataDirectory;
      console.log(directory);

      // Arquivo para for download
      var uri =
        "http://cdn.collider.com/wp-content/uploads/2018/04/avengers-infinity-war-imax-social.jpeg";

      // Nome do arquivo
      var filename = uri.split("/").pop();

      // Local para salvar
      var targetPath = directory + filename;

      fileTransfer.download(
        uri,
        targetPath,
        entry=> {
          console.log("download complete: " + entry.toURL());

          this.imagePath = window.Ionic.WebView.convertFileSrc( entry.toURL());
        },
        error=> {
          console.log("download error source " + error.source);
          console.log("download error target " + error.target);
          console.log("download error code" + error.code);
        }
      );
    }
  }
};
</script>
 
<style scoped>
</style>