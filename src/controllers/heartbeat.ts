import { HttpController } from "../types/http-controller";
import * as express from "express";
import { Get, Controller } from "../decorators/http-decorator";

@Controller()
class HeartbeatController extends HttpController {
    @Get("heartbeat")
    public live(req: express.Request, res: express.Response) {
        res.send('O.O');
    }
}

const controller = new HeartbeatController();
console.log(controller.routes);

export const { router } = controller;