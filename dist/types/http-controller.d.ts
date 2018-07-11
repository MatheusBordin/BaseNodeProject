import { Router } from "express";
import { HttpRoute } from "./http-route";
/**
 * Base http controller.
 *
 * @export
 * @class HttpController
 */
export declare class HttpController {
    router: Router;
    routes: HttpRoute[];
}
