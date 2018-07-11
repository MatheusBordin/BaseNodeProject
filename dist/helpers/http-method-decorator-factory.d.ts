import { HttpMethod } from "../types/http-method";
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
export declare function HttpMethodDecoratorFactory(method: HttpMethod, path: string, target: any, key: string, descriptor: PropertyDescriptor): PropertyDescriptor;
