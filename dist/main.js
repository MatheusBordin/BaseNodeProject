"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const env = process.env.NODE_ENV;
const port = process.env.CONSOLE_API_PORT || 9000;
// Start Express API
app_1.app.listen(port, () => {
    console.log(`Express running on port ${port} and environment ${env}.`);
});
var app_2 = require("./app");
exports.app = app_2.app;
