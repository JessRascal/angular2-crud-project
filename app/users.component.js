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
var add_user_component_1 = require('./add-user.component');
var UsersComponent = (function () {
    function UsersComponent(_userService) {
        this._userService = _userService;
        this.users = [];
    }
    UsersComponent.prototype.getUsers = function () {
        var _this = this;
        this._userService.getUsers()
            .subscribe(function (users) { return _this.users = users; }, function (error) { return console.error(error); });
    };
    UsersComponent.prototype.ngOnInit = function () {
        this.getUsers();
    };
    UsersComponent = __decorate([
        router_deprecated_1.RouteConfig([
            { path: '/new', name: 'AddUser', component: add_user_component_1.AddUserComponent }
        ]),
        core_1.Component({
            selector: 'users',
            templateUrl: 'app/users.component.html',
            providers: [http_1.HTTP_PROVIDERS, user_service_1.UserService],
            directives: [router_deprecated_1.ROUTER_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [user_service_1.UserService])
    ], UsersComponent);
    return UsersComponent;
}());
exports.UsersComponent = UsersComponent;
//# sourceMappingURL=users.component.js.map