"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const heartbeat_1 = require("../controllers/heartbeat");
exports.router = express_1.Router({ mergeParams: true });
exports.router.use(heartbeat_1.router);
