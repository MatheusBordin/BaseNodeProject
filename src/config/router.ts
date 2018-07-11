import { Router } from "express";
import { router as HeartbeatRouter } from "../controllers/heartbeat";

export const router: Router = Router({ mergeParams: true });

router.use(HeartbeatRouter);
