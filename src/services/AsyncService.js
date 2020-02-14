import axios from "axios";
// constants
import { BASE_HTTP_CONFIG } from "constants";

/**
 * @class
 * @classdesc Клас реализующий обертку для запросов
 */
class AsyncService {
  constructor() {
    this.axios = axios.create(BASE_HTTP_CONFIG);
    this.get = this.axios.get;
    this.post = this.axios.post;
  }
}

export default new AsyncService(); // export with singletone
