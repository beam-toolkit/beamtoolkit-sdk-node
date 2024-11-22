import {
  scraper,
  unlocker,
  captcha,
  getScraperResult,
  getCaptchaResult,
} from '@/api/api';

import type {
  ScrapelessConfig,
  ScraperConfig,
  UnlockerConfig,
  CaptchaConfig,
} from './types';

export default class Scrapeless {
  static instance: null | Scrapeless = null;
  private apiKey: string = '';

  constructor(config: ScrapelessConfig) {
    if (Scrapeless.instance) {
      return Scrapeless.instance;
    }

    if (!config.apiKey) {
      throw new Error('Scrapeless ERROR: apiKey is required');
    }

    this.apiKey = config.apiKey;
  }

  public async scraper(config: ScraperConfig) {
    return await scraper(this.apiKey, config);
  }

  public async getScraperResult(taskId: string) {
    return await getScraperResult(this.apiKey, taskId);
  }

  public async unlocker(config: UnlockerConfig) {
    return await unlocker(this.apiKey, config);
  }

  public async captcha(config: CaptchaConfig) {
    return await captcha(this.apiKey, config);
  }

  public async getCaptchaResult(taskId: string) {
    return await getCaptchaResult(this.apiKey, taskId);
  }
}
