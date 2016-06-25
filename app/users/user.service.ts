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

    // GET all users
    getUsers(): Observable<User[]> {
        return this._http.get(this._usersUrl)
            .map(
                res => res.json(),
                err => console.log(err)
            );
    }

    // GET single user
    getSingleUser(id: string): Observable<User> {
        return this._http.get(this._usersUrl + '/' + id)
            .map(
                res => res.json(),
                err => console.error(err)
            );
    }

    // POST new user
    createUser(user: User): Observable<User> {
        return this._http.post(this._usersUrl, JSON.stringify(user))
            .map(
                res => res.json(),
                err => console.log(err)
            );
    }

    // PUT user's details
    updateUser(user: User): Observable<User> {
        return this._http.put(this._usersUrl + '/' + user.id, JSON.stringify(user))
            .map(
                res => res.json(),
                err => console.log(err)
            );
    }

    // Delete user
    deleteUser(id: string): Observable<User> {
        return this._http.delete(this._usersUrl + '/' + id)
            .map(
                res => res.json(),
                err => console.log(err)
            );
    }

    // Save user (POST or PUT)
    saveUser(user: User): Observable<User> {
        if(user.id) {
            return this.updateUser(user);
        }
        return this.createUser(user);
    }
}