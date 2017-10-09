import { Component, Input } from '@angular/core';
import { User } from '../shared/models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'user-profile',
  templateUrl: './app/users/user-profile.component.html',
  styleUrls: []
})
export class UserProfileComponent {
  currentURL='';
  constructor() {
        this.currentURL=window.location.href;
    }
  commentsVisible:boolean = true;
  followers:number = 4433;
  following:boolean = false;
  likes:number = 121;
  like:boolean = false;
  followStr:string = "FOLLOW";
  @Input() user: User;
  users: User[] = [
    { id: 25,
      name: 'Mike Ross',
      username: 'Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula. '},
    { id: 26, name: 'Mike Ross', username: 'Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula. '},
    { id: 27, name: 'Mike Ross', username: 'Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula. '},
    { id: 28, name: 'Mike Ross', username: 'Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula. '},
    { id: 29, name: 'Mike Ross', username: 'Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula. '}
  ]; 
  activeUser: User;
  onUserCreated(event){
    this.users.push(event.user);
  }
  selectUser(user){
    this.activeUser = user;
    console.log(this.activeUser);
  }
  liker(){
    if (this.like) {
      this.like = false;
      this.likes--;
    } else {
      this.like = true;
      this.likes++;
    }
  }
  follow(){
    if (this.following) {
      this.following = false;
      this.followers--;
      this.followStr = "FOLLOW"
    } else {
      this.following = true;
      this.followers++;
      this.followStr = "FOLLOWING"
    }
  }
  toggleComments(){
    if (this.commentsVisible) {
      this.commentsVisible = false;
    } else {
      this.commentsVisible = true;
    }
  }
  ngOnInit() {
        
        console.log(this.currentURL);
    }
}