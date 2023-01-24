import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { UserListModule } from './app/user-list/user-list.module';
import { AuthModuleModule } from './app/_modules/auth-module/auth-module.module';
import { GreetingCardComponent } from './app/_modules/component-library/card/greeting-card/greeting-card.component';

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
