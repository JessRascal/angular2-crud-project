import { Component, Input } from '@angular/core';

@Component ({
    selector: 'spinner',
    template: '<i *ngIf="visible" class="fa fa-circle-o-notch fa-spin fa-3x" aria-hidden="true"></i>',
    styles: [`
    
    `]
})

export class SpinnerComponent {
    @Input() visible = true;
}