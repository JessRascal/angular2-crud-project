import { Component, OnInit } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';

import { User } from './user';
import { UserService } from './user.service';

import { AddUserComponent } from './add-user.component';

@RouteConfig([
    { path: '/new', name: 'AddUser', component: AddUserComponent }
])

@Component({
    selector: 'users',
    templateUrl: 'app/users.component.html',
    providers: [ HTTP_PROVIDERS, UserService ],
    directives: [ ROUTER_DIRECTIVES ]
})

export class UsersComponent implements OnInit {
    users = [];

    constructor(private _userService: UserService) {
        
    }

    getUsers() {
        this._userService.getUsers()
            .subscribe(
                users => this.users = users,
                error => console.error(error)
                );
    }

    ngOnInit() {
        this.getUsers();
    }
}