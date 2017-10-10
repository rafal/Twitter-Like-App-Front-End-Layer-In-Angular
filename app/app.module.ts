import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { UserProfileComponent } from './users/user-profile.component';
import { CommentFormComponent } from './users/comment-form.component';


@NgModule({
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
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