import {Router} from "express";
import { criarUsers, listarUsers } from "./UserController.js";

const router = Router()

router.get("/",listarUsers)
router.post("/",criarUsers)

export default router