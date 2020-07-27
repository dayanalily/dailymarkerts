(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-index-index-module"],{

/***/ "./src/app/content/pages/components/index/index.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/content/pages/components/index/index.module.ts ***!
  \****************************************************************/
/*! exports provided: IndexModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexModule", function() { return IndexModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _index_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index.component */ "./src/app/content/pages/components/index/index.component.ts");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");







var IndexModule = /** @class */ (function () {
    function IndexModule() {
    }
    IndexModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableModule"],
                _angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__["MatPaginatorModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([
                    {
                        path: 'index',
                        component: _index_component__WEBPACK_IMPORTED_MODULE_4__["IndexComponent"]
                    }
                ])
            ],
            declarations: [_index_component__WEBPACK_IMPORTED_MODULE_4__["IndexComponent"]]
        })
    ], IndexModule);
    return IndexModule;
}());



/***/ })

}]);
//# sourceMappingURL=components-index-index-module.js.map