(self["webpackChunkbduke_dev"] = self["webpackChunkbduke_dev"] || []).push([["main"],{

/***/ 8255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ ((module) => {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(() => {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = () => ([]);
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 8255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _components_webpages_home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/webpages/home/home.component */ 5166);
/* harmony import */ var _components_webpages_about_about_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/webpages/about/about.component */ 3524);
/* harmony import */ var _components_webpages_contact_contact_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/webpages/contact/contact.component */ 4024);
/* harmony import */ var _components_webpages_css_slider_css_slider_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/webpages/css-slider/css-slider.component */ 4245);
/* harmony import */ var _components_webpages_work_work_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/webpages/work/work.component */ 5676);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);








const routes = [
    { path: '', component: _components_webpages_home_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent },
    { path: 'about', component: _components_webpages_about_about_component__WEBPACK_IMPORTED_MODULE_1__.AboutComponent },
    { path: 'contact', component: _components_webpages_contact_contact_component__WEBPACK_IMPORTED_MODULE_2__.ContactComponent },
    { path: 'css-slider', component: _components_webpages_css_slider_css_slider_component__WEBPACK_IMPORTED_MODULE_3__.CssSliderComponent },
    { path: 'work', component: _components_webpages_work_work_component__WEBPACK_IMPORTED_MODULE_4__.WorkComponent }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _components_nav_nav_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/nav/nav.component */ 994);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/footer/footer.component */ 4662);







function AppComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "div", 3);
} }
class AppComponent {
    constructor(router) {
        this.router = router;
        this.title = '';
        this.router.events.subscribe(event => {
            if (_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.production && event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__.NavigationEnd) {
                gtag('config', 'UA-89022005-1', { 'page_path': event.urlAfterRedirects });
            }
        });
        let path = localStorage.getItem('path-bd');
        if (path) {
            localStorage.removeItem('path-bd');
            this.router.navigate([path]);
        }
    }
    ngOnInit() {
        this.router.events.subscribe((event) => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__.NavigationEnd) {
                //console.log(event);
                this.title = event.url;
                //console.log(this.title);
            }
        });
    }
    getDeepestTitle(routeSnapshot) {
        var title = routeSnapshot.data ? routeSnapshot.data['title'] : '';
        if (routeSnapshot.firstChild) {
            title = this.getDeepestTitle(routeSnapshot.firstChild) || title;
        }
        return title;
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 6, vars: 1, consts: [[1, "wrapper"], ["class", "nav-spacer", 4, "ngIf"], [1, "content"], [1, "nav-spacer"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, AppComponent_div_2_Template, 1, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.title !== "/");
    } }, directives: [_components_nav_nav_component__WEBPACK_IMPORTED_MODULE_1__.NavComponent, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterOutlet, _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__.FooterComponent], styles: [".wrapper[_ngcontent-%COMP%] {\n  min-height: 100%;\n  position: relative;\n}\n\n.content[_ngcontent-%COMP%] {\n  padding-bottom: 8em;\n  \n}\n\n.nav-spacer[_ngcontent-%COMP%] {\n  height: calc(64px + 2em);\n}\n\n@media only screen and (max-width: 749px) {\n  .content[_ngcontent-%COMP%] {\n    padding-bottom: 10em !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFFQTtFQUNFLG1CQUFBO0VBQ0EsaUNBQUE7QUFDRjs7QUFFQTtFQUNFLHdCQUFBO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLCtCQUFBO0VBQ0Y7QUFDRiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud3JhcHBlciB7XHJcbiAgbWluLWhlaWdodDogMTAwJTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5jb250ZW50IHtcclxuICBwYWRkaW5nLWJvdHRvbTogOGVtO1xyXG4gIC8qIEhlaWdodCBvZiB0aGUgZm9vdGVyIGVsZW1lbnQgKi9cclxufVxyXG5cclxuLm5hdi1zcGFjZXIge1xyXG4gIGhlaWdodDogY2FsYyg2NHB4ICsgMmVtKTtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NDlweCkge1xyXG4gIC5jb250ZW50IHtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMGVtICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser */ 1570);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _components_nav_nav_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/nav/nav.component */ 994);
/* harmony import */ var _components_webpages_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/webpages/home/home.component */ 5166);
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/footer/footer.component */ 4662);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _components_webpages_about_about_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/webpages/about/about.component */ 3524);
/* harmony import */ var _components_webpages_work_work_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/webpages/work/work.component */ 5676);
/* harmony import */ var _components_webpages_css_slider_css_slider_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/webpages/css-slider/css-slider.component */ 4245);
/* harmony import */ var _components_webpages_contact_contact_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/webpages/contact/contact.component */ 4024);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2316);












class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        _components_nav_nav_component__WEBPACK_IMPORTED_MODULE_2__.NavComponent,
        _components_webpages_home_home_component__WEBPACK_IMPORTED_MODULE_3__.HomeComponent,
        _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__.FooterComponent,
        _components_webpages_about_about_component__WEBPACK_IMPORTED_MODULE_5__.AboutComponent,
        _components_webpages_work_work_component__WEBPACK_IMPORTED_MODULE_6__.WorkComponent,
        _components_webpages_css_slider_css_slider_component__WEBPACK_IMPORTED_MODULE_7__.CssSliderComponent,
        _components_webpages_contact_contact_component__WEBPACK_IMPORTED_MODULE_8__.ContactComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule] }); })();


/***/ }),

/***/ 4662:
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterComponent": () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

