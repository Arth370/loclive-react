import {Router} from "express";
import { criarprods, listarprods } from "./produtosController.js";

const router = Router()

router.get("/",listarprods)
router.post("/",criarprods)

export default router