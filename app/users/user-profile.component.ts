import { Component, Input } from '@angular/core';
import { Comment } from '../shared/models/comment';
import { Router } from '@angular/router';

@Component({
  selector: 'user-profile',
  templateUrl: './app/users/user-profile.component.html',
  styleUrls: ['./app/users/user-profile.component.css',
              './app/users/user-profile.component.desktop.css',
              './app/users/heart-animation.css']
})
export class UserProfileComponent {
  currentURL='';
  constructor() {
        this.currentURL=window.location.href;
    }
  commentsVisible:boolean = true;
  commentInputSelected:boolean = false;
  commentUserNameSelected:boolean = false;
  followers:number = 4433;
  following:boolean = false;
  likes:number = 121;
  like:boolean = false;
  followStr:string = "FOLLOW";
  @Input() comment: Comment;
  comments: Comment[] = [
    { id: 25,
      username: 'Mike Ross',
      comment: 'Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula. '},
    { id: 26, username: 'Mike Ross', comment: 'Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula. '},
    { id: 27, username: 'Mike Ross', comment: 'Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula. '},
    { id: 28, username: 'Mike Ross', comment: 'Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula. '},
    { id: 29, username: 'Mike Ross', comment: 'Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula. '}
  ]; 
  onCommentCreated(event){
    this.comments.push(event.comment);
  }
  selectComment(comment){
  this.activeComment = comment;
  console.log(this.activeComment);
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
  selectCommentInput(){
    this.commentInputSelected = true;
  }
  selectCommentUserName(){
    this.commentUserNameSelected = true;
  }
}