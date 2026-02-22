import { Injectable } from '@angular/core';

export interface AppConfig {
  apiUrl: string;
}

@Injectable({
  providedIn: 'root'
})
export class AppConfigService {
  private config: AppConfig | null = null;

  constructor() {}

  // Native fetch is used here to avoid circular dependency issues during app startup
  public async loadConfig(): Promise<void> {
    try {
      const response = await fetch('/assets/config.json');
      this.config = await response.json();
      console.log('Runtime config loaded:', this.config);
    } catch (error) {
      console.error('Failed to load application configuration', error);
    }
  }

  // Getter to access the base URL from any service
  public get apiUrl(): string {
    if (!this.config) {
      throw new Error('Config not loaded yet!');
    }
    return this.config.apiUrl;
  }
}