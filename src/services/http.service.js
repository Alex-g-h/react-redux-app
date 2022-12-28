import axios from "axios";

axios.defaults.baseURL = "https://jsonplaceholder.typicode.com1/";

const httpService = {
  get: axios.get,
};

export default httpService;
