import {Router} from "express";
import { criaralugs, listaralugueis } from "./aluguelController.js";

const router = Router()

router.get("/",listaralugueis)
router.post("/",criaralugs)

export default router