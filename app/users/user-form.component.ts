import { Component, Output, EventEmitter } from '@angular/core';
import { User } from '../shared/models/user';

// Component DECORATOR
@Component({
  selector: 'user-form',
  templateUrl: './app/users/user-form.component.html',
  styleUrls: ['./app/users/user-profile.component.css']
})
export class UserFormComponent {
  @Output() userCreated = new EventEmitter();
  newUser: User = new User();
  active: boolean = true;

  onSubmit(){
    this.userCreated.emit({user: this.newUser});

    this.newUser = new User();
    this.active = false;
    setTimeout(() => this.active = true, 0);
  }
  selectCommentInput(){
    this.commentInputSelected = true;
  }
  selectCommentUserName(){
    this.commentUserNameSelected = true;
  }
}