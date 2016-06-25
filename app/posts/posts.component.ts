import { Component } from '@angular/core';
import { RouteConfig, RouterOutlet } from '@angular/router-deprecated';

import { PostsListComponent } from './posts-list.component';

@RouteConfig([
    { path: '/', name: 'PostsList', component: PostsListComponent, useAsDefault: true }
])

@Component({
    selector: 'posts',
    template: `
        <router-outlet></router-outlet>
    `,
    directives: [ RouterOutlet ]
})

export class PostsComponent { }