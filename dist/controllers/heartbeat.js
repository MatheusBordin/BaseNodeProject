"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_controller_1 = require("../types/http-controller");
const http_decorator_1 = require("../decorators/http-decorator");
let HeartbeatController = class HeartbeatController extends http_controller_1.HttpController {
    live(req, res) {
        res.send('O.O');
    }
};
__decorate([
    http_decorator_1.Get("heartbeat")
], HeartbeatController.prototype, "live", null);
HeartbeatController = __decorate([
    http_decorator_1.Controller()
], HeartbeatController);
const controller = new HeartbeatController();
console.log(controller.routes);
exports.router = controller.router;
