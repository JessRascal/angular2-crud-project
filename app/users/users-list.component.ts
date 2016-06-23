import { Component, OnInit } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';

import { User } from './user';
import { UserService } from './user.service';

@Component({
    selector: 'users-list',
    templateUrl: 'app/users/users-list.component.html',
    providers: [ HTTP_PROVIDERS ]
})

export class UsersListComponent implements OnInit {
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