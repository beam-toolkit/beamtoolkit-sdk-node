import { describe, it, beforeEach, after } from 'node:test';
import { expect } from 'chai';
import Scrapeless from '@/index';

describe('Scrapeless', () => {
  let scrapeless: Scrapeless;
  let captchaRes: any;

  beforeEach(() => {
    scrapeless = new Scrapeless({ apiKey: '' });
  })

  after(() => {
    describe('Captcha Result', () => {
      it('captcha recaptcha result', async () => {
        const result = await scrapeless.getCaptchaResult(captchaRes.taskId);
        expect(result).to.be.an('object');
      });
    })
  });

  it('scraper shopee search', async () => {
    const res = await scrapeless.scraper({
      actor: "scraper.shopee",
      webhook: "",
      input: {
        type: "shopee.search",
        headers: {},
        url: "https://shopee.tw/api/v4/search/search_items?by=relevancy&keyword=hp%20ink&limit=50&newest=0&order=desc&page_type=search&scenario=page_global_search&version=2"
      }
    });

    expect(res).to.be.an('object');
  });

  it('unlocker akamai web', async () => {
    const res = await scrapeless.unlocker({
      actor: 'unlocker.akamaiweb',
      input: {
        type: 'cookie',
        proxy: 'xxx',
        url: 'https://www.iberia.com/',
        userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36'
      }
    });

    expect(res).to.be.an('object');
  });

  it('captcha recaptcha', async () => {
    captchaRes = await scrapeless.captcha({
      actor: 'captcha.recaptcha',
      webhook: '',
      input: {
        version: 'v2',
        pageURL: 'https://venue.cityline.com',
        siteKey: '6Le_J04UAAAAAIAfpxnuKMbLjH7ISXlMUzlIYwVw'
      }
    });

    expect(captchaRes).to.be.an('object');
  })
});
