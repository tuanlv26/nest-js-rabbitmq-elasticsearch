"use strict";
exports.id = 0;
exports.ids = null;
exports.modules = {

/***/ 11:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d, _e, _f;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ProductController = void 0;
const common_1 = __webpack_require__(6);
const product_service_1 = __webpack_require__(12);
const globalClass_1 = __webpack_require__(13);
const globalEnum_1 = __webpack_require__(14);
let ProductController = class ProductController {
    constructor(productService) {
        this.productService = productService;
    }
    getProducts() {
        try {
            return new globalClass_1.ResponseData(this.productService.getProducts(), globalEnum_1.HttpStatus.SUCCESS, globalEnum_1.HttpMessage.SUCCESS);
        }
        catch (error) {
            return new globalClass_1.ResponseData(null, globalEnum_1.HttpStatus.ERROR, globalEnum_1.HttpMessage.ERROR);
        }
    }
    createProduct() {
        try {
            return new globalClass_1.ResponseData(this.productService.createProduct(), globalEnum_1.HttpStatus.SUCCESS, globalEnum_1.HttpMessage.SUCCESS);
        }
        catch (error) {
            return new globalClass_1.ResponseData(null, globalEnum_1.HttpStatus.ERROR, globalEnum_1.HttpMessage.ERROR);
        }
    }
    detailProduct() {
        try {
            return new globalClass_1.ResponseData(this.productService.detailProduct(), globalEnum_1.HttpStatus.SUCCESS, globalEnum_1.HttpMessage.SUCCESS);
        }
        catch (error) {
            return new globalClass_1.ResponseData(null, globalEnum_1.HttpStatus.ERROR, globalEnum_1.HttpMessage.ERROR);
        }
    }
    updateProduct() {
        try {
            return new globalClass_1.ResponseData(this.productService.updateProduct(), globalEnum_1.HttpStatus.SUCCESS, globalEnum_1.HttpMessage.SUCCESS);
        }
        catch (error) {
            return new globalClass_1.ResponseData(null, globalEnum_1.HttpStatus.ERROR, globalEnum_1.HttpMessage.ERROR);
        }
    }
    deleteProduct() {
        try {
            return new globalClass_1.ResponseData(this.productService.deleteProduct(), globalEnum_1.HttpStatus.SUCCESS, globalEnum_1.HttpMessage.SUCCESS);
        }
        catch (error) {
            return new globalClass_1.ResponseData(null, globalEnum_1.HttpStatus.ERROR, globalEnum_1.HttpMessage.ERROR);
        }
    }
};
exports.ProductController = ProductController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", typeof (_b = typeof globalClass_1.ResponseData !== "undefined" && globalClass_1.ResponseData) === "function" ? _b : Object)
], ProductController.prototype, "getProducts", null);
__decorate([
    (0, common_1.Post)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", typeof (_c = typeof globalClass_1.ResponseData !== "undefined" && globalClass_1.ResponseData) === "function" ? _c : Object)
], ProductController.prototype, "createProduct", null);
__decorate([
    (0, common_1.Get)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", typeof (_d = typeof globalClass_1.ResponseData !== "undefined" && globalClass_1.ResponseData) === "function" ? _d : Object)
], ProductController.prototype, "detailProduct", null);
__decorate([
    (0, common_1.Put)('/:id'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", typeof (_e = typeof globalClass_1.ResponseData !== "undefined" && globalClass_1.ResponseData) === "function" ? _e : Object)
], ProductController.prototype, "updateProduct", null);
__decorate([
    (0, common_1.Delete)('/:id'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", typeof (_f = typeof globalClass_1.ResponseData !== "undefined" && globalClass_1.ResponseData) === "function" ? _f : Object)
], ProductController.prototype, "deleteProduct", null);
exports.ProductController = ProductController = __decorate([
    (0, common_1.Controller)('products'),
    __metadata("design:paramtypes", [typeof (_a = typeof product_service_1.ProductService !== "undefined" && product_service_1.ProductService) === "function" ? _a : Object])
], ProductController);
;


/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("de5bd6094d1b5244ebaf")
/******/ })();
/******/ 
/******/ }
;