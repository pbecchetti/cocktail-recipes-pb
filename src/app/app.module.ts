import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';

import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFireDatabaseModule } from '@angular/fire/database';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebase),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
