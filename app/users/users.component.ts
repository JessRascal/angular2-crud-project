import { Component } from '@angular/core';
import { RouteConfig, RouterOutlet } from '@angular/router-deprecated';

import { UserService } from './user.service';

import { UsersListComponent } from './users-list.component';
import { AddUserComponent } from './add-user.component';

@RouteConfig([
    { path: '/', name: 'UserList', component: UsersListComponent, useAsDefault: true },
    { path: '/new', name: 'AddUser', component: AddUserComponent }
])

@Component({
    template: `
    <router-outlet></router-outlet>
    `,
    directives: [ RouterOutlet ]
})

export class UsersComponent { }