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
var user_service_1 = require('./user.service');
var UsersListComponent = (function () {
    function UsersListComponent(_userService) {
        this._userService = _userService;
        this.users = [];
    }
    UsersListComponent.prototype.getUsers = function () {
        var _this = this;
        this._userService.getUsers()
            .subscribe(function (users) { return _this.users = users; }, function (error) { return console.error(error); });
    };
    UsersListComponent.prototype.ngOnInit = function () {
        this.getUsers();
    };
    UsersListComponent = __decorate([
        core_1.Component({
            selector: 'users-list',
            templateUrl: 'app/users/users-list.component.html',
            providers: [http_1.HTTP_PROVIDERS]
        }), 
        __metadata('design:paramtypes', [user_service_1.UserService])
    ], UsersListComponent);
    return UsersListComponent;
}());
exports.UsersListComponent = UsersListComponent;
//# sourceMappingURL=users-list.component.js.map