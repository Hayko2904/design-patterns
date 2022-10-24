"use strict";
exports.__esModule = true;
var express_1 = require("express");
var client_1 = require("./creational-patterns/dactory-method/client");
var creator_fisrt_1 = require("./creational-patterns/dactory-method/creator-fisrt");
var app = (0, express_1["default"])();
var port = 3000;
app.get('/factory', function (req, res) {
    var factory = new client_1.FactoryClient();
    res.send('123' + factory.runCode(new creator_fisrt_1.CreatorFisrt()));
});
app.listen(port, function () {
    return console.log("Express is listening at http://localhost:".concat(port));
});
