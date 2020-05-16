import { enableProdMode, ReflectiveInjector } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { ProductService } from './app/products/services/product.service';
import { HttpClient } from '@angular/common/http';

if (environment.production) {
  enableProdMode();
}
class EmailService {
  mailProvider = 'URL';
  name = '';
};

class SendGridService { };

let injector = ReflectiveInjector.resolveAndCreate([
  EmailService,
  SendGridService
]);

let emailService = injector.get(EmailService);
// console.log(emailService.mailProvider);


// Dependency Caching/ returns Singleton instance/obj
let emailService1 = injector.get(EmailService); // create new // Component 1
emailService1.name = "one";
let emailService2 = injector.get(EmailService); // return existing // Component 2
emailService2.name = "two";

let emailService3 = injector.get(EmailService); // Component 3

// console.log(emailService1 === emailService3 ? "*** MATCHED ***" : "*** NOT MATCHED ***");
// console.log(emailService3.name);

let instancePool = {};
function createInstance(key) {
  if (!instancePool[key]) {
    instancePool[key] = "new Instance";
  }
  return instancePool[key];
}


// Child Injectors
let childInjector = injector.resolveAndCreateChild([
  EmailService
]);

let parentEmailService = injector.get(EmailService); // Root Module // App Module
let childEmailService = childInjector.get(EmailService); // Feature Module / Product Module
// console.log(parentEmailService === childEmailService ? "*** MATCHED ***" : "*** NOT MATCHED ***");



// Providers
let providerInjector = ReflectiveInjector.resolveAndCreate([
  { provide: EmailService, useClass: EmailService },
  { provide: SendGridService, useClass: SendGridService }
]);


// Provider Configurations

// useClass
let injector1 = ReflectiveInjector.resolveAndCreate([
  { provide: "EmailService", useClass: EmailService }
]);
// console.log(injector1.get("EmailService"));

// useExisting
let injector2 = ReflectiveInjector.resolveAndCreate([
  // { provide: EmailService, useValue: EmailService },
  { provide: SendGridService, useExisting: EmailService }
]);

// console.log(injector2.get(SendGridService));

// useValue
let injector3 = ReflectiveInjector.resolveAndCreate([
  {
    provide: "GOOGLE_ANALYTICS_ID",
    useValue: Object.freeze({
      TrackID: "UA-27035672-1"
    })
  }
]);

// console.log(injector3.get("GOOGLE_ANALYTICS_ID"));

let GAConfig = injector3.get("GOOGLE_ANALYTICS_ID");// comp1 
// GAConfig.TrackID = "CHANGED***";

// console.log(injector3.get("GOOGLE_ANALYTICS_ID")); // comp2

// useFactory
let injector4 = ReflectiveInjector.resolveAndCreate([
  {
    provide: EmailService,
    useFactory: () => {
      if (environment.production) {
        return new EmailService();
      } else {
        return new SendGridService();
      }
    }
  }
]);

console.log(injector4.get(EmailService));

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
