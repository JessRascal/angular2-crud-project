"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var http_1 = require('@angular/http');
var user_1 = require('./user');
var user_service_1 = require('./user.service');
var AddUserComponent = (function () {
    function AddUserComponent(formB, _userService) {
        this._userService = _userService;
        this.user = new user_1.User();
        this.addUserForm = formB.group({
            name: ['', common_1.Validators.required],
            email: ['', common_1.Validators.compose([
                    common_1.Validators.required,
                    common_1.Validators.pattern("[A-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?"),
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
    AddUserComponent.prototype.routerCanDeactivate = function (next, previous) {
        if (this.addUserForm.dirty) {
            return confirm('All unsaved changes will be lost, leave anyway?');
        }
    };
    AddUserComponent.prototype.onSubmit = function (formValue) {
        // this.user = this.addUserForm.value;
        // console.log(this.addUserForm.value)
        // this._userService.createUser(this.user)
        // console.log('Value submitted: ', formValue);
        // var oldPassword = this.addUserForm.find('oldPassword');
        // this.user.name = formValue['name'];
        // console.log(formValue);
        // this.user = User();
        // var name = this.addUserForm.controls['name'].value;
        this.user.name = this.addUserForm.controls['name'].value;
        console.log('Name in Object:', this.user.name);
        // console.log(this.user[name]);
        this._userService.createUser(this.user);
        // TODO: Go back to 'Users' (create goBack method)
    };
    AddUserComponent = __decorate([
        core_1.Component({
            selector: 'add-user',
            templateUrl: 'app/users/add-user.component.html',
            providers: [user_service_1.UserService, http_1.HTTP_PROVIDERS]
        }), 
        __metadata('design:paramtypes', [common_1.FormBuilder, user_service_1.UserService])
    ], AddUserComponent);
    return AddUserComponent;
}());
exports.AddUserComponent = AddUserComponent;
//# sourceMappingURL=add-user.component.js.map