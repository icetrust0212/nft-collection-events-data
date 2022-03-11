import axios from "axios";
import config from "./config";
axios.defaults.headers.common['X-API-KEY'] = config.openseaAPIKey;

export default axios;