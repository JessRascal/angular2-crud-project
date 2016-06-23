import { Component } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';

import { UserService } from './user.service';

import { AddUserComponent } from './add-user.component';
import { UsersListComponent } from './users-list.component';

@RouteConfig([
    { path: '/', name: 'UserList', component: UsersListComponent, useAsDefault: true },
    // { path: '/new', name: 'AddUser', component: AddUserComponent }
])

@Component({
    template: `
    <router-outlet></router-outlet>
    `,
    directives: [ ROUTER_DIRECTIVES ],
    providers: [ ROUTER_PROVIDERS, UserService ]
})

export class UsersHomeComponent { }