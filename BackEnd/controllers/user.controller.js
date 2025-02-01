import {User} from '../models/user.model.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const register = async (req, res) => {
    try {
        const { fullname, email, phoneNumber, password, role } = req.body;
        if (!fullname || !email || !phoneNumber || !password || !role) {
            return res.status(400).json({
                mess: "Something is missing",
                success: false
            });
        }

        // Check if email already exists
        let user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({
                mess: "User already exists with this email",
                success: false
            });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);
        await User.create({
            fullname,
            email,
            phoneNumber,
            password: hashedPassword,
            role
        });

        return res.status(200).json({
            mess: "Account created successfully",
            success: true
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            mess: "Internal Server Error",
            success: false
        });
    }
};

export const login = async (req, res) => {
    try {
        const { email, password, role } = req.body;
        if (!email || !password || !role) {
            return res.status(400).json({
                mess: "Something is missing",
                success: false
            });
        }

        // Check if the email exists
        let user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({
                mess: "Incorrect email or password",
                success: false
            });
        }

        // Verify password
        const isPasswordMatched = await bcrypt.compare(password, user.password);
        if (!isPasswordMatched) {
            return res.status(400).json({
                mess: "Incorrect email or password",
                success: false
            });
        }

        // Check role match
        if (role !== user.role) {
            return res.status(400).json({
                mess: "Account does not exist for current role.",
                success: false
            });
        }

        const tokenData = { userId: user._id };
        const token = jwt.sign(tokenData, process.env.SECRET_KEY, { expiresIn: '1d' });

        user = {
            _id: user._id,
            fullname: user.fullname,
            email: user.email,
            phoneNumber: user.phoneNumber,
            role: user.role,
            profile: user.profile
        };

        return res.status(200).cookie("token", token, {
            maxAge: 24 * 60 * 60 * 1000,
            httpOnly: true,
            sameSite: 'strict'
        }).json({
            mess: `Welcome back ${user.fullname}`,
            user,
            success: true
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            mess: "Internal Server Error",
            success: false
        });
    }
};

export const logOut = async (req, res) => {
    try {
        return res.status(200).cookie("token", "", { maxAge: 0 }).json({
            mess: "Logged Out Successfully",
            success: true
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            mess: "Internal Server Error",
            success: false
        });
    }
};

export const updateProfile = async (req, res) => {
    try {
        const { fullname, email, phoneNumber, bio, skills } = req.body;
        console.log(fullname)
        const userId = req.id;
        console.log(userId);
        let user = await User.findById(userId);
        if (!user) {
            return res.status(400).json({
                mess: "User not found",
                success: false
            });
        }

        // Ensure profile exists
        if(fullname) user.fullname = fullname
        if(email) user.email = email;
        if(phoneNumber) user.phoneNumber = phoneNumber;
        if(bio) user.profile.bio = bio;
        if(skills) user.profile.skills = skills.split(",");
        await user.save();
        return res.status(200).json({
            mess: "Profile updated successfully",
            user,
            success: true
        })
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            mess: "Internal Server Error",
            success: false
        });
    }
};