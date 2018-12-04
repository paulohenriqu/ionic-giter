import axios from 'axios';


const http = axios.create ();

http.interceptors.request.use (
    function (config) {
      console.log("Inicia requisição");  
      console.log(config);
      return config;
    },
    function (error) {
      return Promise.reject (error);
    }
  );

  http.interceptors.response.use(function (response) {  
    console.log("Finaliza requisição");    
    console.log(response);  
    return response;
  }, function (error) {   
    return Promise.reject(error);
  });
  
  export default http;