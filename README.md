# Beam Toolkit Node.js SDK

## Install
```shell
npm install scrapeless-sdk-node
```

## Usage

Start using the API with your [API KEY](https://app.scrapeless.com/dashboard/account?tab=apiKey)

For more examples, please refer to the `examples` directory

For more information, please refer to our [documentation](https://docs.scrapeless.com/)

### Scraping API

```js
import Scrapeless from 'scrapeless-sdk-node';

(async () => {
  const scrapeless = new Scrapeless({ apiKey: 'YOUR-API-KEY' });

  const response = await scrapeless.scraper({
    actor: "scraper.shopee",
    webhook: "",
    input: {
      type: "shopee.search",
      url: "https://shopee.tw/2312312.10228173.24803858474",
    }
  });
})();
```

### Web Unlocker

```js
import Scrapeless from 'scrapeless-sdk-node';

(async () => {
  const scrapeless = new Scrapeless({ apiKey: 'YOUR-API-KEY' });

  const result = await scrapeless.unlocker({
    actor: 'unlocker.webunlocker',
    input: {
      url: "https://www.scrapeless.com",
      proxy_country: "ANY",
      method: "GET",
      redirect: false,
    }
  });

  console.log(result)
})();
```

### Captcha Solver

#### Create captcha task
```js
import Scrapeless from 'scrapeless-sdk-node';

(async () => {
  const scrapeless = new Scrapeless({ apiKey: 'YOUR-API-KEY' });

  const result = await scrapeless.createCaptchaTask({
    actor: 'captcha.recaptcha',
    input: {
      version: "v2",
      pageURL: "https://www.google.com",
      siteKey: "6Le-wvkSAAAAAPBMRTvw0Q4Muexq9bi0DJwx_mJ-",
      pageAction: ""
    }
  })

  console.log(result)
})();
```

#### Get captcha task result
```js
import Scrapeless from 'scrapeless-sdk-node';

(async () => {
  const scrapeless = new Scrapeless({ apiKey: 'YOUR-API-KEY' });
  const result = await scrapeless.getCaptchaTaskResult('task-id');

  console.log(result)
})();
```

#### Solver captcha
```js
import Scrapeless from 'scrapeless-sdk-node';

(async () => {
  const scrapeless = new Scrapeless({ apiKey: 'YOUR-API-KEY' });
  const result = await scrapeless.solverCaptcha({
    actor: 'captcha.recaptcha',
    input: {
      version: "v2",
      pageURL: "https://www.google.com",
      siteKey: "6Le-wvkSAAAAAPBMRTvw0Q4Muexq9bi0DJwx_mJ-",
      pageAction: ""
    }
  }, 5000);

  console.log(result)
})();
```

### Scraping Browser

```js
import puppeteer from 'puppeteer-core';

const connectionURL = 'wss://api.scrapeless.com/browser?token=your-api-key&session_ttl=180&proxy_country=ANY';

(async () => {
  const browser = await puppeteer.connect({browserWSEndpoint: connectionURL});
  const page = await browser.newPage();
  await page.goto('https://www.scrapeless.com');
  console.log(await page.title());
  await browser.close();
})();
```

### Proxies

```js
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
```
