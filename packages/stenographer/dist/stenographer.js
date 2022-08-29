"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stenographer = void 0;
var levels_1 = require("./enum/levels");
var Stenographer = /** @class */ (function () {
    function Stenographer(server) {
        this.server = server;
        if (!Stenographer.instance) {
            Stenographer.instance = this;
        }
        return Stenographer.instance;
    }
    Stenographer.prototype.sendLog = function (message, level) {
        return fetch(this.server, {
            headers: { 'Content-Type': 'application/json' },
            method: 'POST',
            body: JSON.stringify({ message: message, level: level })
        });
    };
    Stenographer.prototype.info = function (message) {
        return this.sendLog(message, levels_1.Levels.INFO);
    };
    Stenographer.prototype.error = function (message) {
        return this.sendLog(message, levels_1.Levels.ERROR);
    };
    Stenographer.prototype.warn = function (message) {
        return this.sendLog(message, levels_1.Levels.WARN);
    };
    /**
     * @description send a Log to the server
     * @param message
     * @param level
     */
    Stenographer.prototype.log = function (message, level) {
        if (level === void 0) { level = levels_1.Levels.INFO; }
        var payload = {
            time: new Date().toISOString(),
            instance: location.hostname,
            path: location.pathname,
            level: level,
            message: message
        };
        switch (level) {
            case levels_1.Levels.ERROR:
                return this.error(payload);
            case levels_1.Levels.WARN:
                return this.warn(payload);
            case levels_1.Levels.INFO:
            default:
                return this.info(payload);
        }
    };
    return Stenographer;
}());
exports.Stenographer = Stenographer;
