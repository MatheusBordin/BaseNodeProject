import { RequestHandler } from "express";
import { HttpMethod } from "./http-method";
/**
 * Http route type used to generate router routes.
 *
 * @export
 * @class HttpRoute
 */
export declare class HttpRoute {
    /**
     * Map routes path using controller base path.
     *
     * @static
     * @param {HttpRoute[]} routes List of controller routes.
     * @param {string} basePath Controller base path.
     * @returns {HttpRoute[]} Return a mapped list routes of controller.
     * @memberof HttpRoute
     */
    static mapRoutes(routes: HttpRoute[], basePath: string): HttpRoute[];
    method: HttpMethod;
    path: string;
    handler: string;
    interceptor: RequestHandler;
}