class FooterComponent {
    constructor() {
        this.year = 0;
    }
    ngOnInit() {
        this.year = (new Date()).getFullYear();
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 21, vars: 1, consts: [[1, "footer-content"], [1, "buttons-wrapper"], [1, "buttons"], ["target", "_blank", "href", "https://www.linkedin.com/in/brandon-duke-6519b5168/", "title", "Find me on LinkedIn"], ["src", "../../../assets/linkedin.svg"], ["target", "_blank", "href", "https://github.com/bduke-dev", "title", "Find me on GitHub", 1, "github"], ["src", "../../../assets/github.svg"], ["target", "_blank", "href", "https://gitlab.com/bduke-dev", "title", "Find me on GitLab"], ["src", "../../../assets/gitlab.svg"], ["target", "_blank", "href", "/contents/resume.pdf", "title", "Get a copy of my Resume"], ["src", "../../../assets/resume.svg"], [1, "footer-accent"], ["id", "year"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "LinkedIn");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "GitHub");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "GitLab");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "R\u00E9sum\u00E9");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Brandon Duke - ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.year);
    } }, styles: [".footer-content[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 70%;\n}\n\n.footer-accent[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 30%;\n  background-color: #5f5f5f;\n  text-align: center;\n  position: relative;\n}\n\n.footer-accent[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  margin: 0 auto;\n  left: 0;\n  right: 0;\n  transform: translateY(-50%);\n  font-size: 1.5em;\n}\n\n.buttons-wrapper[_ngcontent-%COMP%] {\n  height: 100%;\n  margin: 0 auto;\n}\n\n.buttons[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  align-content: center;\n  flex-wrap: wrap;\n  justify-content: space-around;\n}\n\n.buttons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.2em;\n  height: 2em;\n  text-align: center;\n  text-decoration: none;\n  border-radius: 3px;\n  color: white;\n  background-color: #0065c4;\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);\n  transition: all 0.2s ease-in-out;\n  width: 8em;\n  margin: 0.2em 0;\n}\n\n.buttons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);\n}\n\n.buttons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n\n.buttons[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 1.2em;\n  margin-left: 0.5em;\n}\n\n\n\n@media only screen and (min-width: 750px) {\n  .buttons-wrapper[_ngcontent-%COMP%] {\n    width: 50%;\n  }\n}\n\n\n\n@media only screen and (max-width: 749px) {\n  .buttons-wrapper[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  footer[_ngcontent-%COMP%] {\n    height: 10em !important;\n  }\n}\n\n\n\nhtml[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  height: 100%;\n}\n\nfooter[_ngcontent-%COMP%] {\n  background: #787878;\n  width: 100%;\n  height: 8em;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcc2Nzc1xcX2hlbHBlcnNcXF92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLFdBQUE7RUFDQSxXQUFBO0FBREY7O0FBSUE7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQURGOztBQUVFO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsY0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsMkJBQUE7RUFDQSxnQkFBQTtBQUFKOztBQUlBO0VBQ0UsWUFBQTtFQUNBLGNBQUE7QUFERjs7QUFJQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSw2QkFBQTtBQURGOztBQUlBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUdBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EseUJDaERXO0VEaURYLCtHQUFBO0VBRUEsZ0NBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtBQUpGOztBQU9BO0VBQ0UsMEVBQUE7QUFKRjs7QUFPQTtFQUNFLHFCQUFBO0FBSkY7O0FBT0E7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7QUFKRjs7QUFPQSxrQ0FBQTs7QUFFQTtFQUNFO0lBQ0UsVUFBQTtFQUxGO0FBQ0Y7O0FBUUEsdUJBQUE7O0FBRUE7RUFDRTtJQUNFLFdBQUE7RUFQRjs7RUFVQTtJQUNFLHVCQUFBO0VBUEY7QUFDRjs7QUFVQSx5QkFBQTs7QUFFQTs7RUFFRSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7QUFURjs7QUFZQTtFQUNFLG1CQ3BHVTtFRHFHVixXQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7QUFURiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vc2Nzcy9faGVscGVycy92YXJpYWJsZXNcIjtcclxuXHJcbi5mb290ZXItY29udGVudCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA3MCU7XHJcbn1cclxuXHJcbi5mb290ZXItYWNjZW50IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDMwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZW4oJGZvb3Rlcl9jb2xvciwgMTAlKTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHAge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgfVxyXG59XHJcblxyXG4uYnV0dG9ucy13cmFwcGVyIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuXHJcbi5idXR0b25zIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxufVxyXG5cclxuLmJ1dHRvbnMgYSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMS4yZW07XHJcbiAgLy93aWR0aDogMTAwJTtcclxuICAvL2hlaWdodDogMTAwJTtcclxuICBoZWlnaHQ6IDJlbTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGZvb3Rlcl9jb2xvcl9idXR0b247XHJcbiAgYm94LXNoYWRvdzogMCAycHggMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAxcHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKSxcclxuICAgIDAgM3B4IDFweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcclxuICB3aWR0aDogOGVtO1xyXG4gIG1hcmdpbjogMC4yZW0gMDtcclxufVxyXG5cclxuLmJ1dHRvbnMgYTpob3ZlciB7XHJcbiAgYm94LXNoYWRvdzogMCAxMHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjE5KSwgMCA2cHggNnB4IHJnYmEoMCwgMCwgMCwgMC4yMyk7XHJcbn1cclxuXHJcbi5idXR0b25zIGEgZGl2IHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IC8vdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxufVxyXG5cclxuLmJ1dHRvbnMgaW1nIHtcclxuICBoZWlnaHQ6IDEuMmVtO1xyXG4gIG1hcmdpbi1sZWZ0OiAwLjVlbTtcclxufVxyXG5cclxuLypTQ1JFRU4gU0laRTogV0lERSAgfHwgU1VCLVBBR0VTKi9cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzUwcHgpIHtcclxuICAuYnV0dG9ucy13cmFwcGVyIHtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgfVxyXG59XHJcblxyXG4vKlNDUkVFTiBTSVpFOiBOQVJST1cgKi9cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzQ5cHgpIHtcclxuICAuYnV0dG9ucy13cmFwcGVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgZm9vdGVyIHtcclxuICAgIGhlaWdodDogMTBlbSAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxuLypGT09URVI+IEtFRVAgQVQgQk9UVE9NKi9cclxuXHJcbmh0bWwsXHJcbmJvZHkge1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuZm9vdGVyIHtcclxuICBiYWNrZ3JvdW5kOiAkZm9vdGVyX2NvbG9yO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogOGVtO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3R0b206IDA7XHJcbiAgbGVmdDogMDtcclxufVxyXG4iLCIkYmR1a2VfYmx1ZTogIzAwNjVjNDtcclxuXHJcbi8vUExTIFJFRE8gVkFSU1xyXG4kbWFpbkNvbG9yOiAjNzg3ODc4O1xyXG4kbWFpbkFjY2VudDogIzAwNjVjNDtcclxuLy9HbG9ibGEgVmFyaWFibGVzXHJcbiRiYWNrZ3JvdW5kQ29sb3I6ICNmOGY4Zjg7XHJcbiRmb250Q29sb3I6ICMyZjJmMmY7XHJcbiRob3ZlckNvbG9yOiAjMDA2NWM0O1xyXG4vL1xyXG4kbmF2X2NvbG9yOiAjMDA2NWM0O1xyXG4kbmF2VGV4dDogd2hpdGU7XHJcbiRuYXZBY2NlbnQ6ICM4Nzg3ODc7XHJcbi8vXHJcbiRoYW1DaXJjbGU6IHdoaXRlO1xyXG4vL1xyXG4kbWFpbkNvbG9yU2hhZGU6ICM4Nzg3ODc7XHJcbiRuYXZIYW06ICRob3ZlckNvbG9yO1xyXG5cclxuJGZvb3Rlcl9jb2xvcjogJG1haW5Db2xvcjtcclxuJGZvb3Rlcl9jb2xvcl9idXR0b246ICRtYWluQWNjZW50O1xyXG5cclxuJGNhcmRCYWNrZ3JvdW5kOiB3aGl0ZTtcclxuIl19 */"] });


/***/ }),

/***/ 994:
/*!*************************************************!*\
  !*** ./src/app/components/nav/nav.component.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavComponent": () => (/* binding */ NavComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_services_general_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/general.service */ 1864);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 1258);




