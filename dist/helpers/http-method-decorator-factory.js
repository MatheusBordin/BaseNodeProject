"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_route_1 = require("../types/http-route");
/**
 * Http method decorator factory.
 *
 * @export
 * @param {HttpMethod} method Method type used to generate route.
 * @param {string} path Route path.
 * @param {*} target Controller reference.
 * @param {string} key Property key of route handler in controller.
 * @param {PropertyDescriptor} descriptor Method implementation.
 * @returns Returns http method decorator.
 */
function HttpMethodDecoratorFactory(method, path, target, key, descriptor) {
    const route = new http_route_1.HttpRoute();
    route.path = path;
    route.method = method;
    route.handler = key;
    const controller = target.constructor.prototype;
    if (!controller.routes) {
        controller.routes = [];
    }
    controller.routes.push(route);
    return descriptor;
}
exports.HttpMethodDecoratorFactory = HttpMethodDecoratorFactory;
