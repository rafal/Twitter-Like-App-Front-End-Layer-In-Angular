import { Injectable }  from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { HttpModule } from '@angular/http';
import { Component, Input } from '@angular/core';
import { Comment } from '../shared/models/comment';
import { NgbdModalBasic } from './modal-basic';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'user-profile',
  templateUrl: './app/users/user-profile.component.html',
  styleUrls: ['./app/users/user-profile.component.css',
              './app/users/user-profile.component.desktop.css',
              './app/users/heart-animation.css',
              './app/users/scrollbar.css'
              ]
})
export class UserProfileComponent {
  currentURL='';
  constructor(private http: Http) {
    this.currentURL=window.location.href;
  }
  commentsVisible:boolean = true;
  commentInputSelected:boolean = false;
  commentUserNameSelected:boolean = false;
  followers:number = 0;
  alreadyFollowing:boolean = false;
  following:number = 0;
  likes:number = 0;
  like:boolean = false;
  name:string = "";
  location:string = "";
  @Input() comment: Comment;
  comments: Comment[] = [];
  showDateDiff(date){
    var today = new Date().getTime();
    var diff = today-date;
    var days = Math.round(diff / 1000 / 60 / 60 / 24);
    var weeks = Math.round(days / 7);
    var months = Math.round(days / 30);
    var years = Math.round(months / 12);
    if (days < 1){
      return "Today";
    } else {
      if (days < 7) {
        return "" + Math.round(days) + "d";
      } else {
      if (days < 30) {
        return "" + Math.round(weeks) + "w";
      } else {
        if (days < 365){
          return "" + Math.round(months) + "m";
        } else{
        return "" + Math.round(years) + "y";
        }
      }
    }
  }}
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
    if (this.alreadyFollowing) {
      this.alreadyFollowing = false;
      this.followers--;
      this.followStr = "FOLLOW"
    } else {
      this.alreadyFollowing = true;
      this.followers++;
      this.followStr = "UNFOLLOW"
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
  getJSON(){
    var xhReq = new XMLHttpRequest();
    xhReq.open("GET", "./app/users/data.json", false);
    xhReq.send(null);
    return JSON.parse(xhReq.responseText);
  }
  ngOnInit(){
    var data = this.getJSON();
    this.comments = data.comments;
    this.followers = data.followers;
    this.following = data.following;
    this.name = data.name;
    this.location = data.location;
    this.likes = data.likes;
  }
}