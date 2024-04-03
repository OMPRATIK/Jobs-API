import { Router } from "express";
const router = Router();
import { login, register } from "../controllers/auth.js";
import hashPassword from "../middleware/hashPassword.js";

router.post("/register", hashPassword, register);
router.post("/login", login);

export default router;
