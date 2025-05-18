import express from "express";
import { createPost, upload } from "../controller/post.controller.js";
import { verifyToken } from "../middleWare/authMiddleWare.js";

const router = express.Router();

router.post("/create", verifyToken, upload.fields([{ name: "image" }, { name: "video" }]), createPost);

export default router;
