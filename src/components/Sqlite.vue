<template>
  
    <ion-page class="ion-page" main>     
        <toolbar title="Sqlite"/>            
        <ion-content class="ion-content" padding>
            
        <ion-card>    
           <ion-button @click="open">Criar/Abrir Banco</ion-button>
           <ion-button @click="create">Criar Tabela</ion-button>
           <ion-button @click="insert">Inserir</ion-button>
           <ion-button @click="select">Consultar</ion-button>
          
        </ion-card> 


        </ion-content>
    </ion-page>

</template>
 
<script>
export default {
  name: "Sqlite",
  data() {
    return {
      db: {}
    };
  },
  methods: {
    open() {
      this.db = window.sqlitePlugin.openDatabase({
        name: "vue.db",
        location: "default"
      });
    },
    create() {
      this.db.transaction(function(transaction) {
        transaction.executeSql(
          "CREATE TABLE IF NOT EXISTS user (id integer primary key, nome text)",
          [],
          function(tx, result) {
            console.log("Tabela criada com sucesso.");
          },
          function(error) {
            console.log("Ocorreu um erro ao criar a tabela");
          }
        );
      });
    },
    insert() {
      var nome = "Paulo";

      this.db.transaction(function(transaction) {
        var executeQuery = "INSERT INTO user (nome) VALUES (?)";
        transaction.executeSql(
          executeQuery,
          [nome],
          function(tx, result) {
            console.log("Registro inserido");
          },
          function(error) {
            console.log("Ocorreu um erro ao inserir");
          }
        );
      });
    },
    select() {
      this.db.transaction(function(transaction) {
        transaction.executeSql(
          "SELECT * FROM user",
          [],
          function(tx, results) {
            var len = results.rows.length;
            console.log("Número de registros: " + len);

            for (var i = 0; i < len; i++) {
              console.log(results.rows.item(i));
            }
          },
          null
        );
      });
    }
  }
};
</script>
 
<style scoped>
</style>