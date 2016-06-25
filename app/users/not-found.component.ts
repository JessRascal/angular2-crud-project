import { Component } from '@angular/core';

import { ROUTER_DIRECTIVES, Router } from '@angular/router-deprecated';

@Component({
    template: `
        <h3>Not Found</h3>
        <a [routerLink]="['UserList']" class="btn btn-primary">Back to Users</a>
    `,
    directives: [ ROUTER_DIRECTIVES ]
})

export class NotFoundComponent { }