class NavComponent {
    constructor(gs) {
        this.gs = gs;
        this.checked = true;
        this.scrollPosition = 0;
    }
    ngOnInit() {
        this.checked = this.gs.screenSize() === 'lg';
    }
    ngAfterViewInit() {
        this.scrollPosition = window.scrollY;
    }
    onScroll(event) {
        //console.log('scroll pos: ' + this.scrollPosition);
        if (!this.scrollPosition.toString()) {
            // wasn't set yet
            this.scrollPosition = 0;
        }
        //console.log('scroll y: ' + window.scrollY);
        const up = window.scrollY - this.scrollPosition < 0;
        //console.log('up ? ' + up);
        this.scrollPosition = window.scrollY;
        const delta = up ? 1 : -1;
        //console.log('delta : ' + delta);
        //console.log('--end--');
        if (window.innerWidth > 768) {
            if (window.scrollY < 40) {
                this.checked = true;
            }
            else {
                this.checked = false;
            }
        }
    }
    onResize(event) {
        if (this.resizeTimer != null) {
            window.clearTimeout(this.resizeTimer);
        }
        this.resizeTimer = window.setTimeout(() => {
            if (window.innerWidth > 768) {
                this.checked = true;
            }
            else {
                this.checked = false;
            }
        }, 200);
    }
}
NavComponent.ɵfac = function NavComponent_Factory(t) { return new (t || NavComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_general_service__WEBPACK_IMPORTED_MODULE_0__.GeneralService)); };
NavComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: NavComponent, selectors: [["app-nav"]], hostBindings: function NavComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("scroll", function NavComponent_scroll_HostBindingHandler($event) { return ctx.onScroll($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveWindow"])("resize", function NavComponent_resize_HostBindingHandler($event) { return ctx.onResize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveWindow"]);
    } }, decls: 20, vars: 1, consts: [["id", "menu-trigger", "type", "checkbox", 3, "ngModel", "ngModelChange"], [1, "menu-opener"], ["for", "menu-trigger"], [1, "menu-opener-inner"], ["routerLink", "", "id", "home"], ["id", "logo", "src", "../../../assets/BD.svg"], [1, "menu"], [1, "menu-inner"], ["routerLink", "about", "routerLinkActive", "active-link", 1, "menu-link"], ["routerLink", "work", "routerLinkActive", "active-link", 1, "menu-link"], ["routerLink", "css-slider", "routerLinkActive", "active-link", 1, "menu-link"], ["routerLink", "contact", "routerLinkActive", "active-link", 1, "menu-link"]], template: function NavComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "input", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function NavComponent_Template_input_ngModelChange_0_listener($event) { return ctx.checked = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "nav", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "nav", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Work");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "CSS Slider");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.checked);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkActive], styles: ["a[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  height: 100%;\n}\n\n.menu-opener[_ngcontent-%COMP%], .menu-opener[_ngcontent-%COMP%]:hover, .menu-opener-inner[_ngcontent-%COMP%], .menu-opener-inner[_ngcontent-%COMP%]::before, .menu-opener-inner[_ngcontent-%COMP%]::after {\n  transition: 250ms all;\n}\n\n.menu[_ngcontent-%COMP%] {\n  transition: width 0.25s, 0.25s background 0.25s;\n  font-family: \"TitilliumWeb-Regular\";\n}\n\n#menu-trigger[_ngcontent-%COMP%] {\n  display: none;\n}\n\n#menu-trigger[_ngcontent-%COMP%]:checked    ~ .menu[_ngcontent-%COMP%] {\n  transition: width 0.25s;\n}\n\n.menu-opener[_ngcontent-%COMP%] {\n  height: 64px;\n  position: fixed;\n  top: 1em;\n  left: 1em;\n  -webkit-user-select: none;\n  user-select: none;\n  z-index: 11;\n}\n\n.menu-opener[_ngcontent-%COMP%] {\n  background: #0065c4;\n}\n\n.menu-opener[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  width: 64px;\n  height: 100%;\n  display: inline-block;\n  cursor: pointer;\n}\n\n.menu-opener-inner[_ngcontent-%COMP%] {\n  background: gray;\n  height: 0.5rem;\n  margin-left: 0.75rem;\n  margin-top: 1.75rem;\n  width: 2.5rem;\n}\n\n.menu-opener-inner[_ngcontent-%COMP%]::before, .menu-opener-inner[_ngcontent-%COMP%]::after {\n  background: gray;\n  content: \"\";\n  display: block;\n  height: 0.5rem;\n  width: 2.5rem;\n}\n\n.menu-opener-inner[_ngcontent-%COMP%]::before {\n  transform: translateY(-0.75rem);\n}\n\n.menu-opener-inner[_ngcontent-%COMP%]::after {\n  transform: translateY(0.25rem);\n}\n\n.menu-opener[_ngcontent-%COMP%]   #home[_ngcontent-%COMP%] {\n  display: inline;\n}\n\n.menu-opener[_ngcontent-%COMP%]   #logo[_ngcontent-%COMP%] {\n  height: 80%;\n  margin: 5% 0.75rem 5% 0;\n}\n\n#menu-trigger[_ngcontent-%COMP%]:checked    ~ .menu-opener[_ngcontent-%COMP%]    > label[_ngcontent-%COMP%]    > .menu-opener-inner[_ngcontent-%COMP%] {\n  background: transparent;\n}\n\n#menu-trigger[_ngcontent-%COMP%]:checked    ~ .menu-opener[_ngcontent-%COMP%]    > label[_ngcontent-%COMP%]    > .menu-opener-inner[_ngcontent-%COMP%]::before {\n  transform: translateY(0rem) rotate(-45deg);\n}\n\n#menu-trigger[_ngcontent-%COMP%]:checked    ~ .menu-opener[_ngcontent-%COMP%]    > label[_ngcontent-%COMP%]    > .menu-opener-inner[_ngcontent-%COMP%]::after {\n  transform: translateY(-0.5rem) translateX(0rem) rotate(45deg);\n}\n\n.menu[_ngcontent-%COMP%] {\n  overflow: hidden;\n  color: transparent;\n  height: 64px;\n  position: fixed;\n  top: 1em;\n  left: 1em;\n  -webkit-user-select: none;\n  user-select: none;\n  width: 64px;\n  z-index: 10;\n  padding-left: 128px;\n}\n\n#menu-trigger[_ngcontent-%COMP%]:checked    ~ .menu[_ngcontent-%COMP%] {\n  background: #0065c4;\n  width: calc(100% - 2em);\n}\n\n#menu-trigger[_ngcontent-%COMP%]:checked    ~ .menu[_ngcontent-%COMP%]    > .menu-inner[_ngcontent-%COMP%]    > .menu-link[_ngcontent-%COMP%] {\n  color: white;\n}\n\n.menu-inner[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  height: 100%;\n  list-style-type: none;\n  margin: 0;\n  \n  padding: 0;\n}\n\n.menu-link[_ngcontent-%COMP%] {\n  color: transparent;\n  display: flex;\n  flex: 1 1 auto;\n  font-size: 2rem;\n  font-weight: 100;\n  height: 100%;\n  text-align: center;\n  text-decoration: none;\n}\n\n.menu-link[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin: auto;\n}\n\n@media screen and (max-width: 768px) {\n  .menu-inner[_ngcontent-%COMP%] {\n    display: block;\n    height: auto;\n  }\n\n  .menu-link[_ngcontent-%COMP%] {\n    padding: 5px 0;\n    font-size: 1.8em;\n  }\n\n  #menu-trigger[_ngcontent-%COMP%]:checked    ~ .menu[_ngcontent-%COMP%] {\n    height: 216px;\n  }\n\n  .menu[_ngcontent-%COMP%] {\n    transition: height 0.5s, 0.5s width 0.25s, 0.5s background 0.5s;\n  }\n\n  #menu-trigger[_ngcontent-%COMP%]:checked    ~ .menu[_ngcontent-%COMP%] {\n    transition: width 0.25s, 0.25s height 0.25s;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdi5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcc2Nzc1xcX2hlbHBlcnNcXF92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQURGOztBQUlBOzs7OztFQU1FLHFCQUFBO0FBREY7O0FBSUE7RUFDRSwrQ0FBQTtFQUNBLG1DQUFBO0FBREY7O0FBSUE7RUFDRSxhQUFBO0FBREY7O0FBSUE7RUFDRSx1QkFBQTtBQURGOztBQUlBO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLHlCQUFBO0VBR0EsaUJBQUE7RUFDQSxXQUFBO0FBREY7O0FBSUE7RUFDRSxtQkNqQ1U7QURnQ1o7O0FBSUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtBQURGOztBQUlBO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7QUFERjs7QUFHQTs7RUFFRSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7QUFBRjs7QUFFQTtFQUdFLCtCQUFBO0FBQ0Y7O0FBQ0E7RUFHRSw4QkFBQTtBQUVGOztBQUNBO0VBQ0UsZUFBQTtBQUVGOztBQUNBO0VBQ0UsV0FBQTtFQUNBLHVCQUFBO0FBRUY7O0FBQ0E7RUFDRSx1QkFBQTtBQUVGOztBQUNBO0VBR0UsMENBQUE7QUFFRjs7QUFDQTtFQUdFLDZEQUFBO0FBRUY7O0FBQ0E7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLHlCQUFBO0VBR0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FBRUY7O0FBQ0E7RUFDRSxtQkMvR1U7RURpSFYsdUJBQUE7QUFFRjs7QUFDQTtFQUNFLFlBQUE7QUFFRjs7QUFDQTtFQUlFLGFBQUE7RUFLQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLFNBQUE7RUFDQSxxQkFBQTtFQUNBLFVBQUE7QUFFRjs7QUFDQTtFQUNFLGtCQUFBO0VBSUEsYUFBQTtFQUlBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtBQUVGOztBQUFBO0VBQ0UsWUFBQTtBQUdGOztBQUFBO0VBQ0U7SUFDRSxjQUFBO0lBQ0EsWUFBQTtFQUdGOztFQURBO0lBQ0UsY0FBQTtJQUNBLGdCQUFBO0VBSUY7O0VBREE7SUFDRSxhQUFBO0VBSUY7O0VBREE7SUFDRSwrREFBQTtFQUlGOztFQURBO0lBQ0UsMkNBQUE7RUFJRjtBQUNGIiwiZmlsZSI6Im5hdi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi9zY3NzL19oZWxwZXJzL3ZhcmlhYmxlc1wiO1xyXG5cclxuYSB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4ubWVudS1vcGVuZXIsXHJcbi5tZW51LW9wZW5lcjpob3ZlcixcclxuLm1lbnUtb3BlbmVyLWlubmVyLFxyXG4ubWVudS1vcGVuZXItaW5uZXI6OmJlZm9yZSxcclxuLm1lbnUtb3BlbmVyLWlubmVyOjphZnRlciB7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAyNTBtcyBhbGw7XHJcbiAgdHJhbnNpdGlvbjogMjUwbXMgYWxsO1xyXG59XHJcblxyXG4ubWVudSB7XHJcbiAgdHJhbnNpdGlvbjogd2lkdGggMC4yNXMsIDAuMjVzIGJhY2tncm91bmQgMC4yNXM7XHJcbiAgZm9udC1mYW1pbHk6IFwiVGl0aWxsaXVtV2ViLVJlZ3VsYXJcIjtcclxufVxyXG5cclxuI21lbnUtdHJpZ2dlciB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuI21lbnUtdHJpZ2dlcjpjaGVja2VkIH4gLm1lbnUge1xyXG4gIHRyYW5zaXRpb246IHdpZHRoIDAuMjVzO1xyXG59XHJcblxyXG4ubWVudS1vcGVuZXIge1xyXG4gIGhlaWdodDogNjRweDtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAxZW07XHJcbiAgbGVmdDogMWVtO1xyXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcclxuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgei1pbmRleDogMTE7XHJcbn1cclxuXHJcbi5tZW51LW9wZW5lciB7XHJcbiAgYmFja2dyb3VuZDogJG5hdl9jb2xvcjtcclxufVxyXG5cclxuLm1lbnUtb3BlbmVyIGxhYmVsIHtcclxuICB3aWR0aDogNjRweDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLm1lbnUtb3BlbmVyLWlubmVyIHtcclxuICBiYWNrZ3JvdW5kOiBncmF5O1xyXG4gIGhlaWdodDogMC41cmVtO1xyXG4gIG1hcmdpbi1sZWZ0OiAwLjc1cmVtO1xyXG4gIG1hcmdpbi10b3A6IDEuNzVyZW07XHJcbiAgd2lkdGg6IDIuNXJlbTtcclxufVxyXG4ubWVudS1vcGVuZXItaW5uZXI6OmJlZm9yZSxcclxuLm1lbnUtb3BlbmVyLWlubmVyOjphZnRlciB7XHJcbiAgYmFja2dyb3VuZDogZ3JheTtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGhlaWdodDogMC41cmVtO1xyXG4gIHdpZHRoOiAyLjVyZW07XHJcbn1cclxuLm1lbnUtb3BlbmVyLWlubmVyOjpiZWZvcmUge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0wLjc1cmVtKTtcclxuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0wLjc1cmVtKTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTAuNzVyZW0pO1xyXG59XHJcbi5tZW51LW9wZW5lci1pbm5lcjo6YWZ0ZXIge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDAuMjVyZW0pO1xyXG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMC4yNXJlbSk7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDAuMjVyZW0pO1xyXG59XHJcblxyXG4ubWVudS1vcGVuZXIgI2hvbWUge1xyXG4gIGRpc3BsYXk6IGlubGluZTtcclxufVxyXG5cclxuLm1lbnUtb3BlbmVyICNsb2dvIHtcclxuICBoZWlnaHQ6IDgwJTtcclxuICBtYXJnaW46IDUlIDAuNzVyZW0gNSUgMDtcclxufVxyXG5cclxuI21lbnUtdHJpZ2dlcjpjaGVja2VkIH4gLm1lbnUtb3BlbmVyID4gbGFiZWwgPiAubWVudS1vcGVuZXItaW5uZXIge1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4jbWVudS10cmlnZ2VyOmNoZWNrZWQgfiAubWVudS1vcGVuZXIgPiBsYWJlbCA+IC5tZW51LW9wZW5lci1pbm5lcjo6YmVmb3JlIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcmVtKSByb3RhdGUoLTQ1ZGVnKTtcclxuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDByZW0pIHJvdGF0ZSgtNDVkZWcpO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcmVtKSByb3RhdGUoLTQ1ZGVnKTtcclxufVxyXG5cclxuI21lbnUtdHJpZ2dlcjpjaGVja2VkIH4gLm1lbnUtb3BlbmVyID4gbGFiZWwgPiAubWVudS1vcGVuZXItaW5uZXI6OmFmdGVyIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMC41cmVtKSB0cmFuc2xhdGVYKDByZW0pIHJvdGF0ZSg0NWRlZyk7XHJcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMC41cmVtKSB0cmFuc2xhdGVYKDByZW0pIHJvdGF0ZSg0NWRlZyk7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0wLjVyZW0pIHRyYW5zbGF0ZVgoMHJlbSkgcm90YXRlKDQ1ZGVnKTtcclxufVxyXG5cclxuLm1lbnUge1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGhlaWdodDogNjRweDtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAxZW07XHJcbiAgbGVmdDogMWVtO1xyXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcclxuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgd2lkdGg6IDY0cHg7XHJcbiAgei1pbmRleDogMTA7XHJcbiAgcGFkZGluZy1sZWZ0OiAxMjhweDtcclxufVxyXG5cclxuI21lbnUtdHJpZ2dlcjpjaGVja2VkIH4gLm1lbnUge1xyXG4gIGJhY2tncm91bmQ6ICRuYXZfY29sb3I7XHJcbiAgd2lkdGg6IC13ZWJraXQtY2FsYygxMDAlIC0gMmVtKTtcclxuICB3aWR0aDogY2FsYygxMDAlIC0gMmVtKTtcclxufVxyXG5cclxuI21lbnUtdHJpZ2dlcjpjaGVja2VkIH4gLm1lbnUgPiAubWVudS1pbm5lciA+IC5tZW51LWxpbmsge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLm1lbnUtaW5uZXIge1xyXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcclxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIC13ZWJraXQtYm94LW9yaWVudDogaG9yaXpvbnRhbDtcclxuICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcclxuICAtd2Via2l0LWZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgLW1zLWZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gIG1hcmdpbjogMDtcclxuICAvKm1hcmdpbi1sZWZ0OiA0cmVtOyovXHJcbiAgcGFkZGluZzogMDtcclxufVxyXG5cclxuLm1lbnUtbGluayB7XHJcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcclxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIC13ZWJraXQtYm94LWZsZXg6IDE7XHJcbiAgLXdlYmtpdC1mbGV4OiAxIDEgYXV0bztcclxuICAtbXMtZmxleDogMSAxIGF1dG87XHJcbiAgZmxleDogMSAxIGF1dG87XHJcbiAgZm9udC1zaXplOiAycmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuLm1lbnUtbGluayBsaSB7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gIC5tZW51LWlubmVyIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gIH1cclxuICAubWVudS1saW5rIHtcclxuICAgIHBhZGRpbmc6IDVweCAwO1xyXG4gICAgZm9udC1zaXplOiAxLjhlbTtcclxuICB9XHJcblxyXG4gICNtZW51LXRyaWdnZXI6Y2hlY2tlZCB+IC5tZW51IHtcclxuICAgIGhlaWdodDogMjE2cHg7XHJcbiAgfVxyXG5cclxuICAubWVudSB7XHJcbiAgICB0cmFuc2l0aW9uOiBoZWlnaHQgMC41cywgMC41cyB3aWR0aCAwLjI1cywgMC41cyBiYWNrZ3JvdW5kIDAuNXM7XHJcbiAgfVxyXG5cclxuICAjbWVudS10cmlnZ2VyOmNoZWNrZWQgfiAubWVudSB7XHJcbiAgICB0cmFuc2l0aW9uOiB3aWR0aCAwLjI1cywgMC4yNXMgaGVpZ2h0IDAuMjVzO1xyXG4gIH1cclxufVxyXG4iLCIkYmR1a2VfYmx1ZTogIzAwNjVjNDtcclxuXHJcbi8vUExTIFJFRE8gVkFSU1xyXG4kbWFpbkNvbG9yOiAjNzg3ODc4O1xyXG4kbWFpbkFjY2VudDogIzAwNjVjNDtcclxuLy9HbG9ibGEgVmFyaWFibGVzXHJcbiRiYWNrZ3JvdW5kQ29sb3I6ICNmOGY4Zjg7XHJcbiRmb250Q29sb3I6ICMyZjJmMmY7XHJcbiRob3ZlckNvbG9yOiAjMDA2NWM0O1xyXG4vL1xyXG4kbmF2X2NvbG9yOiAjMDA2NWM0O1xyXG4kbmF2VGV4dDogd2hpdGU7XHJcbiRuYXZBY2NlbnQ6ICM4Nzg3ODc7XHJcbi8vXHJcbiRoYW1DaXJjbGU6IHdoaXRlO1xyXG4vL1xyXG4kbWFpbkNvbG9yU2hhZGU6ICM4Nzg3ODc7XHJcbiRuYXZIYW06ICRob3ZlckNvbG9yO1xyXG5cclxuJGZvb3Rlcl9jb2xvcjogJG1haW5Db2xvcjtcclxuJGZvb3Rlcl9jb2xvcl9idXR0b246ICRtYWluQWNjZW50O1xyXG5cclxuJGNhcmRCYWNrZ3JvdW5kOiB3aGl0ZTtcclxuIl19 */"] });


