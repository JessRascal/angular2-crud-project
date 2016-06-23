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
var user_service_1 = require('./user.service');
var users_list_component_1 = require('./users-list.component');
var UsersHomeComponent = (function () {
    function UsersHomeComponent() {
    }
    UsersHomeComponent = __decorate([
        router_deprecated_1.RouteConfig([
            { path: '/', name: 'UserList', component: users_list_component_1.UsersListComponent, useAsDefault: true },
        ]),
        core_1.Component({
            template: "\n    <router-outlet></router-outlet>\n    ",
            directives: [router_deprecated_1.ROUTER_DIRECTIVES],
            providers: [router_deprecated_1.ROUTER_PROVIDERS, user_service_1.UserService]
        }), 
        __metadata('design:paramtypes', [])
    ], UsersHomeComponent);
    return UsersHomeComponent;
}());
exports.UsersHomeComponent = UsersHomeComponent;
//# sourceMappingURL=users-home.component.js.map