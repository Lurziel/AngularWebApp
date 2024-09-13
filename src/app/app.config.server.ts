import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { appConfig } from './app.config';
import { StorageService } from './services/storage.service';
import { LoginService } from './services/login.service';

const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(),
    {
          provide: LoginService,
          useClass: StorageService,
        },
  ]
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
