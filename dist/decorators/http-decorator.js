"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const http_method_decorator_factory_1 = require("../helpers/http-method-decorator-factory");
const http_method_1 = require("../types/http-method");
const http_route_1 = require("../types/http-route");
/**
 * Configure controller routes.
 *
 * @export
 * @param {string} [basePath=""] Base path to be applied in all controller routes.
 * @returns Returns configured controller.
 */
function Controller(basePath = "") {
    return (constructor) => {
        const controller = constructor.prototype;
        controller.router = express.Router({ mergeParams: true });
        const routes = http_route_1.HttpRoute.mapRoutes(controller.routes, basePath);
        for (const route of routes) {
            if (!route.interceptor) {
                controller.router[route.method](route.path, controller[route.handler].bind(controller));
            }
            else {
                controller.router[route.method](route.path, route.interceptor, controller[route.handler].bind(controller));
            }
        }
    };
}
exports.Controller = Controller;
/**
 * Create router handler of method 'GET'.
 *
 * @export
 * @param {string} path Route path.
 * @returns Router handler.
 */
function Get(path) {
    return (target, key, descriptor) => {
        return http_method_decorator_factory_1.HttpMethodDecoratorFactory(http_method_1.HttpMethod.GET, path, target, key, descriptor);
    };
}
exports.Get = Get;
/**
 * Create router handler of method 'PUT'.
 *
 * @export
 * @param {string} path Route path.
 * @returns Router handler.
 */
function Put(path) {
    return (target, key, descriptor) => {
        return http_method_decorator_factory_1.HttpMethodDecoratorFactory(http_method_1.HttpMethod.PUT, path, target, key, descriptor);
    };
}
exports.Put = Put;
/**
 * Create router handler of method 'POST'.
 *
 * @export
 * @param {string} path Route path.
 * @returns Router handler.
 */
function Post(path) {
    return (target, key, descriptor) => {
        return http_method_decorator_factory_1.HttpMethodDecoratorFactory(http_method_1.HttpMethod.POST, path, target, key, descriptor);
    };
}
exports.Post = Post;
/**
 * Create router handler of method 'DELETE'.
 *
 * @export
 * @param {string} path Route path.
 * @returns Router handler.
 */
function Delete(path) {
    return (target, key, descriptor) => {
        return http_method_decorator_factory_1.HttpMethodDecoratorFactory(http_method_1.HttpMethod.DELETE, path, target, key, descriptor);
    };
}
exports.Delete = Delete;
/**
 * Append interceptor to request.
 *
 * @export
 * @param {(req: Request, res: Response, next?: any) => void} func Interceptor function
 * @returns Router handler.
 */
function Interceptor(func) {
    return (target, key, descriptor) => {
        const controller = target.constructor.prototype;
        if (!controller.routes) {
            throw new Error("The Interceptor decorator can used only after HttpMethod decorator (Get, Post, Put, Delete).");
        }
        const route = controller.routes.find(x => x.handler === key);
        if (!route) {
            throw new Error("The Interceptor decorator can used only after HttpMethod decorator (Get, Post, Put, Delete).");
        }
        route.interceptor = func;
    };
}
exports.Interceptor = Interceptor;
