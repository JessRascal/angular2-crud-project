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
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var user_service_1 = require('../users/user.service');
var post_service_1 = require('./post.service');
var spinner_component_1 = require('../shared/spinner.component');
var PostsListComponent = (function () {
    function PostsListComponent(_postsService, _usersService) {
        this._postsService = _postsService;
        this._usersService = _usersService;
        this.isLoading = true;
        this.posts = [];
        this.comments = [];
        this.commentsLoading = true;
        this.users = [];
    }
    PostsListComponent.prototype.ngOnInit = function () {
        this.getPosts();
        this.getUsers();
    };
    PostsListComponent.prototype.getUsers = function () {
        var _this = this;
        this._usersService.getUsers()
            .subscribe(function (users) {
            _this.users = users;
            // console.log(this.users) // Debugging
        });
    };
    PostsListComponent.prototype.getPosts = function () {
        var _this = this;
        this._postsService.getPosts()
            .subscribe(function (posts) {
            _this.posts = posts,
                _this.isLoading = false;
            // console.log(posts) // Debugging
        });
    };
    PostsListComponent.prototype.getPostComments = function (id) {
        var _this = this;
        this._postsService.getPostComments(id)
            .subscribe(function (comments) {
            _this.comments = comments,
                _this.commentsLoading = false;
            // console.log(comments) // Debugging
        });
    };
    PostsListComponent.prototype.postSelected = function (post) {
        // Reset the comments state
        this.commentsLoading = true;
        this.comments = [];
        this.selectedPost = post;
        // console.log('Selected post: ', this.selectedPost); // Debugging
        this.getPostComments(this.selectedPost.id);
    };
    PostsListComponent.prototype.getUsersPosts = function (id) {
        var _this = this;
        if (id == '0') {
            this.getPosts();
            return;
        }
        this._postsService.getUsersPosts(id)
            .subscribe(function (posts) {
            _this.posts = posts;
        });
    };
    PostsListComponent = __decorate([
        core_1.Component({
            selector: 'posts-list',
            templateUrl: 'app/posts/posts-list.component.html',
            styles: ["\n        .list-group-item.active,\n        .list-group-item:hover,\n        .list-group-item:focus {\n            cursor: pointer;\n            color: #212121;\n            background-color: #eee;\n            border-color: #eee;\n        }\n\n        .comment-img {\n            border-radius: 100%;\n        }\n\n        .top-buffer {\n            margin-top:20px;\n        }\n    "],
            directives: [spinner_component_1.SpinnerComponent],
            providers: [http_1.HTTP_PROVIDERS, user_service_1.UserService, post_service_1.PostService]
        }), 
        __metadata('design:paramtypes', [post_service_1.PostService, user_service_1.UserService])
    ], PostsListComponent);
    return PostsListComponent;
}());
exports.PostsListComponent = PostsListComponent;
//# sourceMappingURL=posts-list.component.js.map