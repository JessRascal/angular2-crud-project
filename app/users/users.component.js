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
var router_deprecated_1 = require('@angular/router-deprecated');
var users_list_component_1 = require('./users-list.component');
var add_user_component_1 = require('./add-user.component');
var UsersComponent = (function () {
    function UsersComponent() {
    }
    UsersComponent = __decorate([
        router_deprecated_1.RouteConfig([
            { path: '/', name: 'UserList', component: users_list_component_1.UsersListComponent, useAsDefault: true },
            { path: '/new', name: 'AddUser', component: add_user_component_1.AddUserComponent }
        ]),
        core_1.Component({
            template: "\n    <router-outlet></router-outlet>\n    ",
            directives: [router_deprecated_1.RouterOutlet]
        }), 
        __metadata('design:paramtypes', [])
    ], UsersComponent);
    return UsersComponent;
}());
exports.UsersComponent = UsersComponent;
//# sourceMappingURL=users.component.js.map