import { ThreeJsListComponent } from './three-js/threejslist.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppComponentSvg } from './app.component-svg';
import { ProfileDetailComponent } from './profil-detail/profil-detail.component';

@NgModule({
  declarations: [
    AppComponentSvg,
    ProfileDetailComponent,
    ThreeJsListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [ThreeJsListComponent] // ThreeJsListComponent, AppComponent, AppComponentSvg 
})
export class AppModule { }
