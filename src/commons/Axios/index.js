import axios from 'axios'


class AxiosService{
    constructor() {
        axios.defaults.headers.common['Accept'] = "application/json";
        axios.defaults.headers.common['Content-Type'] = "application/json";
        axios.defaults.headers.common['Authorization'] = "JMRvbq7lNramTXGzCj1ioPut5EB6fdK0";
        const instance = axios.create();
        instance.interceptors.response.use(this.handleSuccess, this.handleError);
        this.instance = instance;
      }
    
      handleSuccess(response) {
        return response;
      }
    
      handleError(error) {
        return Promise.reject(error);
      }
    
      get(url) {
        return this.instance.get(url);
      }
    
      post(url, body) {
        return this.instance.post(url, body);
      }
    
      put(url, body) {
        return this.instance.put(url, body);
      }
    
      delete(url) {
        return this.instance.delete(url);
      }
}

export default new AxiosService();