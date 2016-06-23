import { Component } from '@angular/core';
import { ControlGroup, FormBuilder, Validators } from '@angular/common';
import { CanDeactivate } from '@angular/router-deprecated';

@Component({
    selector: 'add-user',
    templateUrl: 'app/add-user.component.html'
})

export class AddUserComponent implements CanDeactivate {
    addUserForm: ControlGroup;

    constructor(formB: FormBuilder) {
        this.addUserForm = formB.group({
            name: ['', Validators.required],
            email: ['', Validators.compose([
                Validators.required,
                Validators.pattern("[A-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?"),
            ])],
            phone: [''],
            address: formB.group({
                street: [''],
                suite: [''],
                city: [''],
                zip: ['']
            })
        })
    }

    routerCanDeactivate(next, previous) {
        if (this.addUserForm.dirty) {
            return confirm('All unsaved changes will be lost, leave anyway?');
        }
    }

}