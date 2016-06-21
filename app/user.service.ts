import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { User } from './User';

@Injectable()
export class UserService {
    private _usersUrl = "http://jsonplaceholder.typicode.com/users";

    constructor(private _http: Http) {

    }

    getUsers(): Observable<User[]> {
        return this._http.get(this._usersUrl)
            .map(res => res.json());
            //TODO: Catch any errors.
    }
}