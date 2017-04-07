"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
        this.create = false;
        this.detailPage = false;
    }
    AppComponent.prototype.showCreatePage = function () {
        this.create = true;
    };
    AppComponent.prototype.createBackToListPage = function () {
        this.create = false;
    };
    AppComponent.prototype.submit = function () {
        this.create = false;
    };
    AppComponent.prototype.goDetail = function () {
        this.detailPage = true;
    };
    AppComponent.prototype.detailBackToListPage = function () {
        this.detailPage = false;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'eye-list',
        templateUrl: 'temp/list.html'
    })
], AppComponent);
exports.AppComponent = AppComponent;
var http_1 = require("angular2/http");
var params = new http_1.URLSearchParams();
params.set('name', 'huge');
console.log(params.toString()); // name=huge
this.http.get(StaticSettings.BASE_URL, { search: params }).subscribe();
this.http.post(url, params).subscribe(function (res) {
    console.log(res);
});
//# sourceMappingURL=app.component.js.map