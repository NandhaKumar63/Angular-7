import { enableProdMode, ReflectiveInjector } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { ProductRoutingModule } from './app/products/product-routing.module';
import { ProductService } from './app/products/services/product.service';

if (environment.production) {
  enableProdMode();
}
class PService {

}

class CService {

}


let injector = ReflectiveInjector.resolveAndCreate([
  { provide: PService, useClass: PService },
  // { provide: CService , useExisting: PService },
  { provide: 'language', useValue: Object.freeze({name:'en-US'}) }
]);

const language = injector.get('language');
console.log(language.isFrozen);
// language.name =
console.log(language.name);


let injector1 = injector.resolveAndCreateChild([
  { provide: CService, useExisting: PService }
]);
// console.log(injector1.get(PService));
console.log(injector1.get(CService));
// let childInjector = injector.resolveAndCreateChild([]);
// console.log(childInjector.get(PService));
// console.log(injector.get(PService) === injector.get(CService));

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
