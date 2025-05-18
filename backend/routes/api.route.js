import express from "express";
import {
  verify,
  login,
  signup,
  logout,
  forgotPassword,
  resetPassword,
  checkAuth,
} from "../controller/auth.controller.js";
import {verifyToken}  from "../middleWare/verifyToken.js";

const router = express.Router();

// Authentication Routes
router.post("/signup", signup); // User registration
router.post("/login", login); // User login
router.post("/verify", verify); // Email/Account verification
router.post("/logout", logout); // Logout user

// Password Reset Routes
router.post("/forgot-password", forgotPassword); // Request password reset
router.post("/reset-password", resetPassword); // Reset password

// Check Authentication
router.get("/check-auth", verifyToken, checkAuth); // Verify user session

export default router;