/***/ }),

/***/ 3524:
/*!**************************************************************!*\
  !*** ./src/app/components/webpages/about/about.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutComponent": () => (/* binding */ AboutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

class AboutComponent {
    constructor() { }
    ngOnInit() {
    }
}
AboutComponent.ɵfac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(); };
AboutComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutComponent, selectors: [["app-about"]], decls: 31, vars: 0, consts: [["id", "about", 1, "subPage"], [1, "box"], [1, "line"], ["href", "https://parts3492.org", "target", "_blank"], ["href", "https://www.firstinspires.org/", "target", "_blank"], ["href", "https://www.firstinspires.org/robotics/frc"]], template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "A Little About Me");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "I was born, raised, and currently reside in the \"Wild and Wonderful\" state of West Virginia. I attended Marshall University and graduated in the spring of 2019 with a BS in Computer Science obtaining Summa Cum Laude honors. Since graduating I work as a software developer for Encova Insurance and reside in Charleston, WV. I have just about always known I would end up in some sort of fiend within the technology industry. Computers, software, and electronics have always interested me growing up. I would always like to take things apart and see what was in them, I've always wondered how things work and that is ultimately what pushed me into the field of Computer Science. I consider myself a big geek, just about always have been since I got my first iPod touch back when I was in the 6th grade. My need for gadgets and interests have increased since then moving to running a personal server, working with IoT devices, and home automation. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Why the Floppy Disk?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "That's a great question and truth be told, I don't even know. For as long as I can remember I've always been fascinated with them. I remember the first time I held one. It was our first computer lesson back when I was in the first grade. They taught us how to read and write files on them, which I thought was the coolest thing, that I had files on this portable device. Since then, I've developed a hopeless love for them. I collect them any time I see one, and this has amounted to far more than anyone should have owned when they were popular and a USB to 3.5\" floppy disk reader just for fun. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "What I Do");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "I'm currently a software developer for Encova Insurance. On a daily basis I work on our internal and external application suites. Next to that I work daily with our SQL database, creating databases for the project I am working on, writing stored procedures, and general querying. Other things I may be responsible for is setting up and managing IIS servers, working on establishing a CI/CD pipeline to deploy our applications, and various hot fixes for issues that arrive with our applications. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " When I'm not at working I still end up doing a lot of the same things. I have set up and maintain a personal home server. It is a refurbished Dell Poweredge running in RAID with an Ubuntu Server OS. This has allowed me to gain experience with a number of things like UFW firewall, SSH access with pub/private keys, VPN, server monitoring, deploying my own applications, and working with Docker containers. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Besides just working and working with my own personal projects, I volunteer my free time as a programming mentor for my former high school robotics team. I teach the kids Java programming for the robot, web skills for our personal team website ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "parts3492.org");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, ", and how to work through the software development lifecycle as a group. It is a blast to work with them, we spend 6 weeks every January building a robot from scratch to compete in that year's challenge and going to competitions to compete on a global scale. Our team is a part of ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "FIRST Robotics");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " their ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "FRC");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " program. Competitions are 3 long strenuous days competing, working on the robot as it takes damage or we add functionality, and hope to advance from a regional to the World Competition. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  text-align: justify;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFib3V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQUE7QUFDRiIsImZpbGUiOiJhYm91dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib3ggcCB7XHJcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 4024:
/*!******************************************************************!*\
  !*** ./src/app/components/webpages/contact/contact.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactComponent": () => (/* binding */ ContactComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

