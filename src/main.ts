import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

console.log('%c¡Detente!', "font-family: ';Neo Sans';';Arial';, serif; font-weight: bold; color: #D9272E; font-size: 40px");
console.log("%cEsta función del navegador está pensada para desarrolladores. Si alguien te indicó que copiaras y pegaras algo aquí para habilitar una función de Charlies Yacniel o para PIRATEAR sus datos, se trata de un fraude.", "font-family: ';Arial';, serif; color: #5f6369; font-size: 20px");
console.log("%cSi lo haces, esta persona podrá acceder a tu cuenta y datos personales.", "font-family: ';Arial';, serif; color: #77777A; font-size: 18px");
console.log("%cPara obtener más información, escribe a holamundo@charlyes.com", "font-family: ';Arial';, serif; color: #77777A; font-size: 18px");
