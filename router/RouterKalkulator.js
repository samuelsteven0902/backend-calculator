import express from "express";

import { getHistory } from "../controller/KalkulatorController";

router.get('/kalkulator', getHistory)


const router = express.Router();