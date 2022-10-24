"use strict";
exports.__esModule = true;
exports.Creator = void 0;
var Creator = /** @class */ (function () {
    function Creator() {
    }
    Creator.prototype.run = function () {
        var product = this.factory();
        return product.getProduct();
    };
    return Creator;
}());
exports.Creator = Creator;
