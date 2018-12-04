import http from '../http'

export default class JokesResource {

    get(){
        return http.get('http://api.icndb.com/jokes/random');
    }  
  
  }