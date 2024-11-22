import axios from 'axios';

const url = "https://api.ipapi.is/";
axios.get(url, {
  proxy: {
    protocol: 'http',
    host: 'gw-us.scrapeless.io',
    port: 8789,
    auth: {
      username: '5DB185CB7843-proxy-country_US-r_10m-s_8VEfHAWwXV',
      password: 'qtNm2G1L'
    }
  }
}).then((res) => {
  console.log(res.data);
}).catch((err) => {
  console.log('[err]:', err);
});