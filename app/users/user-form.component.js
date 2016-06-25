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
var router_deprecated_1 = require('@angular/router-deprecated');
var http_1 = require('@angular/http');
var user_1 = require('./user');
var user_service_1 = require('./user.service');
var UserFormComponent = (function () {
    function UserFormComponent(formB, _userService, _router, _routeParams) {
        this._userService = _userService;
        this._router = _router;
        this._routeParams = _routeParams;
        this.user = new user_1.User();
        this.tempUser = new user_1.User();
        this.userForm = formB.group({
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
    UserFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userId = this._routeParams.get('id');
        this.pageTitle = this.userId ? "Edit User" : "Create User";
        // Return if there is no user id in the RouteParams
        if (!this.userId)
            return;
        this._userService.getSingleUser(this.userId)
            .subscribe(function (user) { return _this.user = user; }, function (response) {
            if (response.status == 404) {
                _this._router.navigate(['NotFound']);
            }
        });
    };
    UserFormComponent.prototype.routerCanDeactivate = function (next, previous) {
        if (this.userForm.dirty) {
            return confirm('All unsaved changes will be lost, leave anyway?');
        }
    };
    UserFormComponent.prototype.onSubmit = function (formValue) {
        var _this = this;
        this.user = this.userForm.value;
        // Assign the ID to the user if available (i.e. existing user).
        this.user.id = this.userId;
        // console.log('User Id: ', this.user.id); // Debugging
        this._userService.saveUser(this.user)
            .subscribe(function (res) {
            _this.leaveForm();
            console.log(res);
        });
    };
    UserFormComponent.prototype.leaveForm = function () {
        // TODO: this.addUserForm.markAsPristine() when available.
        // This will stop the confirmation being displayed when saving.
        this._router.navigate(['UserList']);
    };
    UserFormComponent = __decorate([
        core_1.Component({
            selector: 'add-user',
            templateUrl: 'app/users/user-form.component.html',
            providers: [user_service_1.UserService, http_1.HTTP_PROVIDERS]
        }), 
        __metadata('design:paramtypes', [common_1.FormBuilder, user_service_1.UserService, router_deprecated_1.Router, router_deprecated_1.RouteParams])
    ], UserFormComponent);
    return UserFormComponent;
}());
exports.UserFormComponent = UserFormComponent;
//# sourceMappingURL=user-form.component.js.map