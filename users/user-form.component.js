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
var user_1 = require("../shared/models/user");
// Component DECORATOR
var CommentFormComponent = /** @class */ (function () {
    function CommentFormComponent() {
        this.userCreated = new core_1.EventEmitter();
        this.newComment = new user_1.Comment();
        this.active = true;
        this.commentInputSelected = false;
        this.commentUserNameSelected = false;
    }
    CommentFormComponent.prototype.onSubmit = function () {
        var _this = this;
        this.userCreated.emit({ user: this.newComment });
        this.newComment = new user_1.Comment();
        this.active = false;
        setTimeout(function () { return _this.active = true; }, 0);
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
    ], CommentFormComponent.prototype, "userCreated", void 0);
    CommentFormComponent = __decorate([
        core_1.Component({
            selector: 'user-form',
            templateUrl: './app/users/user-form.component.html',
            styleUrls: ['./app/users/user-form.component.css']
        })
    ], CommentFormComponent);
    return CommentFormComponent;
}());
exports.CommentFormComponent = CommentFormComponent;
//# sourceMappingURL=user-form.component.js.map