import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PanelModule } from 'primeng/panel';
import { MenubarModule } from 'primeng/menubar';
import { HeaderModule } from './components/header/header.module';
import { FooterModule } from './components/footer/footer.module';
import { LoginModule } from './components/login/login.module';
import { AuthService } from '../shared/services/auth.service';
import { provideAnimations } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ToastModule } from 'primeng/toast';
import { ToastService } from '../shared/services/toast.service';
import { MessageService } from 'primeng/api';
import { GlobalHttpInterceptorService } from '../shared/interceptors/interceptor';
import {CollectionModule} from "./components/collection/collection.module";
import {AuthGuard} from "../shared/guadrs/auth.guard";
import {LoginGuard} from "../shared/guadrs/login.guard";
import {AuthInterceptor} from "../shared/interceptors/interceptorAuth";
import {GenusService} from "../shared/services/genus.service";
import {CollectorService} from "../shared/services/collector.service";
import {DefinedService} from "../shared/services/defined.service";
import {HandbookModule} from "./components/handbook/handbook.module";
import {HandTableModule} from "./components/handbook/hand-table/hand-table.module";
import {BindingsService} from "../shared/services/bindings.service";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    InputTextModule,
    PanelModule,
    MenubarModule,
    HeaderModule,
    FooterModule,
    LoginModule,
    HttpClientModule,
    ToastModule,
    CollectionModule,
    HandbookModule,
    HandTableModule
  ],
  providers: [
    AuthService,
    ToastService,
    MessageService,
    GenusService,
    AuthGuard,
    CollectorService,
    DefinedService,
    BindingsService,
    LoginGuard,
    provideAnimations(),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: GlobalHttpInterceptorService,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
