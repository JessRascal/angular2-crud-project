import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Post } from './post';

@Injectable()
export class PostsService {
    private _postsUrl = "http://jsonplaceholder.typicode.com/posts";

    constructor(private _http: Http) { }

    // GET all posts.
    getPosts(): Observable<[Post]> {
        return this._http.get(this._postsUrl)
            .map(
                res => res.json(),
                err => console.log(err)
                );
    }

}