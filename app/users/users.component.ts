import { Component } from '@angular/core';
import { RouteConfig, RouterOutlet } from '@angular/router-deprecated';

import { UserService } from './user.service';

import { UsersListComponent } from './users-list.component';
import { UserFormComponent } from './user-form.component';
import { NotFoundComponent } from './not-found.component';

@RouteConfig([
    { path: '/', name: 'UserList', component: UsersListComponent, useAsDefault: true },
    { path: '/new', name: 'CreateUser', component: UserFormComponent },
    { path: '/:id', name: 'EditUser', component: UserFormComponent },
    { path: '/not-found', name: 'NotFound', component: NotFoundComponent }
])

@Component({
    template: `
    <router-outlet></router-outlet>
    `,
    directives: [ RouterOutlet ]
})

export class UsersComponent { }