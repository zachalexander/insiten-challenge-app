webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@import url(\"https://fonts.googleapis.com/css?family=Roboto:400,500,700\");\n@import url(\"https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css\");\n* {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box; }\nhtml {\n  font-size: 10px;\n  height: 100%; }\nul {\n  padding: 0; }\nli {\n  list-style: none; }\nbutton {\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  background-color: #fff;\n  border: 1px solid #333;\n  padding: 7px 10px 7px 10px;\n  border-radius: 3px;\n  -webkit-transition: all 0.3s ease 0s;\n  transition: all 0.3s ease 0s; }\nbutton:hover {\n  background: #f7f7f7;\n  color: #333; }\nbutton.button-small {\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  border: 1px solid #333;\n  padding: 4px 6px 4px 6px;\n  border-radius: 3px;\n  font-size: 0.8em;\n  -webkit-transition: all 0.3s ease 0s;\n  transition: all 0.3s ease 0s; }\ninput.button-default {\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  background-color: #0a72ca;\n  border: 1px solid #333;\n  padding: 7px 10px 7px 10px;\n  border-radius: 3px;\n  -webkit-transition: all 0.3s ease 0s;\n  transition: all 0.3s ease 0s; }\n.fa {\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  vertical-align: middle;\n  padding-bottom: 3px; }\n.button-success {\n  background-color: #79a379;\n  color: #fff; }\n.button-delete {\n  background-color: #cc7a7a;\n  color: #fff; }\n.button-edit {\n  background-color: #3ab0e2;\n  color: #fff; }\n.button-pending {\n  background-color: #dd9354;\n  color: #fff; }\n.button-declined {\n  background-color: #cc2323;\n  color: #fff; }\n.button-approved {\n  background-color: #79a379;\n  color: #fff; }\n.button-default {\n  background-color: #0a72ca;\n  color: #fff; }\n.button-reg {\n  background-color: #fff;\n  color: #333; }\n.button-new-target {\n  background-color: #fff;\n  color: #333; }\n.button-new-target:hover {\n  background: #79a379;\n  color: #fff; }\n.sorry-message {\n  text-align: center;\n  vertical-align: middle;\n  padding-top: 40px; }\na,\na:link,\na:visited,\na:hover,\na:focus,\na:active {\n  color: #333;\n  text-decoration: none; }\ntable {\n  text-align: center; }\nth {\n  text-align: center; }\n@media screen and (max-width: 480px) {\n  body {\n    font-family: \"Roboto\", \"Helvetica\", \"Arial\", sans-serif;\n    font-size: 1.25rem;\n    height: 100%;\n    display: -ms-grid;\n    display: grid; }\n  .form-container {\n    background-color: #fff;\n    padding-bottom: 40px;\n    margin-right: 10px;\n    margin-left: 10px; } }\n@media screen and (min-width: 480px) and (max-width: 520px) {\n  body {\n    font-family: \"Roboto\", \"Helvetica\", \"Arial\", sans-serif;\n    font-size: 1.25rem;\n    height: 100%;\n    display: -ms-grid;\n    display: grid; }\n  .form-container {\n    background-color: #fff;\n    padding-bottom: 40px;\n    padding-right: 20px;\n    padding-left: 20px;\n    max-width: 500px;\n    margin: auto; } }\n@media screen and (min-width: 520px) and (max-width: 768px) {\n  body {\n    font-family: \"Roboto\", \"Helvetica\", \"Arial\", sans-serif;\n    font-size: 1.5rem;\n    height: 100%;\n    display: -ms-grid;\n    display: grid; }\n  .form-container {\n    background-color: #fff;\n    padding-bottom: 40px;\n    padding-right: 20px;\n    padding-left: 20px;\n    max-width: 500px;\n    margin: auto; } }\n@media screen and (min-width: 768px) and (max-width: 959px) {\n  body {\n    font-family: \"Roboto\", \"Helvetica\", \"Arial\", sans-serif;\n    font-size: 1.5rem;\n    background-color: #f7f7f7;\n    height: 100%;\n    display: -ms-grid;\n    display: grid; }\n  .form-container {\n    background-color: #fff;\n    padding-bottom: 40px;\n    padding-right: 20px;\n    padding-left: 20px;\n    max-width: 500px;\n    border: 1px solid #ddd;\n    margin: auto; } }\n@media screen and (min-width: 959px) {\n  body {\n    font-family: \"Roboto\", \"Helvetica\", \"Arial\", sans-serif;\n    font-size: 1.5rem;\n    background-color: #f7f7f7;\n    height: 100%;\n    display: -ms-grid;\n    display: grid; }\n  .form-container {\n    background-color: #fff;\n    padding-bottom: 40px;\n    padding-right: 20px;\n    padding-left: 20px;\n    max-width: 500px;\n    border: 1px solid #ddd;\n    margin: auto; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_loading__ = __webpack_require__("../../../../ngx-loading/ngx-loading/ngx-loading.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_newtarget_newtarget_component__ = __webpack_require__("../../../../../src/app/components/newtarget/newtarget.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_edit_edit_component__ = __webpack_require__("../../../../../src/app/components/edit/edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_delete_delete_component__ = __webpack_require__("../../../../../src/app/components/delete/delete.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_target_service__ = __webpack_require__("../../../../../src/app/services/target.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_8__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'newtarget', component: __WEBPACK_IMPORTED_MODULE_7__components_newtarget_newtarget_component__["a" /* NewtargetComponent */] },
    { path: 'edit/:id', component: __WEBPACK_IMPORTED_MODULE_9__components_edit_edit_component__["a" /* EditComponent */] },
    { path: 'delete/:id', component: __WEBPACK_IMPORTED_MODULE_10__components_delete_delete_component__["a" /* DeleteComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_newtarget_newtarget_component__["a" /* NewtargetComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_edit_edit_component__["a" /* EditComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_delete_delete_component__["a" /* DeleteComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* RouterModule */].forRoot(appRoutes),
                __WEBPACK_IMPORTED_MODULE_5_ngx_loading__["a" /* LoadingModule */]
            ],
            exports: [],
            providers: [__WEBPACK_IMPORTED_MODULE_11__services_target_service__["a" /* TargetService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/components/delete/delete.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!loadEditPage\" class = \"container-wrapper\">\n  <div class = \"form-container\">\n    <div class = \"sorry-message\">\n      <h5>Sorry, but this target does not exist.</h5>\n      <a [routerLink]=\"['']\"><button  *ngIf=\"!loadingEditPage\" class=\"button-default\" type=\"button\" aria-haspopup=\"true\" aria-expanded=\"true\">\n      Go Back\n      </button></a>\n    </div>\n  </div>\n</div>\n\n<div *ngIf=\"loadEditPage\" class = \"container-wrapper\">\n  <div class = \"form-container\">\n    <ngx-loading [show]=\"loading\" [config]=\"{ backdropBorderRadius: '14px' }\"></ngx-loading>\n    <h4 class=\"page-header\">Are you sure you want to delete this entry?</h4>\n\n    <!-- Shows validation messages -->\n    <div [ngClass] = \"messageClass\">{{ message }}</div>\n    <!-- End of validation messages -->\n\n    <!-- Status of Acquisition Button -->\n    <label for=\"statusChange\">Status of Acquisition</label>\n    <div class=\"dropdown\">\n      <button *ngIf=\"buttonChange\" class=\"btn btn-primary dropdown-toggle\" type=\"button\" id=\"dropdownMenu1\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"true\">\n      Status\n      <span class=\"caret\"></span></button>\n      <button *ngIf=\"buttonChangeApproved\" class=\"button-approved\" type=\"button\" id=\"dropdownMenu1\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"true\">\n      Approved\n      </button>\n      <button *ngIf=\"buttonChangeDeclined\" class=\"button-declined\" type=\"button\" id=\"dropdownMenu1\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"true\">\n      Declined\n      </button>\n      <button *ngIf=\"buttonChangePending\" class=\"button-pending\" type=\"button\" id=\"dropdownMenu1\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"true\">\n      Pending\n      </button>\n      <button *ngIf=\"buttonChangeResearching\" class=\"button-edit\" type=\"button\" id=\"dropdownMenu1\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"true\">\n      Researching\n      </button>\n    </div>\n    <!-- End of Button -->\n\n    <hr>\n\n    <!-- Beginning of Form -->\n    <form [formGroup]=\"form\" (submit)=\"deleteTargetFinal()\">\n      <!-- Input Fields Start -->\n        <label for=\"companyName\">Company Name</label>\n        <div [ngClass]=\"{'has-error': (form.controls.companyName.errors && form.controls.companyName.dirty) , 'has-success': (!form.controls.companyName.errors)}\">\n          <input type=\"text\" [(ngModel)]=\"target.companyName\" formControlName=\"companyName\" autocomplete=\"off\" class=\"form-control\">\n          <ul class=\"help-block\">\n            <li *ngIf=\"form.controls.companyName.errors?.required && form.controls.companyName.dirty\">This field is required.</li>\n            <li *ngIf=\"form.controls.companyName.errors?.minlength || form.controls.companyName.errors?.maxlength\">Minimum characters: 2, Maximum characters: 45</li>\n          </ul>\n        </div>\n        <label for=\"location\">Location</label>\n        <div [ngClass]=\"{'has-error': (form.controls.location.errors && form.controls.location.dirty) , 'has-success': (!form.controls.location.errors)}\">\n          <input type=\"text\" [(ngModel)]=\"target.location\"  formControlName=\"location\" autocomplete=\"off\" class=\"form-control\">\n          <ul class=\"help-block\">\n            <li *ngIf=\"form.controls.location.errors?.required && form.controls.location.dirty\">This field is required.</li>\n            <li *ngIf=\"form.controls.location.errors?.minlength || form.controls.location.errors?.maxlength\">Minimum characters: 2, Maximum characters: 30</li>\n          </ul>\n        </div>\n\n        <label for=\"keyContact1\">Key Contact #1</label>\n        <div [ngClass]=\"{'has-error': (form.controls.keyContact1.errors && form.controls.keyContact1.dirty) , 'has-success': (!form.controls.keyContact1.errors)}\">\n          <input type=\"text\" [(ngModel)]=\"target.keyContact1\" formControlName=\"keyContact1\" autocomplete=\"off\" class=\"form-control\">\n          <ul class=\"help-block\">\n            <li *ngIf=\"form.controls.keyContact1.errors?.required && form.controls.keyContact1.dirty\">This field is required.</li>\n            <li *ngIf=\"form.controls.keyContact1.errors?.minlength || form.controls.keyContact1.errors?.maxlength\">Minimum characters: 2, Maximum characters: 45</li>\n          </ul>\n        </div>\n\n        <label for=\"keyContact2\">Key Contact #2</label>\n        <div [ngClass]=\"{'has-error': (form.controls.keyContact2.errors && form.controls.keyContact2.dirty)}\">\n          <input type=\"text\" [(ngModel)]=\"target.keyContact2\" formControlName=\"keyContact2\" autocomplete=\"off\" class=\"form-control\">\n          <ul class=\"help-block\">\n            <li *ngIf=\"form.controls.keyContact2.errors?.required && form.controls.keyContact2.dirty\">This field is required.</li>\n            <li *ngIf=\"form.controls.keyContact2.errors?.minlength || form.controls.keyContact2.errors?.maxlength\">Minimum characters: 2, Maximum characters: 45</li>\n          </ul>\n        </div>\n\n        <label for=\"financialPerformance\">Financial Performance</label><br />\n        <small>Please enter a quick note about the prospect's recent financial performance.</small>\n        <div [ngClass]=\"{'has-error': (form.controls.financialPerformance.errors && form.controls.financialPerformance.dirty) , 'has-success': (!form.controls.financialPerformance.errors)}\">\n          <input type=\"text\" [(ngModel)]=\"target.financialPerformance\" formControlName=\"financialPerformance\" autocomplete=\"off\" class=\"form-control\">\n          <ul class=\"help-block\">\n            <li *ngIf=\"form.controls.financialPerformance.errors?.required && form.controls.financialPerformance.dirty\">This field is required.</li>\n            <li *ngIf=\"form.controls.financialPerformance.errors?.minlength || form.controls.financialPerformance.errors?.maxlength\">Minimum characters: 2, Maximum characters: 70</li>\n          </ul>\n        </div>\n        <!-- Input Fields End -->\n\n        <!-- Submit Button -->\n        <input [disabled]=\"!form.valid\" type=\"submit\" class=\"button-delete\" value=\"Delete Target\"><a [routerLink]=\"['']\">&nbsp;<button class=\"button-reg\" type=\"button\" aria-haspopup=\"true\" aria-expanded=\"true\">\n          Go Back\n          </button></a>\n    </form>\n    <!-- End of Form -->\n  </div>\n  <!-- End of form container -->\n</div>\n<!-- End of container-wrapper -->\n"

/***/ }),

/***/ "../../../../../src/app/components/delete/delete.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "input.button-delete {\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  background-color: #cc7a7a;\n  border: 1px solid #333;\n  padding: 7px 10px 7px 10px;\n  border-radius: 3px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/delete/delete.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeleteComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_target_service__ = __webpack_require__("../../../../../src/app/services/target.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DeleteComponent = (function () {
    function DeleteComponent(location, activatedRoute, targetService, router, formBuilder) {
        this.location = location;
        this.activatedRoute = activatedRoute;
        this.targetService = targetService;
        this.router = router;
        this.formBuilder = formBuilder;
        this.loading = false;
        this.target = {
            status: String,
            companyName: String,
            location: String,
            keyContact1: String,
            keyContact2: String,
            financialPerformance: String
        };
        this.buttonChange = true;
        this.buttonChangeApproved = false;
        this.buttonChangePending = false;
        this.buttonChangeDeclined = false;
        this.buttonChangeResearching = false;
        this.statusArray = ['Researching', 'Pending', 'Approved', 'Declined'];
        this.loadEditPage = true;
        this.createForm();
    }
    DeleteComponent.prototype.createForm = function () {
        this.form = this.formBuilder.group({
            companyName: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* Validators */].minLength(2),
                    __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* Validators */].maxLength(45)
                ])],
            location: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* Validators */].minLength(2),
                    __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* Validators */].maxLength(30)
                ])],
            keyContact1: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* Validators */].minLength(2),
                    __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* Validators */].maxLength(30)
                ])],
            keyContact2: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* Validators */].minLength(2),
                    __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* Validators */].maxLength(30)
                ])],
            financialPerformance: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* Validators */].minLength(2),
                    __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* Validators */].maxLength(70)
                ])],
        });
    };
    DeleteComponent.prototype.statusSelectUpdate = function (x) {
        this.status = x;
        console.log(this.status);
        if (x == "Approved") {
            this.buttonChange = false;
            this.buttonChangePending = false;
            this.buttonChangeDeclined = false;
            this.buttonChangeResearching = false;
            this.buttonChangeApproved = true;
        }
        if (x == "Pending") {
            this.buttonChange = false;
            this.buttonChangeApproved = false;
            this.buttonChangeDeclined = false;
            this.buttonChangeResearching = false;
            this.buttonChangePending = true;
        }
        if (x == "Declined") {
            this.buttonChange = false;
            this.buttonChangeApproved = false;
            this.buttonChangePending = false;
            this.buttonChangeResearching = false;
            this.buttonChangeDeclined = true;
        }
        if (x == "Researching") {
            this.buttonChange = false;
            this.buttonChangeApproved = false;
            this.buttonChangePending = false;
            this.buttonChangeDeclined = false;
            this.buttonChangeResearching = true;
        }
    };
    DeleteComponent.prototype.deleteTargetFinal = function () {
        var _this = this;
        this.target.status = this.status;
        this.targetService.deleteTarget(this.currentUrl.id).subscribe(function (data) {
            if (!data.success) {
                console.log('this did not work');
            }
            else {
                _this.loading = true;
                setTimeout(function () {
                    _this.router.navigate(['']);
                    _this.loading = false;
                }, 3000);
            }
        });
    };
    DeleteComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.currentUrl = this.activatedRoute.snapshot.params;
        this.targetService.getSingleTarget(this.currentUrl.id).subscribe(function (data) {
            if (!data.success) {
                console.log('this did not work');
                _this.loadEditPage = false;
            }
            else {
                _this.loadEditPage = true;
                _this.target = data.targets;
                var x = _this.target.status;
                _this.statusSelectUpdate(x);
            }
        });
    };
    DeleteComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-delete',
            template: __webpack_require__("../../../../../src/app/components/delete/delete.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/delete/delete.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common__["f" /* Location */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__services_target_service__["a" /* TargetService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */]])
    ], DeleteComponent);
    return DeleteComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/edit/edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!loadEditPage\" class = \"container-wrapper\">\n  <div class = \"form-container\">\n    <div class = \"sorry-message\">\n      <h5>Sorry, but this target does not exist.</h5>\n      <a [routerLink]=\"['']\"><button  *ngIf=\"!loadingEditPage\" class=\"button-default\" type=\"button\" aria-haspopup=\"true\" aria-expanded=\"true\">\n      Go Back\n      </button></a>\n    </div>\n  </div>\n</div>\n\n<div *ngIf=\"loadEditPage\" class = \"container-wrapper\">\n  <div class = \"form-container\">\n      <ngx-loading [show]=\"loading\" [config]=\"{ backdropBorderRadius: '14px' }\"></ngx-loading>\n      <h4 class=\"page-header\">Edit Target Information</h4>\n\n      <!-- Shows validation messages -->\n      <div [ngClass] = \"messageClass\">{{ message }}</div>\n      <!-- End of validation messages -->\n\n      <!-- Status of Acquisition Button -->\n      <label for=\"statusChange\">Status of Acquisition</label>\n      <div class=\"dropdown\">\n        <button *ngIf=\"buttonChange\" class=\"btn btn-primary dropdown-toggle\" type=\"button\" id=\"dropdownMenu1\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"true\">\n        Status\n        <span class=\"caret\"></span></button>\n        <button *ngIf=\"buttonChangeApproved\" class=\"button-approved\" type=\"button\" id=\"dropdownMenu1\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"true\">\n        Approved\n        </button>\n        <button *ngIf=\"buttonChangeDeclined\" class=\"button-declined\" type=\"button\" id=\"dropdownMenu1\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"true\">\n        Declined\n        </button>\n        <button *ngIf=\"buttonChangePending\" class=\"button-pending\" type=\"button\" id=\"dropdownMenu1\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"true\">\n        Pending\n        </button>\n        <button *ngIf=\"buttonChangeResearching\" class=\"button-edit\" type=\"button\" id=\"dropdownMenu1\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"true\">\n        Researching\n        </button>\n        <ul class=\"dropdown-menu\" aria-labelledby=\"dropdownMenu1\">\n          <li><a *ngFor=\"let x of statusArray\" (click)=\"statusSelectUpdate(x)\">{{x}}</a></li>\n        </ul>\n      </div>\n      <!-- End of Button -->\n\n      <hr>\n\n      <!-- Beginning of Form -->\n      <form [formGroup]=\"form\" (submit)=\"updateTargetSubmit()\">\n        <!-- Input Fields Start -->\n          <label for=\"companyName\">Company Name</label>\n          <div [ngClass]=\"{'has-error': (form.controls.companyName.errors && form.controls.companyName.dirty) , 'has-success': (!form.controls.companyName.errors)}\">\n            <input type=\"text\" [(ngModel)]=\"target.companyName\" formControlName=\"companyName\" autocomplete=\"off\" class=\"form-control\">\n            <ul class=\"help-block\">\n              <li *ngIf=\"form.controls.companyName.errors?.required && form.controls.companyName.dirty\">This field is required.</li>\n              <li *ngIf=\"form.controls.companyName.errors?.minlength || form.controls.companyName.errors?.maxlength\">Minimum characters: 2, Maximum characters: 45</li>\n            </ul>\n          </div>\n          <label for=\"location\">Location</label>\n          <div [ngClass]=\"{'has-error': (form.controls.location.errors && form.controls.location.dirty) , 'has-success': (!form.controls.location.errors)}\">\n            <input type=\"text\" [(ngModel)]=\"target.location\"  formControlName=\"location\" autocomplete=\"off\" class=\"form-control\">\n            <ul class=\"help-block\">\n              <li *ngIf=\"form.controls.location.errors?.required && form.controls.location.dirty\">This field is required.</li>\n              <li *ngIf=\"form.controls.location.errors?.minlength || form.controls.location.errors?.maxlength\">Minimum characters: 2, Maximum characters: 30</li>\n            </ul>\n          </div>\n\n          <label for=\"keyContact1\">Key Contact #1</label>\n          <div [ngClass]=\"{'has-error': (form.controls.keyContact1.errors && form.controls.keyContact1.dirty) , 'has-success': (!form.controls.keyContact1.errors)}\">\n            <input type=\"text\" [(ngModel)]=\"target.keyContact1\" formControlName=\"keyContact1\" autocomplete=\"off\" class=\"form-control\">\n            <ul class=\"help-block\">\n              <li *ngIf=\"form.controls.keyContact1.errors?.required && form.controls.keyContact1.dirty\">This field is required.</li>\n              <li *ngIf=\"form.controls.keyContact1.errors?.minlength || form.controls.keyContact1.errors?.maxlength\">Minimum characters: 2, Maximum characters: 45</li>\n            </ul>\n          </div>\n\n          <label for=\"keyContact2\">Key Contact #2</label>\n          <div [ngClass]=\"{'has-error': (form.controls.keyContact2.errors && form.controls.keyContact2.dirty)}\">\n            <input type=\"text\" [(ngModel)]=\"target.keyContact2\" formControlName=\"keyContact2\" autocomplete=\"off\" class=\"form-control\">\n            <ul class=\"help-block\">\n              <li *ngIf=\"form.controls.keyContact2.errors?.required && form.controls.keyContact2.dirty\">This field is required.</li>\n              <li *ngIf=\"form.controls.keyContact2.errors?.minlength || form.controls.keyContact2.errors?.maxlength\">Minimum characters: 2, Maximum characters: 45</li>\n            </ul>\n          </div>\n\n          <label for=\"financialPerformance\">Financial Performance</label><br />\n          <small>Please enter a quick note about the prospect's recent financial performance.</small>\n          <div [ngClass]=\"{'has-error': (form.controls.financialPerformance.errors && form.controls.financialPerformance.dirty) , 'has-success': (!form.controls.financialPerformance.errors)}\">\n            <input type=\"text\" [(ngModel)]=\"target.financialPerformance\" formControlName=\"financialPerformance\" autocomplete=\"off\" class=\"form-control\">\n            <ul class=\"help-block\">\n              <li *ngIf=\"form.controls.financialPerformance.errors?.required && form.controls.financialPerformance.dirty\">This field is required.</li>\n              <li *ngIf=\"form.controls.financialPerformance.errors?.minlength || form.controls.financialPerformance.errors?.maxlength\">Minimum characters: 2, Maximum characters: 70</li>\n            </ul>\n          </div>\n          <!-- Input Fields End -->\n\n          <!-- Submit Button -->\n          <input [disabled]=\"!form.valid\" type=\"submit\" class=\"button-default\" value=\"Submit Changes\"><a [routerLink]=\"['']\">&nbsp;<button class=\"button-reg\" type=\"button\" aria-haspopup=\"true\" aria-expanded=\"true\">\n            Go Back\n          </button></a>\n      </form>\n      <!-- End of Form -->\n    </div>\n    <!-- End of form container -->\n</div>\n<!-- End of container-wrapper -->\n"

