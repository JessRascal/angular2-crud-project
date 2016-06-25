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
var posts_service_1 = require('./posts.service');
var post_details_component_1 = require('./post-details.component');
var spinner_component_1 = require('../shared/spinner.component');
var PostsListComponent = (function () {
    function PostsListComponent(_postsService) {
        this._postsService = _postsService;
        this.isLoading = true;
        this.posts = [];
    }
    PostsListComponent.prototype.ngOnInit = function () {
        this.getPosts();
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
    PostsListComponent.prototype.postSelected = function (post) {
        this.selectedPost = post;
        // console.log('Selected post: ', this.selectedPost); // Debugging
    };
    PostsListComponent = __decorate([
        core_1.Component({
            selector: 'posts-list',
            templateUrl: 'app/posts/posts-list.component.html',
            styles: ["\n        .list-group-item.active,\n        .list-group-item:hover,\n        .list-group-item:focus {\n            cursor: pointer;\n            color: #212121;\n            background-color: #eee;\n            border-color: #eee;\n        }\n    "],
            directives: [post_details_component_1.PostDetailsComponent, spinner_component_1.SpinnerComponent],
            providers: [http_1.HTTP_PROVIDERS, posts_service_1.PostsService]
        }), 
        __metadata('design:paramtypes', [posts_service_1.PostsService])
    ], PostsListComponent);
    return PostsListComponent;
}());
exports.PostsListComponent = PostsListComponent;
//# sourceMappingURL=posts-list.component.js.map