class ContactComponent {
    constructor() { }
    ngOnInit() {
    }
}
ContactComponent.ɵfac = function ContactComponent_Factory(t) { return new (t || ContactComponent)(); };
ContactComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactComponent, selectors: [["app-contact"]], decls: 5, vars: 0, consts: [["id", "contact", 1, "subPage"], [1, "box"], ["id", "iframeWrapper"], ["src", "https://docs.google.com/forms/d/e/1FAIpQLSc2RXzE4XhJcFPm7qYwHSiDuz9PhZMT5TKuhZkClBo6xfii9g/viewform?embedded=true", "frameborder", "0", "marginheight", "0", "marginwidth", "0"]], template: function ContactComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "iframe", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Loading...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["#contact[_ngcontent-%COMP%]   #iframeWrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 90vh;\n  padding-bottom: 2em;\n}\n#contact[_ngcontent-%COMP%]   #iframeWrapper[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsU0FBQTtBQUVBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQUFGO0FBR0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQUFGIiwiZmlsZSI6ImNvbnRhY3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKklGUkFNRSovXHJcblxyXG4jY29udGFjdCAjaWZyYW1lV3JhcHBlciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA5MHZoO1xyXG4gIHBhZGRpbmctYm90dG9tOiAyZW07XHJcbn1cclxuXHJcbiNjb250YWN0ICNpZnJhbWVXcmFwcGVyIGlmcmFtZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 4245:
/*!************************************************************************!*\
  !*** ./src/app/components/webpages/css-slider/css-slider.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CssSliderComponent": () => (/* binding */ CssSliderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

class CssSliderComponent {
    constructor() { }
    ngOnInit() {
    }
}
CssSliderComponent.ɵfac = function CssSliderComponent_Factory(t) { return new (t || CssSliderComponent)(); };
CssSliderComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CssSliderComponent, selectors: [["app-css-slider"]], decls: 62, vars: 0, consts: [["id", "cssSlider", 1, "subPage"], [1, "box"], ["colspan", "3"], ["target", "_blank", "href", "https://gitlab.com/bduke97/CSS_Slider", 1, "inline"], ["target", "_blank", "href", "https://bduke97.gitlab.io/CSS_Slider/"], ["id", "demos"], [1, "blocks"], [1, "innerBlock"], ["src", "../../../../assets/icon/chrome.png"], ["src", "../../../../assets/icon/firefox.png"], ["src", "../../../../assets/icon/ie.png"]], template: function CssSliderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "CSS SLIDER: 100% CSS NO JAVASCRIPT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Completely Configurable: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "See Documentation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "td", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "DEMO");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "tr", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Immersive: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "100vh and the width of each image is stretched to fit in the center. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " Mixed: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Just like Immersive, but when the screen is to narrow, it is 100vw and the height just keeps the aspect ratio of the image. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " Responsive: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "This is the original silder, 100vw and the height keeps the aspect ratio of the image. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "td", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Works On:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Chrome");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Firefox");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "IE 10+ / Edge");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["#sliderPage[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n#cssSlider[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: center;\n  table-layout: fixed;\n}\n\n#cssSlider[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  display: inline;\n  vertical-align: middle;\n}\n\n#cssSlider[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 3em;\n  vertical-align: middle;\n}\n\n#cssSlider[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  vertical-align: text-top;\n}\n\n.innerBlock[_ngcontent-%COMP%] {\n  background-color: #0065c4;\n  border-radius: 3px;\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);\n  transition: all 0.2s ease-in-out;\n  \n}\n\n@media only screen and (min-width: 1001px) {\n  .innerBlock[_ngcontent-%COMP%] {\n    height: 100%;\n  }\n}\n\n.blocks[_ngcontent-%COMP%] {\n  \n  padding: 0 0.5em;\n  \n}\n\n@media only screen and (min-width: 1001px) {\n  .blocks[_ngcontent-%COMP%] {\n    height: 1px;\n    \n  }\n  @-moz-document url-prefix() {\n    .blocks {\n      height: initial;\n    }\n  }\n}\n\n@media only screen and (max-width: 1000px) {\n  .blocks[_ngcontent-%COMP%] {\n    padding: 0.5em 0;\n  }\n}\n\n.blocks[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  \n}\n\n@media only screen and (min-width: 1001px) {\n  .blocks[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    display: inline-table;\n    height: 100%;\n  }\n}\n\n.innerBlock[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);\n}\n\n\n\n@media only screen and (min-width: 1001px) {\n  .blocks[_ngcontent-%COMP%] {\n    width: calc(33.3333333333333333333% - 1em);\n  }\n}\n\n\n\n@media only screen and (max-width: 1000px) {\n  #cssSlider[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n\n\n\n.sliderBack[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 1em !important;\n  top: 5em;\n  width: 3em;\n  height: 3em;\n  background-color: #787878;\n  z-index: 9;\n}\n\n.sliderBack[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNzcy1zbGlkZXIuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFxzY3NzXFxfaGVscGVyc1xcX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsV0FBQTtBQURGOztBQUlBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFERjs7QUFJQTtFQUNFLGVBQUE7RUFDQSxzQkFBQTtBQURGOztBQUlBO0VBQ0UsVUFBQTtFQUNBLHNCQUFBO0FBREY7O0FBSUE7RUFDRSx3QkFBQTtBQURGOztBQUlBO0VBQ0UseUJDdkJXO0VEd0JYLGtCQUFBO0VBQ0EsK0dBQUE7RUFFQSxnQ0FBQTtFQUNBLGNBQUE7QUFGRjs7QUFHRTtFQVBGO0lBUUksWUFBQTtFQUFGO0FBQ0Y7O0FBR0E7RUFDRSxjQUFBO0VBUUEsZ0JBQUE7RUFDQSxnQkFBQTtBQVBGOztBQURFO0VBRkY7SUFHSSxXQUFBO0lBQ0EsOEJBQUE7RUFJRjtFQUhFO0lBTEo7TUFNTSxlQUFBO0lBTUY7RUFDRjtBQUNGOztBQUhFO0VBWEY7SUFZSSxnQkFBQTtFQU1GO0FBQ0Y7O0FBSEE7RUFDRSxxQkFBQTtFQUNBLGNBQUE7QUFNRjs7QUFMRTtFQUhGO0lBSUkscUJBQUE7SUFDQSxZQUFBO0VBUUY7QUFDRjs7QUFMQTtFQUNFLDBFQUFBO0FBUUY7O0FBTEEsY0FBQTs7QUFFQTtFQUNFO0lBQ0UsMENBQUE7RUFPRjtBQUNGOztBQUpBLGdCQUFBOztBQUVBO0VBQ0U7SUFDRSxjQUFBO0VBS0Y7QUFDRjs7QUFGQSx3QkFBQTs7QUFFQTtFQUNFLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSx5QkN4RlU7RUR5RlYsVUFBQTtBQUdGOztBQUFBO0VBQ0UsV0FBQTtBQUdGIiwiZmlsZSI6ImNzcy1zbGlkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vc2Nzcy9faGVscGVycy92YXJpYWJsZXNcIjtcclxuXHJcbiNzbGlkZXJQYWdlIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuI2Nzc1NsaWRlciB0YWJsZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHRhYmxlLWxheW91dDogZml4ZWQ7XHJcbn1cclxuXHJcbiNjc3NTbGlkZXIgcCB7XHJcbiAgZGlzcGxheTogaW5saW5lO1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxuXHJcbiNjc3NTbGlkZXIgaW1nIHtcclxuICB3aWR0aDogM2VtO1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxuXHJcbiNjc3NTbGlkZXIgdGFibGUgdHIgdGQge1xyXG4gIHZlcnRpY2FsLWFsaWduOiB0ZXh0LXRvcDtcclxufVxyXG5cclxuLmlubmVyQmxvY2sge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRtYWluQWNjZW50O1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICBib3gtc2hhZG93OiAwIDJweCAycHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDFweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpLFxyXG4gICAgMCAzcHggMXB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xyXG4gIC8qV0lERSBTQ1JFRU4qL1xyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAwMXB4KSB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgfVxyXG59XHJcblxyXG4uYmxvY2tzIHtcclxuICAvKldJREUgU0NSRUVOKi9cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMDFweCkge1xyXG4gICAgaGVpZ2h0OiAxcHg7XHJcbiAgICAvKmZpeCBoZWlnaHQgaXNzdWUgb24gZmlyZWZveCovXHJcbiAgICBALW1vei1kb2N1bWVudCB1cmwtcHJlZml4KCkge1xyXG4gICAgICBoZWlnaHQ6IGluaXRpYWw7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHBhZGRpbmc6IDAgMC41ZW07XHJcbiAgLypOQVJST1cgU0NSRUVOKi9cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMDBweCkge1xyXG4gICAgcGFkZGluZzogMC41ZW0gMDtcclxuICB9XHJcbn1cclxuXHJcbi5ibG9ja3MgYSB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIC8qV0lERSBTQ1JFRU4qL1xyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAwMXB4KSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtdGFibGU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgfVxyXG59XHJcblxyXG4uaW5uZXJCbG9jazpob3ZlciB7XHJcbiAgYm94LXNoYWRvdzogMCAxMHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjE5KSwgMCA2cHggNnB4IHJnYmEoMCwgMCwgMCwgMC4yMyk7XHJcbn1cclxuXHJcbi8qV0lERSBTQ1JFRU4qL1xyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDAxcHgpIHtcclxuICAuYmxvY2tzIHtcclxuICAgIHdpZHRoOiBjYWxjKDMzLjMzMzMzMzMzMzMzMzMzMzMzMzMlIC0gMWVtKTtcclxuICB9XHJcbn1cclxuXHJcbi8qTkFSUk9XIFNDUkVFTiovXHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMDBweCkge1xyXG4gICNjc3NTbGlkZXIgdGFibGUgdHIgdGQge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG59XHJcblxyXG4vKmJhY2sgdG8gcHJldmlvdWQgcGFnZSovXHJcblxyXG4uc2xpZGVyQmFjayB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDFlbSAhaW1wb3J0YW50O1xyXG4gIHRvcDogNWVtO1xyXG4gIHdpZHRoOiAzZW07XHJcbiAgaGVpZ2h0OiAzZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJG1haW5Db2xvcjtcclxuICB6LWluZGV4OiA5O1xyXG59XHJcblxyXG4uc2xpZGVyQmFjayBpbWcge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbiIsIiRiZHVrZV9ibHVlOiAjMDA2NWM0O1xyXG5cclxuLy9QTFMgUkVETyBWQVJTXHJcbiRtYWluQ29sb3I6ICM3ODc4Nzg7XHJcbiRtYWluQWNjZW50OiAjMDA2NWM0O1xyXG4vL0dsb2JsYSBWYXJpYWJsZXNcclxuJGJhY2tncm91bmRDb2xvcjogI2Y4ZjhmODtcclxuJGZvbnRDb2xvcjogIzJmMmYyZjtcclxuJGhvdmVyQ29sb3I6ICMwMDY1YzQ7XHJcbi8vXHJcbiRuYXZfY29sb3I6ICMwMDY1YzQ7XHJcbiRuYXZUZXh0OiB3aGl0ZTtcclxuJG5hdkFjY2VudDogIzg3ODc4NztcclxuLy9cclxuJGhhbUNpcmNsZTogd2hpdGU7XHJcbi8vXHJcbiRtYWluQ29sb3JTaGFkZTogIzg3ODc4NztcclxuJG5hdkhhbTogJGhvdmVyQ29sb3I7XHJcblxyXG4kZm9vdGVyX2NvbG9yOiAkbWFpbkNvbG9yO1xyXG4kZm9vdGVyX2NvbG9yX2J1dHRvbjogJG1haW5BY2NlbnQ7XHJcblxyXG4kY2FyZEJhY2tncm91bmQ6IHdoaXRlO1xyXG4iXX0= */"] });


