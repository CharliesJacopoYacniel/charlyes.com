import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

console.log('%c¡STOP!', "font-family: ';Neo Sans';';Arial';, serif; font-weight: bold; color: #D9272E; font-size: 40px");
console.log("%cThis browser feature is intended for developers. If someone told you to copy and paste something here to enable a Charlies Yacniel feature or to HACK their data, it is a fraud.", "font-family: ';Arial';, serif; color: #5f6369; font-size: 20px");
console.log("%cIf you do, this person will be able to access your account and personal data.", "font-family: ';Arial';, serif; color: #77777A; font-size: 18px");
console.log("%cFor more information, write to holamundo@charlyes.com", "font-family: ';Arial';, serif; color: #77777A; font-size: 18px");
