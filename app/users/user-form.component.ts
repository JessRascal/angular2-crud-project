import { Component, OnInit } from '@angular/core';
import { ControlGroup, FormBuilder, Validators } from '@angular/common';
import { CanDeactivate, Router, RouteParams } from '@angular/router-deprecated';
import { HTTP_PROVIDERS } from '@angular/http';

import { User } from './user';
import { UserService } from './user.service';

@Component({
    selector: 'add-user',
    templateUrl: 'app/users/user-form.component.html',
    providers: [ UserService, HTTP_PROVIDERS ]
})

export class UserFormComponent implements CanDeactivate {
    userForm: ControlGroup;
    user = new User();
    tempUser = new User();
    userId: string;
    pageTitle: string;

    constructor(formB: FormBuilder, private _userService: UserService, private _router: Router, private _routeParams: RouteParams) {
    this.userForm = formB.group({
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
        });
    }

    ngOnInit() {
        this.userId = this._routeParams.get('id');

        this.pageTitle = this.userId ? "Edit User" : "Create User";

        // Return if there is no user id in the RouteParams
        if (!this.userId)
            return;

        this._userService.getSingleUser(this.userId)
            .subscribe(
                user => this.user = user,
                response => {
                    if (response.status == 404) {
                        this._router.navigate(['NotFound']);
                    }
                });
    }

    routerCanDeactivate(next, previous) {
        if (this.userForm.dirty) {
            return confirm('All unsaved changes will be lost, leave anyway?');
        }
    }

    onSubmit(formValue: string) {
        this.user = this.userForm.value;
        // Assign the ID to the user if available (i.e. existing user).
        this.user.id = this.userId;
        // console.log('User Id: ', this.user.id); // Debugging

        this._userService.saveUser(this.user)
            .subscribe(res => {
                this.leaveForm();
                console.log(res);
            });
    }

    leaveForm() {
        // TODO: this.addUserForm.markAsPristine() when available.
        // This will stop the confirmation being displayed when saving.
        this._router.navigate(['UserList']);
    }
}