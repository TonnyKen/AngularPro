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
var user_1 = require('../shared/models/user');
var UserFormComponent = (function () {
    function UserFormComponent() {
        this.userCreated = new core_1.EventEmitter();
        this.newUser = new user_1.User();
        this.active = true;
    }
    UserFormComponent.prototype.onSubmit = function () {
        var _this = this;
        // emit event
        this.userCreated.emit({ user: this.newUser });
        this.newUser = new user_1.User();
        this.active = false;
        setTimeout(function () { return _this.active = true; }, 0);
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], UserFormComponent.prototype, "userCreated", void 0);
    UserFormComponent = __decorate([
        core_1.Component({
            selector: 'user-form',
            styles: ["\n\t\tform {\n\t\t\tpadding: 10px;\n\t\t\tbackground: #ECF0F1;\n\t\t\tborder-radius: 3px;\n\t\t}\n\t"],
            template: "\n\t\t<form action=\"\" #form=\"ngForm\" *ngIf=\"active\" (ngSubmit)=\"onSubmit()\">\n\t\t\t{{form.valid}}\n\t\t\t<div class=\"form-group\" [ngClass]=\"{ 'has-error': name.invalid && name.touched }\">\n\t\t\t\t<input type=\"text\" class=\"form-control\" name=\"name\" \n\t\t\t\t[(ngModel)]=\"newUser.name\" #name=\"ngModel\" placeholder=\"name\" equired/>\n\n\t\t\t\t<span class=\"help-block\" *ngIf=\"name.invalid && name.touched\">Name is required</span>\n\t\t\t</div>\n\n\t\t\t<div class=\"form-group\" [ngClass]=\"{ 'has-error': nickname.invalid && nickname.touched }\">\n\t\t\t\t<input type=\"text\" class=\"form-control\" name=\"nickname\" \n\t\t\t\t[(ngModel)]=\"newUser.nickname\" #nickname=\"ngModel\" placeholder=\"nickname\" required/>\n\n\t\t\t\t<span class=\"help-block\" *ngIf=\"nickname.invalid && nickname.touched\">Nickname is required</span>\n\t\t\t</div>\n\n\t\t\t<button type=\"submit\" class=\"btn btn-lg btn-block btn-primary\" \n\t\t\t[disabled]=\"form.invalid\">\n\t\t\tCreate User\n\t\t\t</button>\n\n\n\t\t</form>\n\t"
        }), 
        __metadata('design:paramtypes', [])
    ], UserFormComponent);
    return UserFormComponent;
}());
exports.UserFormComponent = UserFormComponent;
//# sourceMappingURL=user-form.component.js.map