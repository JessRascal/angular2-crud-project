import { Component, OnInit } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';

import { UserService } from '../users/user.service';
import { PostService } from './post.service';

import { Post } from './post';

import { SpinnerComponent } from '../shared/spinner.component';

@Component({
    selector: 'posts-list',
    templateUrl: 'app/posts/posts-list.component.html',
    styles: [`
        .list-group-item.active,
        .list-group-item:hover,
        .list-group-item:focus {
            cursor: pointer;
            color: #212121;
            background-color: #eee;
            border-color: #eee;
        }

        .comment-img {
            border-radius: 100%;
        }

        .top-buffer {
            margin-top:20px;
        }
    `],
    directives: [ SpinnerComponent ],
    providers: [ HTTP_PROVIDERS, UserService, PostService ]
})

export class PostsListComponent implements OnInit {
    isLoading = true;
    posts = [];
    comments = [];
    selectedPost: Post;
    commentsLoading = true;
    users = [];

    constructor(private _postsService: PostService, private _usersService: UserService) { }

    ngOnInit() {
        this.getPosts();
        this.getUsers();
    }

    getUsers() {
        this._usersService.getUsers()
            .subscribe(users => {
                this.users = users
                // console.log(this.users) // Debugging
            });
    }

    getPosts() {
        this._postsService.getPosts()
            .subscribe(posts => {
                this.posts = posts,
                this.isLoading = false
                // console.log(posts) // Debugging
            });
    }

    getPostComments(id) {
        this._postsService.getPostComments(id)
            .subscribe(comments => {
                this.comments = comments,
                this.commentsLoading = false;
                // console.log(comments) // Debugging
            });
    }

    postSelected(post: Post) {
        // Reset the comments state
        this.commentsLoading = true;
        this.comments = [];

        this.selectedPost = post;
        // console.log('Selected post: ', this.selectedPost); // Debugging
        this.getPostComments(this.selectedPost.id);
    }

    getUsersPosts(id: string) {
        if (id == '0') {
            this.getPosts();
            return;
        }
        this._postsService.getUsersPosts(id)
            .subscribe(posts => {
                this.posts = posts
            });
    }
}