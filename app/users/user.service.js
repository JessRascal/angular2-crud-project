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
require('rxjs/add/operator/map');
require('rxjs/add/operator/do'); //Debugging
require('rxjs/add/operator/catch');
var UserService = (function () {
    function UserService(_http) {
        this._http = _http;
        this._usersUrl = "http://jsonplaceholder.typicode.com/users";
    }
    UserService.prototype.getUsers = function () {
        return this._http.get(this._usersUrl)
            .map(function (res) { return res.json(); });
        //TODO: Catch any errors.
    };
    UserService.prototype.createUser = function (user) {
        return this._http.post(this._usersUrl, JSON.stringify(user))
            .map(function (res) { return res.json(); })
            .subscribe(function (data) { return console.log('Server Response: ', data); });
    };
    UserService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map