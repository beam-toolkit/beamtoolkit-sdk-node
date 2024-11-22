import request from './http';

import type { ScraperConfig, UnlockerConfig, CaptchaConfig } from '@/types';

export function scraper(apiKey: string, config: ScraperConfig) {
  return request({
    method: 'POST',
    url: '/scraper/request',
    headers: {
      'x-api-token': apiKey,
    },
    data: config,
  });
}

export function getScraperResult(apiKey: string, taskId: string) {
  return request({
    method: 'GET',
    url: `/scraper/result/${taskId}`,
    headers: {
      'x-api-token': apiKey,
    },
  });
}

export function unlocker(apiKey: string, config: UnlockerConfig) {
  return request({
    method: 'POST',
    url: '/unlocker/request',
    headers: {
      'x-api-token': apiKey,
    },
    data: config,
  });
}

export function captcha(apiKey: string, config: CaptchaConfig) {
  return request({
    method: 'POST',
    url: '/createTask',
    headers: {
      'x-api-token': apiKey,
    },
    data: config,
  });
}

export function getCaptchaResult(apiKey: string, taskId: string) {
  return request({
    method: 'GET',
    url: `/getTaskResult/${taskId}`,
    headers: {
      'x-api-token': apiKey,
    },
  });
}