import { Component, Output, EventEmitter } from '@angular/core';
import { Comment } from '../shared/models/comment';

// Component DECORATOR
@Component({
  selector: 'comment-form',
  templateUrl: './app/users/comment-form.component.html',
  styleUrls: ['./app/users/comment-form.component.css']
})
export class CommentFormComponent {
  @Output() commentCreated = new EventEmitter();
  newComment: Comment = new Comment();
  active: boolean = true;
  commentInputSelected:boolean = false;
  commentUserNameSelected:boolean = false;
  onSubmit(){
    this.commentCreated.emit({comment: this.newComment});
    this.newComment = new Comment();
    this.active = false;
    setTimeout(() => this.active = true, 0);
    console.log(new Date(this.newComment.date));
  }
  selectCommentInput(){
    this.commentInputSelected = true;
  }
  selectCommentUserName(){
    this.commentUserNameSelected = true;
  }
}