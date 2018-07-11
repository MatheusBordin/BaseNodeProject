"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Http route type used to generate router routes.
 *
 * @export
 * @class HttpRoute
 */
class HttpRoute {
    /**
     * Map routes path using controller base path.
     *
     * @static
     * @param {HttpRoute[]} routes List of controller routes.
     * @param {string} basePath Controller base path.
     * @returns {HttpRoute[]} Return a mapped list routes of controller.
     * @memberof HttpRoute
     */
    static mapRoutes(routes, basePath) {
        if (!routes) {
            routes = [];
        }
        for (const route of routes) {
            const routePath = route.path.replace(/^\//g, "");
            const controllerPath = basePath.replace(/\/$/g, "").replace(/^\//g, "");
            route.path = `/${controllerPath}/${routePath}`.replace(/\/{2,}/g, "/");
        }
        return routes;
    }
}
exports.HttpRoute = HttpRoute;
