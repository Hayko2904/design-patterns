"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.CreatorFisrt = void 0;
var creator_1 = require("./creator");
var product_first_1 = require("./product-first");
var CreatorFisrt = /** @class */ (function (_super) {
    __extends(CreatorFisrt, _super);
    function CreatorFisrt() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CreatorFisrt.prototype.factory = function () {
        return new product_first_1.ProductFirst();
    };
    return CreatorFisrt;
}(creator_1.Creator));
exports.CreatorFisrt = CreatorFisrt;