/***/ }),

/***/ 5166:
/*!************************************************************!*\
  !*** ./src/app/components/webpages/home/home.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeComponent": () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 1258);


class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 29, vars: 0, consts: [["id", "home"], ["id", "intro-wrapper"], ["id", "intro"], ["routerLink", "about"], ["id", "portrait"], ["id", "aboutLink"], ["id", "bio"], ["id", "code"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Hello there, ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " I'm Brandon Duke ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "More about me!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " I have my BS in Computer Science from Marshall University in Huntington, West Virginia where I graduated Summa Cum Laude. Currently, I am a software developer for Encova Insurance in Charleston, WV, and in my free time I am the programming mentor for FIRST Robotics FRC Team 3492 P.A.R.T.s (Putnam Area Robotics Team) in Putnam County, WV. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " To learn more about me keep looking though the site. I'm into a variety of things. I love to work on anything from web development (both front and back end), server administration (for my home server which I use for a variety of projects), 3D Printing (small hobby), and just about anything tech related. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " CODE, It's basically my life!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Java, Python, C#");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " HTML/CSS, JS, Angular");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Django, Flask, .NET");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " SQL ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkWithHref], styles: ["#home[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n}\n#home[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n#home[_ngcontent-%COMP%]   #intro-wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100vh;\n  min-height: 568px;\n  background-image: url('background.png');\n  \n  \n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n@media only screen and (min-width: 750px) {\n  #home[_ngcontent-%COMP%]   #intro-wrapper[_ngcontent-%COMP%] {\n    background-attachment: fixed;\n  }\n}\n@media only screen and (max-width: 749px) {\n  #home[_ngcontent-%COMP%]   #intro-wrapper[_ngcontent-%COMP%] {\n    background-attachment: scroll;\n  }\n}\n#home[_ngcontent-%COMP%]   #intro[_ngcontent-%COMP%] {\n  position: relative;\n  width: 16em;\n  margin: 0 auto;\n}\n\n#home[_ngcontent-%COMP%]   #intro[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-weight: bold;\n  text-shadow: 0 2px 2px rgba(0, 0, 0, 0.14);\n  height: 2.6em;\n  margin-bottom: 1.6rem;\n}\n\n#home[_ngcontent-%COMP%]   #portrait[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  width: 16em;\n  height: 16em;\n  border-radius: 100em;\n  border: 6px solid #787878;\n  margin: 0 auto;\n  background-image: url('portrait.JPG');\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);\n  transition: all 0.2s ease-in-out;\n}\n#home[_ngcontent-%COMP%]   #portrait[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);\n}\n\n#home[_ngcontent-%COMP%]   #aboutLink[_ngcontent-%COMP%] {\n  visibility: hidden;\n  opacity: 0;\n  position: absolute;\n  bottom: -2em;\n  margin: 0 auto;\n  left: 0;\n  right: 0;\n  text-align: center;\n  background-color: #787878;\n  color: white;\n  transition: all 0.2s ease-in-out;\n  font-size: 1.3em;\n  padding: 0.2em;\n  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);\n}\n#home[_ngcontent-%COMP%]   #intro[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover    ~ #aboutLink[_ngcontent-%COMP%] {\n  visibility: visible;\n  opacity: 1;\n}\n\n#home[_ngcontent-%COMP%]   #bio[_ngcontent-%COMP%] {\n  min-height: calc(50vh - 4em);\n  width: 80%;\n  margin: 0 auto;\n  text-align: justify;\n}\n#home[_ngcontent-%COMP%]   #code[_ngcontent-%COMP%] {\n  min-height: calc(50vh - 4em);\n  width: 100%;\n  background-image: url('codeBackground.png');\n  background-attachment: fixed;\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n}\n#home[_ngcontent-%COMP%]   #code[_ngcontent-%COMP%], #home[_ngcontent-%COMP%]   #bio[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n#home[_ngcontent-%COMP%]   #bio[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], #home[_ngcontent-%COMP%]   #code[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 1em 0;\n}\n#home[_ngcontent-%COMP%]   #code[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: white;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFxzY3NzXFxfaGVscGVyc1xcX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLGNBQUE7QUFFQTtFQUNFLFNBQUE7RUFDQSxVQUFBO0FBRkY7QUFLQTtFQUNFLFdBQUE7QUFGRjtBQUtBLGtDQUFBO0FBRUE7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsdUNBQUE7RUFDQSxvQkFBQTtFQUlBLHVCQUFBO0VBSUEsc0JBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBRUEsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQVZGO0FBSkU7RUFORjtJQU9JLDRCQUFBO0VBT0Y7QUFDRjtBQUxFO0VBVkY7SUFXSSw2QkFBQTtFQVFGO0FBQ0Y7QUFHQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7QUFBRjtBQUdBLGFBQUE7QUFFQTtFQUNFLGlCQUFBO0VBRUEsMENBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7QUFGRjtBQUtBLG1DQUFBO0FBRUE7RUFDRSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxxQ0FBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLCtHQUFBO0VBRUEsZ0NBQUE7QUFKRjtBQU9BO0VBQ0UsMEVBQUE7QUFKRjtBQU9BLGdEQUFBO0FBRUE7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQ3BGVTtFRHFGVixZQUFBO0VBQ0EsZ0NBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSwwRUFBQTtBQUxGO0FBUUE7RUFDRSxtQkFBQTtFQUNBLFVBQUE7QUFMRjtBQVFBLHNCQUFBO0FBRUE7RUFDRSw0QkFBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUFORjtBQVNBO0VBQ0UsNEJBQUE7RUFDQSxXQUFBO0VBQ0EsMkNBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtBQU5GO0FBU0E7O0VBRUUsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFORjtBQVNBLG9CQUFBO0FBRUE7O0VBRUUsYUFBQTtBQVBGO0FBVUE7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7QUFQRiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uL3Njc3MvX2hlbHBlcnMvdmFyaWFibGVzXCI7XHJcblxyXG4vKnBhZ2Ugc2l6aW5nKi9cclxuXHJcbiNob21lICoge1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG4jaG9tZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi8qaW50cm8gc2l6ZSBhbmQgYmFja2dyb3VuZCBpbWFnZSovXHJcblxyXG4jaG9tZSAjaW50cm8td3JhcHBlciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICBtaW4taGVpZ2h0OiA1NjhweDtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vLi4vYXNzZXRzL2JhY2tncm91bmQucG5nKTtcclxuICAvKlNDUkVFTiBTSVpFOiBXSURFKi9cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc1MHB4KSB7XHJcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xyXG4gIH1cclxuICAvKlNDUkVFTiBTSVpFOiBOQVJST1cgKi9cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc0OXB4KSB7XHJcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IHNjcm9sbDtcclxuICB9XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbiNob21lICNpbnRybyB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiAxNmVtO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcblxyXG4vKmludHJvIHRleHQqL1xyXG5cclxuI2hvbWUgI2ludHJvIHAge1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIC8vdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHRleHQtc2hhZG93OiAwIDJweCAycHggcmdiYSgwLCAwLCAwLCAwLjE0KTtcclxuICBoZWlnaHQ6IDIuNmVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDEuNnJlbTtcclxufVxyXG5cclxuLypwb3J0cmFpdCBzdHlsaW5nIGFuZCBwb3NpdGlvbmluZyovXHJcblxyXG4jaG9tZSAjcG9ydHJhaXQge1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgd2lkdGg6IDE2ZW07XHJcbiAgaGVpZ2h0OiAxNmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwMGVtO1xyXG4gIGJvcmRlcjogNnB4IHNvbGlkICRtYWluQ29sb3I7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uLy4uL2Fzc2V0cy9wb3J0cmFpdC5KUEcpO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYm94LXNoYWRvdzogMCAycHggMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAxcHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKSxcclxuICAgIDAgM3B4IDFweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuI2hvbWUgI3BvcnRyYWl0OmhvdmVyIHtcclxuICBib3gtc2hhZG93OiAwIDEwcHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMTkpLCAwIDZweCA2cHggcmdiYSgwLCAwLCAwLCAwLjIzKTtcclxufVxyXG5cclxuLyphYm91dCBsaW5rIHRoYXQgc2hvd3MgdW5kZXIgcG9ydHJhaXQgb24gaG92ZXIqL1xyXG5cclxuI2hvbWUgI2Fib3V0TGluayB7XHJcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogLTJlbTtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkbWFpbkNvbG9yO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcclxuICBmb250LXNpemU6IDEuM2VtO1xyXG4gIHBhZGRpbmc6IDAuMmVtO1xyXG4gIGJveC1zaGFkb3c6IDAgMTBweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4xOSksIDAgNnB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMjMpO1xyXG59XHJcblxyXG4jaG9tZSAjaW50cm8gYTpob3ZlciB+ICNhYm91dExpbmsge1xyXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuLypiaW8gYW5kIGNvZGUgc2l6aW5nKi9cclxuXHJcbiNob21lICNiaW8ge1xyXG4gIG1pbi1oZWlnaHQ6IGNhbGMoNTB2aCAtIDRlbSk7XHJcbiAgd2lkdGg6IDgwJTtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG59XHJcblxyXG4jaG9tZSAjY29kZSB7XHJcbiAgbWluLWhlaWdodDogY2FsYyg1MHZoIC0gNGVtKTtcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vLi4vYXNzZXRzL2NvZGVCYWNrZ3JvdW5kLnBuZyk7XHJcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG59XHJcblxyXG4jaG9tZSAjY29kZSxcclxuI2hvbWUgI2JpbyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4vKmJpbyBhbmQgY29kZSB0ZXh0Ki9cclxuXHJcbiNob21lICNiaW8gcCxcclxuI2hvbWUgI2NvZGUgcCB7XHJcbiAgbWFyZ2luOiAxZW0gMDtcclxufVxyXG5cclxuI2hvbWUgI2NvZGUgcCB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4iLCIkYmR1a2VfYmx1ZTogIzAwNjVjNDtcclxuXHJcbi8vUExTIFJFRE8gVkFSU1xyXG4kbWFpbkNvbG9yOiAjNzg3ODc4O1xyXG4kbWFpbkFjY2VudDogIzAwNjVjNDtcclxuLy9HbG9ibGEgVmFyaWFibGVzXHJcbiRiYWNrZ3JvdW5kQ29sb3I6ICNmOGY4Zjg7XHJcbiRmb250Q29sb3I6ICMyZjJmMmY7XHJcbiRob3ZlckNvbG9yOiAjMDA2NWM0O1xyXG4vL1xyXG4kbmF2X2NvbG9yOiAjMDA2NWM0O1xyXG4kbmF2VGV4dDogd2hpdGU7XHJcbiRuYXZBY2NlbnQ6ICM4Nzg3ODc7XHJcbi8vXHJcbiRoYW1DaXJjbGU6IHdoaXRlO1xyXG4vL1xyXG4kbWFpbkNvbG9yU2hhZGU6ICM4Nzg3ODc7XHJcbiRuYXZIYW06ICRob3ZlckNvbG9yO1xyXG5cclxuJGZvb3Rlcl9jb2xvcjogJG1haW5Db2xvcjtcclxuJGZvb3Rlcl9jb2xvcl9idXR0b246ICRtYWluQWNjZW50O1xyXG5cclxuJGNhcmRCYWNrZ3JvdW5kOiB3aGl0ZTtcclxuIl19 */"] });


