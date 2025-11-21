import {Router} from "express";
import { criarUsers, listarUsers,attUser } from "./UserController.js";

const router = Router()

router.get("/",listarUsers)
router.post("/",criarUsers)
router.put("/:id",attUser)

export default router