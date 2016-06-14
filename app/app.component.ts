import { Component } from '@angular/core';
import { NavBarComponent } from './navbar.component';

@Component({
    selector: 'my-app',
    template: `
        <navbar></navbar>
    `,
    directives: [ NavBarComponent ]
})

export class AppComponent {
    
}