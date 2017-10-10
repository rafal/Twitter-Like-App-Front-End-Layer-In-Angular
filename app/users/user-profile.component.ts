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
    { id: 25, username: 'Mike Ross', comment: 'Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula. ', date: 1300387742223},
    { id: 26, username: 'Mike Ross', comment: 'Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula. ', date: 1400387742223},
    { id: 27, username: 'Mike Ross', comment: 'Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula. ', date: 1500387742223},
    { id: 28, username: 'Mike Ross', comment: 'Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula. ', date: 1507495742223},
    { id: 29, username: 'Mike Ross', comment: 'Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula. ', date: new Date().getTime()}
  ];
  showDateDiff(date){
    var today = new Date().getTime();
    console.log("today = " + today);
    var diff = today-date;
    console.log("diff = " + diff);
    var days = diff / 1000 / 60 / 60 / 24;
    var months = days / 30;
    var years = months / 12;
    if (days < 1){
      return "Today";
    } else {
      if (days < 30) {
        return "" + Math.round(days) + "d";
      } else {
        if (days < 365){
          return "" + Math.round(months) + "m";
        } else{
        return "" + Math.round(years) + "y";
        }
      }
    }
  }
  onCommentCreated(event){
    event.comment.date = new Date().getTime();
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
    this.commentsVisible = (this.commentsVisible) ? false : true;
  }
  selectCommentInput(){
    this.commentInputSelected = true;
  }
  selectCommentUserName(){
    this.commentUserNameSelected = true;
  }
}