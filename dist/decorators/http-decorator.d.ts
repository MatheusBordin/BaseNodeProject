import { RequestHandler } from "express";
/**
 * Configure controller routes.
 *
 * @export
 * @param {string} [basePath=""] Base path to be applied in all controller routes.
 * @returns Returns configured controller.
 */
export declare function Controller(basePath?: string): (constructor: any) => void;
/**
 * Create router handler of method 'GET'.
 *
 * @export
 * @param {string} path Route path.
 * @returns Router handler.
 */
export declare function Get(path: string): (target: any, key: string, descriptor: PropertyDescriptor) => PropertyDescriptor;
/**
 * Create router handler of method 'PUT'.
 *
 * @export
 * @param {string} path Route path.
 * @returns Router handler.
 */
export declare function Put(path: string): (target: any, key: string, descriptor: PropertyDescriptor) => PropertyDescriptor;
/**
 * Create router handler of method 'POST'.
 *
 * @export
 * @param {string} path Route path.
 * @returns Router handler.
 */
export declare function Post(path: string): (target: any, key: string, descriptor: PropertyDescriptor) => PropertyDescriptor;
/**
 * Create router handler of method 'DELETE'.
 *
 * @export
 * @param {string} path Route path.
 * @returns Router handler.
 */
export declare function Delete(path: string): (target: any, key: string, descriptor: PropertyDescriptor) => PropertyDescriptor;
/**
 * Append interceptor to request.
 *
 * @export
 * @param {(req: Request, res: Response, next?: any) => void} func Interceptor function
 * @returns Router handler.
 */
export declare function Interceptor(func: RequestHandler): (target: any, key: string, descriptor: PropertyDescriptor) => void;
