import express from "express";
import { adminController } from "./admin.controller";

const router = express.Router();

// get all the admins
router.get("/", adminController.getAllAdmin);

export const adminRoutes = router;
