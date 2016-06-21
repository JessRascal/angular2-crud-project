import { Component, OnInit } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';

import { User } from './user';
import { UserService } from './user.service';

@Component({
    selector: 'users',
    templateUrl: 'app/users.component.html',
    providers: [ HTTP_PROVIDERS, UserService ]
})

export class UsersComponent implements OnInit {
    users = [];

    constructor(private _userService: UserService) {
        
    }

    getHeroes() {
        this._userService.getUsers()
            .subscribe(
                users => this.users = users,
                error => console.error(error)
                );
    }

    ngOnInit() {
        this.getHeroes();
    }
}