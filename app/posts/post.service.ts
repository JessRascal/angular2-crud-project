import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Post } from './post';
import { PostComment } from './post';

@Injectable()
export class PostService {
    private _postsUrl = "http://jsonplaceholder.typicode.com/posts";

    constructor(private _http: Http) { }

    // GET all posts.
    getPosts(filter?): Observable<[Post]> {
        var url = this._postsUrl;

        if (filter && filter.userId && filter.userId != 0)
            url += "?userId=" + filter.userId;

            console.log(url);

        return this._http.get(url)
            .map(
                res => res.json(),
                err => console.log(err)
            );
    }

    // GET a post's comments.
    getPostComments(id: string): Observable<PostComment[]> {
        return this._http.get(this._postsUrl + '/' + id + '/' + 'comments')
            .map(
                res => res.json(),
                err => console.log(err)
            );
    }
}