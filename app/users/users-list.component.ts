import { Component, OnInit } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { Router, ROUTER_DIRECTIVES } from '@angular/router-deprecated';

import { UserService } from './user.service';

import { SpinnerComponent } from '../shared/spinner.component';

@Component({
    selector: 'users-list',
    templateUrl: 'app/users/users-list.component.html',
    styles: [`
        i {
            cursor: pointer;
        }
    `],
    directives: [ ROUTER_DIRECTIVES, SpinnerComponent ],
    providers: [ HTTP_PROVIDERS, UserService ]
})

export class UsersListComponent implements OnInit {
    isLoading = true;
    users = [];
    userId: string;

    constructor(private _userService: UserService) {
        
    }

    getUsers() {
        this._userService.getUsers()
            .subscribe(
                users => {
                    this.users = users,
                    this.isLoading = false
                },
                error => console.error(error)
                );
    }

    deleteUser(user) {
        if (confirm('Are you sure you want to delete ' + user.name + '?')) {
			var index = this.users.indexOf(user)
			// Remove the user based on its index.
            this.users.splice(index, 1);

			this._userService.deleteUser(user.id)
				.subscribe(res =>
                    console.log('User ' + user.name + ' deleted'), // Debugging
					err => {
						alert("Unable to delete the user. Please try again.");
                        // Revert the view back to its original state
                        // by putting the user object at its original index.
						this.users.splice(index, 0, user);
					});
        }
    }

    ngOnInit() {
        this.getUsers();
    }
}