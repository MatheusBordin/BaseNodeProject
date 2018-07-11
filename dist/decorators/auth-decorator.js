"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_1 = require("../utils/http-status");
/**
 * Auth for chat users.
 *
 * @export
 * @returns Returns authenticated route.
 */
function Auth() {
    return (target, key, descriptor) => {
        const originalRoute = descriptor.value;
        descriptor.value = (req, res, ...args) => {
            try {
                const token = req.get("x-auth-token");
                // TODO: Validate token
                return originalRoute(req, res, ...args);
            }
            catch (e) {
                return res.status(http_status_1.HttpStatus.Unauthorized).send();
            }
        };
        return descriptor;
    };
}
exports.Auth = Auth;
