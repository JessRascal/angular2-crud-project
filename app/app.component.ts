import { Component } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';

import { NavBarComponent } from './navbar.component';
import { HomeComponent } from './home.component';
import { UsersHomeComponent } from './users/users-home.component';
// import { PostsComponent } from './posts.component';

@RouteConfig([
    { path: '/', name: "Home", component: HomeComponent, useAsDefault: true },
    { path: '/users/...', name: 'Users', component: UsersHomeComponent },
    // { path: '/posts', name: 'Posts', component: PostsComponent },
    { path: '/*other', name: 'Other', redirectTo: ['Home'] }
])

@Component({
    selector: 'my-app',
    template: `
        <navbar></navbar>
        <div class="container">
            <router-outlet></router-outlet>
        </div>
    `,
    directives: [ ROUTER_DIRECTIVES, NavBarComponent ],
    providers: [ ROUTER_PROVIDERS ]
})

export class AppComponent {
    
}