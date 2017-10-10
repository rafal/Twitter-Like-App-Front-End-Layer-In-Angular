import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { UserProfileComponent } from './users/user-profile.component';
import { CommentFormComponent } from './users/comment-form.component';
import { Injectable }  from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { HttpModule } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@NgModule({
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    HttpModule,
    FormsModule
],
  declarations: [
    AppComponent,
    UserProfileComponent,
    CommentFormComponent
],
  bootstrap: [ AppComponent ]
})
export class AppModule {}