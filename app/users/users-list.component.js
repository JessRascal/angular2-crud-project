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
var http_1 = require('@angular/http');
var router_deprecated_1 = require('@angular/router-deprecated');
var user_service_1 = require('./user.service');
var spinner_component_1 = require('../shared/spinner.component');
var UsersListComponent = (function () {
    function UsersListComponent(_userService) {
        this._userService = _userService;
        this.isLoading = true;
        this.users = [];
    }
    UsersListComponent.prototype.getUsers = function () {
        var _this = this;
        this._userService.getUsers()
            .subscribe(function (users) {
            _this.users = users,
                _this.isLoading = false;
        }, function (error) { return console.error(error); });
    };
    UsersListComponent.prototype.deleteUser = function (user) {
        var _this = this;
        if (confirm('Are you sure you want to delete ' + user.name + '?')) {
            var index = this.users.indexOf(user);
            // Remove the user based on its index.
            this.users.splice(index, 1);
            this._userService.deleteUser(user.id)
                .subscribe(function (res) {
                return console.log('User ' + user.name + ' deleted');
            }, // Debugging
            function (// Debugging
                err) {
                alert("Unable to delete the user. Please try again.");
                // Revert the view back to its original state
                // by putting the user object at its original index.
                _this.users.splice(index, 0, user);
            });
        }
    };
    UsersListComponent.prototype.ngOnInit = function () {
        this.getUsers();
    };
    UsersListComponent = __decorate([
        core_1.Component({
            selector: 'users-list',
            templateUrl: 'app/users/users-list.component.html',
            styles: ["\n        i {\n            cursor: pointer;\n        }\n    "],
            directives: [router_deprecated_1.ROUTER_DIRECTIVES, spinner_component_1.SpinnerComponent],
            providers: [http_1.HTTP_PROVIDERS, user_service_1.UserService]
        }), 
        __metadata('design:paramtypes', [user_service_1.UserService])
    ], UsersListComponent);
    return UsersListComponent;
}());
exports.UsersListComponent = UsersListComponent;
//# sourceMappingURL=users-list.component.js.map