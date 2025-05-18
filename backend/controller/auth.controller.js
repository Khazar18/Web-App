import { User } from '../models/user.model.js';
import { sendResetPasswordEmail, sendWelcomeEmail, sendeVerificaitonEmail } from '../mailtrap/emails.js';
import { generateJwtToken } from '../util/generateJwtToken.js';
import bcryptjs from 'bcryptjs';
import crypto from 'crypto';

export const signup = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        if (!name || !email || !password) {
            res.status(400).json({
                success: false,
                error: 'Please provide name, email and password',
            });
        }
        const userAlreadyExists = await User.findOne({ email });
        if (userAlreadyExists) {
            res.status(400).json({
                success: false,
                error: 'User already exists',
            });
        }
        const hashedPassword = await bcryptjs.hash(password, 10);
        const verifcationToken = Math.floor(Math.random()* 100000  + 100000).toString();

        const user = new User({
            name,
            email,
            password: hashedPassword,
            verifcationToken: verifcationToken,
            verifcationTokenExpire: Date.now() + 10 * 60 * 1000, // 10 minutes
        });

        await user.save();
        generateJwtToken(res, user._id);

        await  sendeVerificaitonEmail(user.email,user.name, verifcationToken);

        res.status(201).json({
            success: true,
            message: 'User created',
            user:{
                ...user._doc,
                password: undefined,
            }
        });

    } catch (error) {     
        res.status(400).json({
            success: false,
            error: error.message,
        });
    }
}

export const verify = async (req, res) => {
    const {code} = req.body;
    try {

        const user = await User.findOne({ verifcationToken: code,
            verifcationTokenExpire: { $gt: Date.now() } 
         });

        if (!user) {
            res.status(400).json({
                success: false,
                error: 'Invalid or expired verification code',
            });
        }
        user.verfied=true;
        user.verifcationToken=undefined;
        user.verifcationTokenExpire=undefined;
        await user.save();

        await sendWelcomeEmail(user.email, user.name);

        res.status(200).json({ success: true, message: 'User verified' ,
        user:{
            ...user._doc,
            password: undefined,
        }});

    } catch (error) {
        res.status(400).json({
            success: false,
            error: error.message,
        });
    }
}

export const login = async (req, res) => {
    const { email, password } = req.body;
    try {
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({ success: false, message: "Invalid credentials" });
      }
      const isPasswordValid = await bcryptjs.compare(password, user.password);
      if (!isPasswordValid) {
        return res.status(400).json({ success: false, message: "Invalid credentials" });
      }
      generateJwtToken(res, user._id); // Ensure this function sets the token in cookies
  
      user.lastLogin = new Date();
      await user.save();
  
      res.status(200).json({
        success: true,
        message: "Logged in successfully",
        user: {
          ...user._doc,
          password: undefined,
        },
      });
    } catch (error) {
      console.log("Error in login ", error);
      res.status(400).json({ success: false, message: error.message });
    }
  };

export const logout = async (req, res) => {
	res.clearCookie("token");
	res.status(200).json({ success: true, message: "Logged out successfully" });
};

export const forgotPassword = async (req, res) => {
	const { email} = req.body;
	try {
		const user = await User.findOne({ email });

		if (!user) {
			return res.status(400).json({ success: false, message: "User not found" });
		}

		// Generate reset token
		const resetToken = crypto.randomBytes(20).toString("hex");
		const resetTokenExpiresAt = Date.now() + 1 * 60 * 60 * 1000; // 1 hour

		user.resetPasswordToken = resetToken;
		user.resetPasswordExpire = resetTokenExpiresAt;

		await user.save();

		// send email
		await sendResetPasswordEmail(user.email, user.name,`${process.env.CLIENT_URL}/reset-password/${resetToken}`);

		res.status(200).json({ success: true, message: "Password reset link sent to your email" });
	} catch (error) {
		console.log("Error in forgotPassword ", error);
		res.status(400).json({ success: false, message: error.message });
	}
};

export const resetPassword = async (req, res) => {
	try {
		const { token } = req.params;
		const { password } = req.body;

		const user = await User.findOne({
			resetPasswordToken: token,
			resetPasswordExpire: { $gt: Date.now() },
		});

		if (!user) {
			return res.status(400).json({ success: false, message: "Invalid or expired reset token" });
		}

		// update password
		const hashedPassword = await bcryptjs.hash(password, 10);

		user.password = hashedPassword;
		user.resetPasswordToken = undefined;
		user.resetPasswordExpire = undefined;
		await user.save();

		await sendResetSuccessEmail(user.email);

		res.status(200).json({ success: true, message: "Password reset successful" });
	} catch (error) {
		console.log("Error in resetPassword ", error);
		res.status(400).json({ success: false, message: error.message });
	}
};

export const checkAuth = async (req, res) => {
	try {
		const user = await User.findById(req.userId).select("-password");
		if (!user) {
			return res.status(400).json({ success: false, message: "User not found" });
		}

		res.status(200).json({ success: true, user });
	} catch (error) {
		console.log("Error in checkAuth ", error);
		res.status(400).json({ success: false, message: error.message });
	}
};