/***/ }),

/***/ 5676:
/*!************************************************************!*\
  !*** ./src/app/components/webpages/work/work.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WorkComponent": () => (/* binding */ WorkComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

class WorkComponent {
    constructor() { }
    ngOnInit() {
    }
}
WorkComponent.ɵfac = function WorkComponent_Factory(t) { return new (t || WorkComponent)(); };
WorkComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WorkComponent, selectors: [["app-work"]], decls: 104, vars: 0, consts: [["id", "work", 1, "subPage"], [1, "box"], [1, "title"], [1, "line"], ["target", "_blank", "s", "", "href", "http://www.wvspacegrant.org/about/wvsgc/"], ["target", "_blank", "href", "https://github.com/bmduke1997/WVSoilTrailer_Website"], ["target", "_blank", "href", "http://mugeeksandgadgets.github.io"], ["target", "_blank", "href", "https://github.com/MUGeeksandGadgets/MUGeeksandGadgets.github.io"], ["target", "_blank", "href", "http://parts3492.org"], ["target", "_blank", "href", "https://github.com/3492PARTs/PARTs_Website"], ["href", "cssslider/"], ["target", "_blank", "href", "https://gitlab.com/bduke97/CSS_Slider"], ["target", "_blank", "href", "https://github.com/bmduke1997/HTML-Compiler"], ["target", "_blank", "href", "https://github.com/bmduke1997/WeatherAndroidForecast"], ["target", "_blank", "href", "https://github.com/bmduke1997/wahjudichess"], ["target", "_blank", "href", "https://github.com/bmduke1997/MazeSolver"], [1, "seperator"]], template: function WorkComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Research");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Flood Detection and Avoidance Using a Wireless Arduino Based Network");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Status: Completed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Funded By:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "NASA West Virginia Space Grant Consortium Undergraduate Fellowship");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " and ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Marshall University: Creative Discovery and Research Award ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Overview: Flash flooding is a very sudden, destructive natural disaster. Per the National Oceanic and Atmospheric Administration (NOAA), in the United States the national 30-year average for flood deaths is 127 a year. This research is to make a cheap and effective wireless network of sensors based around the Arduino device to detect and provide real-time data about a particular steam or area. This will provide the potential to save lives and property by offering advanced warning to those in the affected area.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "My Part: I have helped work on the hardware and code for the devices, however my primary focus for the project is data transmission, database design, and web app development. I have designed the way in which the data is stripped at the base station and inserted to the database. Now, I am currently working on developing the web application for both desktop and mobile use, using a responsive design to work on a variety of devices and screen sizes.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Web Development");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Soil Tunnel Trailer Website");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Status: Completed | ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "GitHub");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "\"The Soil Tunnel Trailer\" site is a website for the WV Capitol Conservation District. I was approached by the coordinator through their son who was on my highschool robotics team. This website is used as a means for schools and the community to know where \"The Soil Tunnel Trailer\" will be and to get ahold of the coordinator to schedule a visit. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Marshall University Geeks and Gadgets Website");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Status: Completed | ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Live Link");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "GitHub");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "I started working on this site as a side project to help my friend Patrick, who is the president of the Geeks and Gadgets club at Marshall. He did not have time to maintain it or redo it. So, I took the task, and because of my work on this site I have taken a larger role in the group. I am now the Vice President and web developer for the group.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Putnam Area Robotics Team Website");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Status: Maintenance | ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Live Link");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "GitHub");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "This is my first ever website! I developed it for my highschool robotics team, it started because I was tired of using \"drag-n-drop\" sites. I consider it my playground in the web development world, as I had no prior knowledge when writing it.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Software");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Pure CSS Slider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Status: Maintenance | ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Info/Demo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "GitLab");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "While working on \"The Soil Tunnel Trailer\" website I noticed that the CSS Slider I used on my team's website was not licensed for commercial use. Thus, my decision to code my own. This slider can be viewed by clicking the link above, or on both the robotics team's and \"Soil Tunnel Trailer\" sites. The code is free to use and modify!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "HTML Compiler");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Status: Development | ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "GitHub");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "A simple GUI interface coded in Java using the JavaFX library to aid in the update of Navigation and Footer elements on websites. It can be quite tedious to update a Nav or Footer on each page of a static website, so this tool can be used per its documentation on GitHub to update every HTML file.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "School Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "\"WAF\" Weather Android Forecast");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Status: Completed | ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "GitHub");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "A weather app developed as a group project for my CS 481 - Android App Development class.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "\"Wahjudi Chess\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "Status: Completed | ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "GitHub");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "A play on suicide chess where the object of the game is to be the first loser, thus making you the winner! This variant of suicide chess is played on a smaller board and has a computer AI to play against. This game was developed as a group project for my CS 210 - Data Structures and Algorithms class.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "\"Maze Solver\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "Status: Completed | ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "GitHub");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "A GUI application developed to solve 3D mazes with portals, stairs, and the possibility for no, many, or unreachable exits! Sounds confusing? Well it is! However, you can load up any of the pre-included text files in the repo and watch the algorithm solve it using depth first search...it was my first time coming up with an algorithm to solve a problem, I was only a sophomore at the time! Anyway, this was the first project for my CS 210 - Data Structures and Algorithms class.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](103, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["#work[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  padding-bottom: 0;\n  margin-bottom: 0;\n}\n#work[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  padding: 0;\n  margin: 0;\n}\n#work[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: inline;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndvcmsuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0FBQUo7QUFHRTtFQUNFLFVBQUE7RUFDQSxTQUFBO0FBREo7QUFHSTtFQUNFLGVBQUE7QUFETiIsImZpbGUiOiJ3b3JrLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3dvcmsge1xyXG4gIGgyIHtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICB9XHJcblxyXG4gIGg1IHtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXJnaW46IDA7XHJcblxyXG4gICAgYSB7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 1864:
/*!*********************************************!*\
  !*** ./src/app/services/general.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GeneralService": () => (/* binding */ GeneralService),
