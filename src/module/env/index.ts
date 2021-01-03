interface IGlobalConfig {
  apiEndpoint: string;
}

declare global {
  interface Window {
    config: IGlobalConfig;
  }
}

export function APIEndpoint(): string {
  return window.config.apiEndpoint;
}
