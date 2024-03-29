"use strict";
exports.id = 0;
exports.ids = null;
exports.modules = {

/***/ 12:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ProductService = void 0;
const common_1 = __webpack_require__(6);
let ProductService = class ProductService {
    constructor() {
        this.products = [
            { id: 1, category: 1, productName: 'Product 1', price: 1000 },
            { id: 2, category: 2, productName: 'Product 2', price: 2000 },
            { id: 3, category: 3, productName: 'Product 3', price: 3000 },
            { id: 4, category: 4, productName: 'Product 4', price: 4000 },
        ];
    }
    getProducts() {
        return this.products;
    }
    createProduct() {
        return 'POST PRODUCT';
    }
};
exports.ProductService = ProductService;
exports.ProductService = ProductService = __decorate([
    (0, common_1.Injectable)()
], ProductService);
return 'DETAIL PRODUCT';
updateProduct();
string;
{
    return 'UPDATE PRODUCT';
}
deleteProduct();
string;
{
    return 'DELETE PRODUCT';
}


/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("bfb9bf5a746fefb97a63")
/******/ })();
/******/ 
/******/ }
;