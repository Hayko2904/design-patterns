"use strict";
exports.__esModule = true;
exports.FactoryClient = void 0;
var FactoryClient = /** @class */ (function () {
    function FactoryClient() {
    }
    FactoryClient.prototype.runCode = function (creator) {
        return creator.run();
    };
    return FactoryClient;
}());
exports.FactoryClient = FactoryClient;