/* harmony export */   "RetMessage": () => (/* binding */ RetMessage),
/* harmony export */   "Page": () => (/* binding */ Page)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 6491);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);



//import { saveAs } from 'file-saver';
class GeneralService {
    constructor() {
        /* App Sizes */
        this.screenSizeLg = 768;
        this.screenSizeSm = 767;
        this.screenSixeXs = 576;
        /* Loading Screen */
        this.outstandingCalls = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(0);
        this.currentOutstandingCalls = this.outstandingCalls.asObservable();
        this.internalOutstandingCalls = 0;
        /* Error Handling */
        this.showErrorModal = false;
        this.errorMessage = '';
        this.errorButtonText = 'OK';
        /* Confirm Handling */
        this.showConfirmModal = false;
        this.confirmMessage = '';
        this.confirmButtonText = 'OK';
        this.confirmButtonCancelText = 'NO';
        this.gsId = 0;
    }
    /* Loading Screen */
    incrementOutstandingCalls() {
        this.internalOutstandingCalls++;
        this.outstandingCalls.next(this.internalOutstandingCalls);
    }
    decrementOutstandingCalls() {
        if (this.internalOutstandingCalls > 0) {
            this.internalOutstandingCalls--;
            this.outstandingCalls.next(this.internalOutstandingCalls);
        }
    }
    /* Error Service */
    acceptError() {
        this.showErrorModal = false;
        this.errorMessage = '';
    }
    triggerError(message) {
        this.showErrorModal = true;
        this.errorMessage = message;
    }
    handelHTTPError(Error) {
        this.triggerError('http error');
    }
    checkResponse(response) {
        response = response;
        if (response.retMessage && response.error) {
            this.triggerError(response.retMessage);
            return false;
        }
        return true;
    }
    /* Custom Confirm */
    triggerConfirm(message, tmpFx, tmpInput) {
        this.confirmMessage = '';
        //this.fx = null;
        this.input = null;
        this.showConfirmModal = true;
        this.confirmMessage = message;
        this.fx = tmpFx;
        this.input = tmpInput;
    }
    acceptConfirm() {
        this.showConfirmModal = false;
        this.fx(this.input);
    }
    rejectConfirm() {
        this.showConfirmModal = false;
    }
    getNextGsId() {
        return 'gsID' + this.gsId++;
    }
    /* helpwe functions */
    strNoE(s) {
        return s === undefined || s === null || s.trim() === '' || s.length === 0 || s.length === null || s.length === undefined;
    }
    /*
      downloadFileAs(filename, data, MimeType) {
        const blob = new Blob([data], { type: MimeType });
        //saveAs(blob, filename);
      }
    */
    screenSize() {
        if (window.innerWidth >= this.screenSizeLg) {
            return 'lg';
        }
        else if (this.screenSizeLg > window.innerWidth && window.innerWidth > this.screenSixeXs) {
            return 'sm';
        }
        else {
            //return 'xs';
            return 'sm';
        }
    }
    devConsoleLog(x) {
        if (!src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.production) {
            console.log(x);
        }
    }
    // For one given propery and its value, get the value of another propery in the same object
    propertyMap(arr, queryProperty, queryValue, findProperty) {
        for (let i = 0; i < arr.length; i++) {
            if (Object.prototype.hasOwnProperty.call(arr[i], queryProperty) && arr[i][queryProperty] === queryValue) {
                if (Object.prototype.hasOwnProperty.call(arr[i], findProperty)) {
                    return arr[i][findProperty];
                }
            }
        }
    }
    arrayObjectIndexOf(arr, searchTerm, property) {
        for (let i = 0, len = arr.length; i < len; i++) {
            if (typeof arr[i] !== 'undefined' && arr[i] !== null && arr[i][property] === searchTerm) {
                return i;
            }
        }
        return -1;
    }
}
GeneralService.ɵfac = function GeneralService_Factory(t) { return new (t || GeneralService)(); };
GeneralService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: GeneralService, factory: GeneralService.ɵfac, providedIn: 'root' });
class RetMessage {
}
class Page {
}


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 1570);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map