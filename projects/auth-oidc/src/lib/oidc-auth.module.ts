import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OidcConfig } from './models/config';
import { OidcConfigService } from './services/config.service';

import { AuthorizationCodeCallbackComponent } from './components/authorization-code-callback/authorization-code-callback.component';
import { LoginRedirectComponent } from './components/login-redirect/login-redirect.component';
import { ImplicitCallbackComponent } from './components/implicit-callback/implicit-callback.component';

//
// Utils lib
//

import { UtilsModule, LoggerService } from 'utils';

//
// LibRoutingModule: https://angular.io/guide/router#routing-module-order
//

import { LibRoutingModule } from './lib-routing.module';

@NgModule({
  imports: [
    CommonModule,
    UtilsModule,

    LibRoutingModule  // https://angular.io/guide/router#routing-module-order
  ],
  declarations: [
    AuthorizationCodeCallbackComponent,
    LoginRedirectComponent,
    ImplicitCallbackComponent
  ]
})
export class OidcAuthModule {

  constructor(private logger: LoggerService) {

    this.logger.info('OpenID Connect (OIDC) Auth Module initialised');
  }

  static forRoot(config: OidcConfig): ModuleWithProviders<OidcAuthModule> {

    return {
      ngModule: OidcAuthModule,
      providers: [
        { provide: OidcConfigService, useValue: config }
      ]
    };

  }

}
