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
var http_1 = require("@angular/http");
var core_1 = require("@angular/core");
var comment_1 = require("../shared/models/comment");
var UserProfileComponent = /** @class */ (function () {
    function UserProfileComponent(http) {
        this.http = http;
        this.currentURL = '';
        this.commentsVisible = true;
        this.commentInputSelected = false;
        this.commentUserNameSelected = false;
        this.followers = 0;
        this.alreadyFollowing = false;
        this.following = 0;
        this.likes = 0;
        this.like = false;
        this.followStr = "FOLLOW";
        this.name = "";
        this.location = "";
        this.comments = [];
        this.currentURL = window.location.href;
    }
    UserProfileComponent.prototype.showDateDiff = function (date) {
        var today = new Date().getTime();
        var diff = today - date;
        var days = diff / 1000 / 60 / 60 / 24;
        var months = days / 30;
        var years = months / 12;
        if (days < 1) {
            return "Today";
        }
        else {
            if (days < 30) {
                return "" + Math.round(days) + "d";
            }
            else {
                if (days < 365) {
                    return "" + Math.round(months) + "m";
                }
                else {
                    return "" + Math.round(years) + "y";
                }
            }
        }
    };
    UserProfileComponent.prototype.onCommentCreated = function (event) {
        event.comment.date = new Date().getTime();
        this.comments.push(event.comment);
    };
    UserProfileComponent.prototype.selectComment = function (comment) {
        this.activeComment = comment;
        console.log(this.activeComment);
    };
    UserProfileComponent.prototype.liker = function () {
        if (this.like) {
            this.like = false;
            this.likes--;
        }
        else {
            this.like = true;
            this.likes++;
        }
    };
    UserProfileComponent.prototype.follow = function () {
        if (this.alreadyFollowing) {
            this.alreadyFollowing = false;
            this.followers--;
            this.followStr = "FOLLOW";
        }
        else {
            this.alreadyFollowing = true;
            this.followers++;
            this.followStr = "FOLLOWING";
        }
    };
    UserProfileComponent.prototype.toggleComments = function () {
        this.commentsVisible = (this.commentsVisible) ? false : true;
    };
    UserProfileComponent.prototype.selectCommentInput = function () {
        this.commentInputSelected = true;
    };
    UserProfileComponent.prototype.selectCommentUserName = function () {
        this.commentUserNameSelected = true;
    };
    UserProfileComponent.prototype.getJSON = function () {
        var xhReq = new XMLHttpRequest();
        xhReq.open("GET", "./app/users/data.json", false);
        xhReq.send(null);
        return JSON.parse(xhReq.responseText);
    };
    UserProfileComponent.prototype.ngOnInit = function () {
        var data = this.getJSON();
        this.comments = data.comments;
        this.followers = data.followers;
        this.following = data.following;
        this.name = data.name;
        this.location = data.location;
        this.likes = data.likes;
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", comment_1.Comment)
    ], UserProfileComponent.prototype, "comment", void 0);
    UserProfileComponent = __decorate([
        core_1.Component({
            selector: 'user-profile',
            templateUrl: './app/users/user-profile.component.html',
            styleUrls: ['./app/users/user-profile.component.css',
                './app/users/user-profile.component.desktop.css',
                './app/users/heart-animation.css',
                './app/users/scrollbar.css']
        }),
        __metadata("design:paramtypes", [http_1.Http])
    ], UserProfileComponent);
    return UserProfileComponent;
}());
exports.UserProfileComponent = UserProfileComponent;
//# sourceMappingURL=user-profile.component.js.map