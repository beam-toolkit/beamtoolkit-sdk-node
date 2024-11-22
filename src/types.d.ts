export interface ScrapelessConfig {
  apiKey: string;
}

export interface ServiceConfig {
  actor: string;
  input: Record<string, any>;
}

export interface ScraperConfig extends ServiceConfig {
  webhook?: string;
}

export type UnlockerConfig = ServiceConfig

export interface CaptchaConfig extends ServiceConfig {
  webhook?: string;
  proxy?: Record<string, any>;
}