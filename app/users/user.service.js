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
require('rxjs/add/operator/catch');
var UserService = (function () {
    function UserService(_http) {
        this._http = _http;
        this._usersUrl = "http://jsonplaceholder.typicode.com/users";
    }
    // GET all users
    UserService.prototype.getUsers = function () {
        return this._http.get(this._usersUrl)
            .map(function (res) { return res.json(); }, function (err) { return console.log(err); });
    };
    // GET single user
    UserService.prototype.getSingleUser = function (id) {
        return this._http.get(this._usersUrl + '/' + id)
            .map(function (res) { return res.json(); }, function (err) { return console.error(err); });
    };
    // POST new user
    UserService.prototype.createUser = function (user) {
        return this._http.post(this._usersUrl, JSON.stringify(user))
            .map(function (res) { return res.json(); }, function (err) { return console.log(err); });
    };
    // PUT user's details
    UserService.prototype.updateUser = function (user) {
        return this._http.put(this._usersUrl + '/' + user.id, JSON.stringify(user))
            .map(function (res) { return res.json(); }, function (err) { return console.log(err); });
    };
    // Delete user
    UserService.prototype.deleteUser = function (id) {
        return this._http.delete(this._usersUrl + '/' + id)
            .map(function (res) { return res.json(); }, function (err) { return console.log(err); });
    };
    // Save user (POST or PUT)
    UserService.prototype.saveUser = function (user) {
        if (user.id) {
            return this.updateUser(user);
        }
        return this.createUser(user);
    };
    UserService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map