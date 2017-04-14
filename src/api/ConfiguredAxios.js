import axios from 'axios';

axios.defaults.baseURL = 'https://domain.tld/';

const ConfiguredAxios = axios;
export default ConfiguredAxios;
