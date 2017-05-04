import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import 'hammerjs';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { trigger, state, style, animate, transition } from '@angular/animations';
import {NavbarComponent} from './components/navbar/navbar.component';
import {AuthRegisterComponent, AuthorizationComponent} from './components/authorization/authorization.component';
import {AuthorizationService} from './services/authorization.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AuthRegisterComponent,
    AuthorizationComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule, 
    MaterialModule.forRoot(),
    FlexLayoutModule,
  ],
  entryComponents: [AuthRegisterComponent, AuthorizationComponent],
  providers: [AuthorizationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
