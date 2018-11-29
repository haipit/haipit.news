import axios from 'axios';
import store from './store/store'

export default function setup() {
  axios.interceptors.request.use(request => {
    const APP_ID    = store.state.APP_ID;
    const APP_KEY   = store.state.APP_ID;
    const API_TOKEN = store.state.APP_ID;
    const API       = store.state.API;

    // Application token for login/registering
    if (APP_ID && APP_KEY) {
      request.headers.APP_ID  = APP_ID;
      request.headers.APP_KEY = APP_KEY;
    }

    // User token for full CRUD
    if (API_TOKEN) {
      request.headers.API_TOKEN = API_TOKEN;
    }

    request.url = `${API}${request.url}`;
    return request;
  }, function (err) {
    return Promise.reject(err);
  });
}
