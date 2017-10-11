"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var comment_1 = require("../shared/models/comment");
// Component DECORATOR
var CommentFormComponent = /** @class */ (function () {
    function CommentFormComponent() {
        this.commentCreated = new core_1.EventEmitter();
        this.newComment = new comment_1.Comment();
        this.active = true;
        this.commentInputSelected = false;
        this.commentUserNameSelected = false;
    }
    CommentFormComponent.prototype.onSubmit = function () {
        var _this = this;
        this.commentCreated.emit({ comment: this.newComment });
        this.newComment = new comment_1.Comment();
        this.active = false;
        setTimeout(function () { return _this.active = true; }, 0);
        console.log(new Date(this.newComment.date));
    };
    CommentFormComponent.prototype.selectCommentInput = function () {
        this.commentInputSelected = true;
    };
    CommentFormComponent.prototype.selectCommentUserName = function () {
        this.commentUserNameSelected = true;
    };
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], CommentFormComponent.prototype, "commentCreated", void 0);
    CommentFormComponent = __decorate([
        core_1.Component({
            selector: 'comment-form',
            templateUrl: './app/users/comment-form.component.html',
            styleUrls: ['./app/users/comment-form.component.css']
        })
    ], CommentFormComponent);
    return CommentFormComponent;
}());
exports.CommentFormComponent = CommentFormComponent;
//# sourceMappingURL=comment-form.component.js.map