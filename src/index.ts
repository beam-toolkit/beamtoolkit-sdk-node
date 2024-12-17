import {
  scraper,
  unlocker,
  captcha,
  getScraperResult,
  getCaptchaResult,
} from '@/api/api';
import { withTimeoutAsync, sleep } from './utils';

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

  public async createCaptchaTask(config: CaptchaConfig) {
    return await captcha(this.apiKey, config);
  }

  public async getCaptchaTaskResult(taskId: string) {
    return await getCaptchaResult(this.apiKey, taskId);
  }

  public async solverCaptcha(config: CaptchaConfig, timeout = 30000) {
    try {
      let startAt = Date.now();
      const res = await withTimeoutAsync(this.captcha(config), timeout);
      const taskId = res.taskId;

      let leftTime = timeout - (Date.now() - startAt);
      startAt = Date.now();
      let result = await withTimeoutAsync(this.getCaptchaResult(taskId), leftTime);

      while (leftTime > 0 && !result.success) {
        await sleep(1000);
        leftTime = leftTime - (Date.now() - startAt);
        result = await withTimeoutAsync(this.getCaptchaResult(taskId), leftTime);
      }

      if (!result.success) {
        return {
          msg: 'solve captcha timeout',
          success: false,
          taskId
        }
      }

      return result;
    } catch (e) {
      if (e === 'Task timed out') {
        return {
          msg: 'solve captcha timeout',
          success: false,
          taskId: ''
        }
      }

      return {
        msg: 'solve captcha error',
        success: false,
        data: null,
      }
    }
  }
}
