import { Component } from '@angular/core';
import { RouteConfig, RouterOutlet } from '@angular/router-deprecated';

import { UserService } from './user.service';

import { UsersListComponent } from './users-list.component';
import { CreateUserComponent } from './create-user.component';

@RouteConfig([
    { path: '/', name: 'UserList', component: UsersListComponent, useAsDefault: true },
    { path: '/new', name: 'CreateUser', component: CreateUserComponent }
])

@Component({
    template: `
    <router-outlet></router-outlet>
    `,
    directives: [ RouterOutlet ]
})

export class UsersComponent { }