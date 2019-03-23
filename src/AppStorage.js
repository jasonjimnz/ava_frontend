import Api from "./views/Api";

class AppStorage{
  constructor(initialData){
    if (initialData){
      this.data = initialData;
    } else {
      this.data = {
        botQueries: [],
        token: null
      }
    }
    this.api = new Api();
  }
}

export default AppStorage;