import { ApplicationConfig, provideZoneChangeDetection, importProvidersFrom, ErrorHandler } from '@angular/core';
import { provideRouter } from '@angular/router';
import { BrowserAnimationsModule, provideNoopAnimations } from '@angular/platform-browser/animations';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
// http module
import { provideHttpClient, withInterceptorsFromDi, HTTP_INTERCEPTORS, withFetch, withInterceptors } from '@angular/common/http';

// app routes
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    importProvidersFrom(BrowserAnimationsModule),
    provideAnimationsAsync(),
    provideHttpClient(
      withFetch(),
      withInterceptorsFromDi(),
      // auth0 interceptor
      //withInterceptors([authHttpInterceptorFn])
    ),

    // // show loader on http requests
    // { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true },
    // { provide: HTTP_INTERCEPTORS, useClass: NotFoundInterceptor, multi: true },
    // // global error handler
    // { provide: ErrorHandler, useClass: GlobalErrorHandler }
  ]
};
