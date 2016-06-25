import { Component, OnInit } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';

import { PostsService } from './posts.service';

import { Post } from './post';

import { PostDetailsComponent } from './post-details.component';
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
    `],
    directives: [ PostDetailsComponent, SpinnerComponent ],
    providers: [ HTTP_PROVIDERS, PostsService ]
})

export class PostsListComponent implements OnInit {
    isLoading = true;
    posts = [];
    selectedPost: Post;

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

    postSelected(post: Post) {
        this.selectedPost = post;
        // console.log('Selected post: ', this.selectedPost); // Debugging
    }
}