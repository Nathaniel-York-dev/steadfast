"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
var log_server_1 = require("./log-server");
var stenographer_1 = require("./stenographer");
var exporter;
console.log('process.env.NODE_ENV', (_a = process === null || process === void 0 ? void 0 : process.env) === null || _a === void 0 ? void 0 : _a.NODE_ENV);
if ((_b = process === null || process === void 0 ? void 0 : process.env) === null || _b === void 0 ? void 0 : _b.NODE_ENV) {
    exporter = __assign(__assign({}, exporter), { LogServer: log_server_1.LogServer });
}
else {
    exporter = __assign(__assign({}, exporter), { Logger: stenographer_1.Stenographer });
}
exports.default = exporter;
