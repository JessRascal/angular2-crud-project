import { Component } from '@angular/core';
import { ControlGroup, FormBuilder, Validators } from '@angular/common';
import { CanDeactivate } from '@angular/router-deprecated';
import { HTTP_PROVIDERS } from '@angular/http';

import { User } from './user';
import { UserService } from './user.service';

@Component({
    selector: 'add-user',
    templateUrl: 'app/users/add-user.component.html',
    providers: [ UserService, HTTP_PROVIDERS ]
})

export class AddUserComponent implements CanDeactivate {
    addUserForm: ControlGroup;
    // user = new User() ??????

    constructor(formB: FormBuilder, private _userService: UserService) {
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

    onSubmit(formValue: string) {
        // this.user = this.addUserForm.value;
        // console.log(this.addUserForm.value)
        // this._userService.createUser(this.user)
        // console.log('Value submitted: ', formValue);
        // var oldPassword = this.addUserForm.find('oldPassword');
        // this.user.name = formValue['name'];
        console.log(this.user.name);
    }
}