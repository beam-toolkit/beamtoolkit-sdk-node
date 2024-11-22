import puppeteer from 'puppeteer-core';

const connectionURL = 'wss://api.scrapeless.com/browser?token=your-api-key&session_ttl=180&proxy_country=ANY';

(async () => {
  const browser = await puppeteer.connect({browserWSEndpoint: connectionURL});
  const page = await browser.newPage();
  await page.goto('https://www.scrapeless.com');
  console.log(await page.title());
  await browser.close();
})();
