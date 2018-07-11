"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bodyParser = require("body-parser");
const compression = require("compression");
const cors = require("cors");
const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const router_1 = require("./config/router");
exports.app = express();
// Settings
exports.app.use(helmet());
exports.app.use(morgan("tiny"));
exports.app.use(cors());
exports.app.use(compression());
exports.app.use(bodyParser.json());
// Routes
exports.app.use("/v1", router_1.router);
