import { Component, OnInit } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';

import { PostsService } from './posts.service';

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
    `],
    directives: [ SpinnerComponent ],
    providers: [ HTTP_PROVIDERS, PostsService ]
})

export class PostsListComponent implements OnInit {
    isLoading = true;
    posts = [];
    comments = [];
    selectedPost: Post;
    commentsLoading = true;

    constructor(private _postsService: PostsService) { }

    ngOnInit() {
        this.getPosts();
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
}