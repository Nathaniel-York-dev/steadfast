"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogServer = void 0;
var fs_1 = require("fs");
var LogServer = /** @class */ (function () {
    function LogServer() {
        if (!LogServer.instance) {
            LogServer.instance = this;
        }
        return LogServer.instance;
    }
    LogServer.prototype.logMessage = function (payload) {
        return fs_1.promises.writeFile('./logs/log.txt', JSON.stringify(payload));
    };
    return LogServer;
}());
exports.LogServer = LogServer;
