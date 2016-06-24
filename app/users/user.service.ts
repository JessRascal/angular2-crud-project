import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { User } from './User';

@Injectable()
export class UserService {
    private _usersUrl = "http://jsonplaceholder.typicode.com/users";

    constructor(private _http: Http) {

    }

    getUsers(): Observable<User[]> {
        return this._http.get(this._usersUrl)
            .map(
                res => res.json(),
                err => console.log(err)
                );
    }

    createUser(user: User): Observable<User> {
        return this._http.post(this._usersUrl, JSON.stringify(user))
            .map(
                res => res.json(),
                err => console.log(err)
                );
    }
}