/***/ }),

/***/ "../../../../../src/app/components/edit/edit.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/edit/edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_target_service__ = __webpack_require__("../../../../../src/app/services/target.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EditComponent = (function () {
    function EditComponent(location, activatedRoute, targetService, router, formBuilder) {
        this.location = location;
        this.activatedRoute = activatedRoute;
        this.targetService = targetService;
        this.router = router;
        this.formBuilder = formBuilder;
        this.loading = false;
        this.target = {
            status: String,
            companyName: String,
            location: String,
            keyContact1: String,
            keyContact2: String,
            financialPerformance: String
        };
        this.buttonChange = true;
        this.buttonChangeApproved = false;
        this.buttonChangePending = false;
        this.buttonChangeDeclined = false;
        this.buttonChangeResearching = false;
        this.statusArray = ['Researching', 'Pending', 'Approved', 'Declined'];
        this.loadEditPage = true;
        this.createForm();
    }
    EditComponent.prototype.createForm = function () {
        this.form = this.formBuilder.group({
            companyName: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* Validators */].minLength(2),
                    __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* Validators */].maxLength(45)
                ])],
            location: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* Validators */].minLength(2),
                    __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* Validators */].maxLength(30)
                ])],
            keyContact1: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* Validators */].minLength(2),
                    __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* Validators */].maxLength(30)
                ])],
            keyContact2: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* Validators */].minLength(2),
                    __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* Validators */].maxLength(30)
                ])],
            financialPerformance: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* Validators */].minLength(2),
                    __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* Validators */].maxLength(70)
                ])],
        });
    };
    EditComponent.prototype.statusSelectUpdate = function (x) {
        this.status = x;
        console.log(this.status);
        if (x == "Approved") {
            this.buttonChange = false;
            this.buttonChangePending = false;
            this.buttonChangeDeclined = false;
            this.buttonChangeResearching = false;
            this.buttonChangeApproved = true;
        }
        if (x == "Pending") {
            this.buttonChange = false;
            this.buttonChangeApproved = false;
            this.buttonChangeDeclined = false;
            this.buttonChangeResearching = false;
            this.buttonChangePending = true;
        }
        if (x == "Declined") {
            this.buttonChange = false;
            this.buttonChangeApproved = false;
            this.buttonChangePending = false;
            this.buttonChangeResearching = false;
            this.buttonChangeDeclined = true;
        }
        if (x == "Researching") {
            this.buttonChange = false;
            this.buttonChangeApproved = false;
            this.buttonChangePending = false;
            this.buttonChangeDeclined = false;
            this.buttonChangeResearching = true;
        }
    };
    EditComponent.prototype.updateTargetSubmit = function () {
        var _this = this;
        this.target.status = this.status;
        this.targetService.editTarget(this.target).subscribe(function (data) {
            if (!data.success) {
                console.log('this did not work');
            }
            else {
                _this.loading = true;
                setTimeout(function () {
                    _this.router.navigate(['']);
                    _this.loading = false;
                }, 2000);
            }
        });
    };
    EditComponent.prototype.backButton = function () {
        this.location.back();
    };
    EditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.currentUrl = this.activatedRoute.snapshot.params;
        this.targetService.getSingleTarget(this.currentUrl.id).subscribe(function (data) {
            if (!data.success) {
                console.log('this did not work');
                _this.loadEditPage = false;
            }
            else {
                _this.loadEditPage = true;
                _this.target = data.targets;
                var x = _this.target.status;
                _this.statusSelectUpdate(x);
            }
        });
    };
    EditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-edit',
            template: __webpack_require__("../../../../../src/app/components/edit/edit.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/edit/edit.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common__["f" /* Location */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__services_target_service__["a" /* TargetService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */]])
    ], EditComponent);
    return EditComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class = \"container\">\n  <ngx-loading [show]=\"loading\" [config]=\"{ backdropBorderRadius: '14px' }\"></ngx-loading>\n    <h4 class = \"new-target-title\">Create a New Target Profile for Potential Acquisitions</h4>\n    <a [routerLink]=\"['/newtarget/']\"><button class = \"button-new-target\">Create New Target&nbsp;<i class=\"fa fa-angle-double-right\" aria-hidden=\"true\"></i></button></a>\n  <hr>\n\n  <h4>List of Potential Targets</h4>\n  <table class=\"table table-hover\">\n    <thead class=\"thead-dark\">\n      <tr>\n        <th class=\"date\">Status</th>\n        <th class=\"date\">Company Name</th>\n        <th class=\"update\">Location</th>\n        <th class=\"update\">Key Contact</th>\n        <th class=\"date\">Financial Information</th>\n        <th class=\"date\">Edit/Delete</th>\n      </tr>\n    </thead>\n      <tbody>\n        <tr *ngFor=\"let targets of targetPosts\">\n          <td class=\"col-xs-1\"><button class=\"button-small\" [ngClass]=\"{\n          'button-declined':targets.status === 'Declined',\n          'button-approved':targets.status === 'Approved',\n          'button-pending':targets.status === 'Pending',\n          'button-edit':targets.status === 'Researching'\n          }\">{{ targets.status}}</button></td>\n          <td class=\"col-xs-2\">{{ targets.companyName}}</td>\n          <td class=\"col-xs-2\">{{ targets.location }}</td>\n          <td class=\"col-xs-2\">{{ targets.keyContact1 }}</td>\n          <td class=\"col-xs-3\">{{ targets.financialPerformance }}</td>\n          <td class=\"col-xs-1\">\n            <div class=\"dropdown\">\n              <button class=\"btn btn-default dropdown-toggle\" type=\"button\" id=\"dropdownMenu1\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"true\">\n                  <i class=\"fa fa-angle-down\" aria-hidden=\"true\"></i>\n                </button>\n              <ul class=\"dropdown-menu\" aria-labelledby=\"dropdownMenu1\">\n                <li><a [routerLink]=\"['/edit/', targets._id]\">Edit</a></li>\n                <li><a [routerLink]=\"['/delete/', targets._id]\">Delete</a></li>\n              </ul>\n            </div>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n\n  <h4>Full Look at Targets</h4>\n\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_target_service__ = __webpack_require__("../../../../../src/app/services/target.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = (function () {
    function HomeComponent(targetService) {
        this.targetService = targetService;
        this.loading = false;
    }
    // Retrieve all targets from the database
    HomeComponent.prototype.getAllTargets = function () {
        var _this = this;
        this.targetService.getAllTargets().subscribe(function (data) {
            _this.targetPosts = data.targets;
        });
    };
    HomeComponent.prototype.ngOnInit = function () {
        this.loading = true;
        this.getAllTargets();
        this.loading = false;
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/components/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_target_service__["a" /* TargetService */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/newtarget/newtarget.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class = \"container-wrapper\">\n  <div class = \"form-container\">\n      <ngx-loading [show]=\"loading\" [config]=\"{ backdropBorderRadius: '14px' }\"></ngx-loading>\n      <h4 class=\"page-header\">Create a New Target</h4>\n\n      <!-- Shows validation messages -->\n        <div [ngClass] = \"messageClass\">{{ message }}</div>\n      <!-- End of validation messages -->\n\n      <!-- Status of Acquisition Button -->\n      <label for=\"statusUpdate\">Status of Acquisition</label>\n      <div class=\"dropdown\">\n        <button *ngIf=\"buttonChange\" class=\"button-default\" type=\"button\" id=\"dropdownMenu1\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"true\">\n        Status\n        <span class=\"caret\"></span></button>\n        <button *ngIf=\"buttonChangeApproved\" class=\"button-approved\" type=\"button\" id=\"dropdownMenu1\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"true\">\n        Approved\n        </button>\n        <button *ngIf=\"buttonChangeDeclined\" class=\"button-declined\" type=\"button\" id=\"dropdownMenu1\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"true\">\n        Declined\n        </button>\n        <button *ngIf=\"buttonChangePending\" class=\"button-pending\" type=\"button\" id=\"dropdownMenu1\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"true\">\n        Pending\n        </button>\n        <button *ngIf=\"buttonChangeResearching\" class=\"button-edit\" type=\"button\" id=\"dropdownMenu1\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"true\">\n        Researching\n        </button>\n        <ul class=\"dropdown-menu\" aria-labelledby=\"dropdownMenu1\">\n          <li><a *ngFor=\"let x of statusArray\" (click)=\"statusSelect(x)\">{{x}}</a></li>\n        </ul>\n      </div>\n      <!-- End of Button -->\n      <hr>\n      <!-- Beginning of Form -->\n      <form [formGroup]=\"form\" (submit)=\"onTargetSubmit()\">\n        <!-- Input Fields Start -->\n          <label for=\"companyName\">Company Name</label>\n          <div [ngClass]=\"{'has-error': (form.controls.companyName.errors && form.controls.companyName.dirty) , 'has-success': (!form.controls.companyName.errors)}\">\n            <input type=\"text\" [(ngModel)]=\"companyName\" name=\"companyName\" formControlName=\"companyName\" autocomplete=\"off\" class=\"form-control\">\n            <ul class=\"help-block\">\n              <li *ngIf=\"form.controls.companyName.errors?.required && form.controls.companyName.dirty\">This field is required.</li>\n              <li *ngIf=\"form.controls.companyName.errors?.minlength || form.controls.companyName.errors?.maxlength\">Minimum characters: 2, Maximum characters: 45</li>\n            </ul>\n          </div>\n          <label for=\"location\">Location</label>\n          <div [ngClass]=\"{'has-error': (form.controls.location.errors && form.controls.location.dirty) , 'has-success': (!form.controls.location.errors)}\">\n            <input type=\"text\" [(ngModel)]=\"location\" name=\"location\" formControlName=\"location\" autocomplete=\"off\" class=\"form-control\">\n            <ul class=\"help-block\">\n              <li *ngIf=\"form.controls.location.errors?.required && form.controls.location.dirty\">This field is required.</li>\n              <li *ngIf=\"form.controls.location.errors?.minlength || form.controls.location.errors?.maxlength\">Minimum characters: 2, Maximum characters: 30</li>\n            </ul>\n          </div>\n          <label for=\"keyContact1\">Key Contact #1</label>\n          <div [ngClass]=\"{'has-error': (form.controls.keyContact1.errors && form.controls.keyContact1.dirty) , 'has-success': (!form.controls.keyContact1.errors)}\">\n            <input type=\"text\" [(ngModel)]=\"keyContact1\" name=\"keyContact1\" formControlName=\"keyContact1\" autocomplete=\"off\" class=\"form-control\">\n            <ul class=\"help-block\">\n              <li *ngIf=\"form.controls.keyContact1.errors?.required && form.controls.keyContact1.dirty\">This field is required.</li>\n              <li *ngIf=\"form.controls.keyContact1.errors?.minlength || form.controls.keyContact1.errors?.maxlength\">Minimum characters: 2, Maximum characters: 45</li>\n            </ul>\n          </div>\n          <a *ngIf=\"clickContacts1\" class=\"add-contact\" (click)=\"addContact1()\"> Add Another Contact </a>\n          <a *ngIf=\"lessContacts1\" class=\"add-contact\" (click)=\"removeContact1()\"> Do Not Add Another Contact </a><br/>\n          <label *ngIf=\"moreContacts1\" for=\"keyContact2\">Key Contact #2</label>\n          <div [ngClass]=\"{'has-error': (form.controls.keyContact2.errors && form.controls.keyContact2.dirty)}\">\n            <input *ngIf=\"moreContacts1\" type=\"text\" [(ngModel)]=\"keyContact2\" name=\"keyContact2\" formControlName=\"keyContact2\" autocomplete=\"off\" class=\"form-control\">\n            <ul class=\"help-block\">\n              <li *ngIf=\"form.controls.keyContact2.errors?.required && form.controls.keyContact2.dirty\">This field is required.</li>\n              <li *ngIf=\"form.controls.keyContact2.errors?.minlength || form.controls.keyContact2.errors?.maxlength\">Minimum characters: 2, Maximum characters: 45</li>\n            </ul>\n          </div>\n          <label for=\"financialPerformance\">Financial Performance</label><br />\n          <small>Please enter a quick note about the prospect's recent financial performance.</small>\n          <div [ngClass]=\"{'has-error': (form.controls.financialPerformance.errors && form.controls.financialPerformance.dirty) , 'has-success': (!form.controls.financialPerformance.errors)}\">\n            <input type=\"text\" [(ngModel)]=\"financialPerformance\" name=\"financialPerformance\" formControlName=\"financialPerformance\" autocomplete=\"off\" class=\"form-control\">\n            <ul class=\"help-block\">\n              <li *ngIf=\"form.controls.financialPerformance.errors?.required && form.controls.financialPerformance.dirty\">This field is required.</li>\n              <li *ngIf=\"form.controls.financialPerformance.errors?.minlength || form.controls.financialPerformance.errors?.maxlength\">Minimum characters: 2, Maximum characters: 70</li>\n            </ul>\n          </div>\n          <!-- Input Fields End -->\n\n          <!-- Submit Button -->\n          <input type=\"submit\" class=\"button-default\" value=\"Submit\"><a [routerLink]=\"['']\">&nbsp;<button class=\"button-reg\" type=\"button\" aria-haspopup=\"true\" aria-expanded=\"true\">\n            Go Back\n          </button></a>\n      </form>\n    </div>\n      <!-- End of Form -->\n  </div>\n"

/***/ }),

/***/ "../../../../../src/app/components/newtarget/newtarget.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "a.add-contact {\n  color: #3ab0e2; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/newtarget/newtarget.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewtargetComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_target_service__ = __webpack_require__("../../../../../src/app/services/target.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NewtargetComponent = (function () {
    function NewtargetComponent(targetService, formBuilder, router) {
        this.targetService = targetService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.loading = false;
        this.statusArray = ['Researching', 'Pending', 'Approved', 'Declined'];
        this.buttonChange = true;
        this.buttonChangeApproved = false;
        this.buttonChangePending = false;
        this.buttonChangeDeclined = false;
        this.buttonChangeResearching = false;
        this.moreContacts1 = false;
        this.clickContacts1 = true;
        this.moreContacts2 = false;
        this.clickContacts2 = false;
        this.lessContacts1 = false;
        this.lessContacts2 = false;
        this.createForm();
    }
    NewtargetComponent.prototype.createForm = function () {
        this.form = this.formBuilder.group({
            companyName: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* Validators */].minLength(2),
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* Validators */].maxLength(45)
                ])],
            location: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* Validators */].minLength(2),
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* Validators */].maxLength(30)
                ])],
            keyContact1: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* Validators */].minLength(2),
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* Validators */].maxLength(30)
                ])],
            keyContact2: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* Validators */].minLength(2),
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* Validators */].maxLength(30)
                ])],
            keyContact3: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* Validators */].minLength(2),
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* Validators */].maxLength(30)
                ])],
            financialPerformance: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* Validators */].minLength(2),
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* Validators */].maxLength(70)
                ])],
        });
    };
    NewtargetComponent.prototype.statusSelect = function (x) {
        this.statusUpdate = x;
        if (x == "Approved") {
            this.buttonChange = false;
            this.buttonChangePending = false;
            this.buttonChangeDeclined = false;
            this.buttonChangeResearching = false;
            this.buttonChangeApproved = true;
        }
        if (x == "Pending") {
            this.buttonChange = false;
            this.buttonChangeApproved = false;
            this.buttonChangeDeclined = false;
            this.buttonChangeResearching = false;
            this.buttonChangePending = true;
        }
        if (x == "Declined") {
            this.buttonChange = false;
            this.buttonChangeApproved = false;
            this.buttonChangePending = false;
            this.buttonChangeResearching = false;
            this.buttonChangeDeclined = true;
        }
        if (x == "Researching") {
            this.buttonChange = false;
            this.buttonChangeApproved = false;
            this.buttonChangePending = false;
            this.buttonChangeDeclined = false;
            this.buttonChangeResearching = true;
        }
    };
    NewtargetComponent.prototype.addContact1 = function () {
        this.moreContacts1 = true;
        this.clickContacts1 = false;
        this.lessContacts1 = true;
        this.clickContacts2 = true;
    };
    NewtargetComponent.prototype.removeContact1 = function () {
        this.moreContacts1 = false;
        this.clickContacts1 = true;
        this.lessContacts1 = false;
    };
    NewtargetComponent.prototype.onTargetSubmit = function () {
        var _this = this;
        var target = {
            status: this.statusUpdate,
            companyName: this.companyName,
            location: this.location,
            keyContact1: this.keyContact1,
            keyContact2: this.keyContact2,
            financialPerformance: this.financialPerformance
        };
        // Submit Post
        this.targetService.submitTarget(target).subscribe(function (data) {
            if (!data.success) {
                _this.messageClass = 'alert alert-danger';
                _this.message = data.message;
            }
            else {
                _this.messageClass = 'alert alert-success';
                _this.loading = true;
                _this.message = data.message;
                setTimeout(function () {
                    _this.router.navigate(['']);
                    _this.loading = false;
                }, 2000);
            }
        });
    };
    NewtargetComponent.prototype.ngOnInit = function () {
    };
    NewtargetComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-newtarget',
            template: __webpack_require__("../../../../../src/app/components/newtarget/newtarget.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/newtarget/newtarget.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_target_service__["a" /* TargetService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], NewtargetComponent);
    return NewtargetComponent;
}());



/***/ }),

/***/ "../../../../../src/app/services/target.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TargetService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TargetService = (function () {
    function TargetService(http) {
        this.http = http;
        this.domain = "";
    }
    TargetService.prototype.submitTarget = function (target) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.domain + '/targets/newTarget', target, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    TargetService.prototype.getAllTargets = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.domain + '/targets/allTargets', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    TargetService.prototype.getSingleTarget = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.domain + '/targets/singleTarget/' + id, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    TargetService.prototype.editTarget = function (target) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.put(this.domain + '/targets/updateTarget/', target, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    TargetService.prototype.deleteTarget = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.delete(this.domain + '/targets/deleteTarget/' + id, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    TargetService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], TargetService);
    return TargetService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map