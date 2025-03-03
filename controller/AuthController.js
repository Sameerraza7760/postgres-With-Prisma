import prisma from "../DB/db.config";
import vine from "@vinejs/vine";
import { registerSchema } from "../validations/authValidations";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

class AuthController {
    // User Registration
    static async register(req, res) {
        try {
            // Extract request body
            const body = req.body;

            // Compile and validate the request body
            const validator = vine.compile(registerSchema);
            const validatedData = await validator.validate(body);

            // Check if user already exists
            const existingUser = await prisma.user.findUnique({
                where: { email: validatedData.email },
            });

            if (existingUser) {
                return res.status(400).json({ message: "User already exists" });
            }

            // Hash password
            const hashedPassword = await bcrypt.hash(validatedData.password, 10);

            // Create user in database
            const newUser = await prisma.user.create({
                data: {
                    name: validatedData.name,
                    email: validatedData.email,
                    password: hashedPassword,
                },
            });

            // Send success response
            return res.status(201).json({ message: "User registered successfully", user: newUser });

        } catch (error) {
            // Handle validation errors
            if (error.messages) {
                return res.status(400).json({ errors: error.messages });
            }

            // Handle other errors
            return res.status(500).json({ message: "Internal server error", error: error.message });
        }
    }

    // User Login
    static async login(req, res) {
        try {
            const { email, password } = req.body;

            // Validate input
            if (!email || !password) {
                return res.status(400).json({ message: "Email and password are required" });
            }

            // Check if user exists
            const user = await prisma.user.findUnique({
                where: { email },
            });

            if (!user) {
                return res.status(401).json({ message: "Invalid email or password" });
            }

            // Compare passwords
            const isPasswordValid = await bcrypt.compare(password, user.password);
            if (!isPasswordValid) {
                return res.status(401).json({ message: "Invalid email or password" });
            }

            // Generate JWT token
            const token = jwt.sign(
                { userId: user.id, email: user.email },
                process.env.JWT_SECRET,
                { expiresIn: "7d" } // Token expires in 7 days
            );

            // Send response with token
            return res.status(200).json({ message: "Login successful", token, user });

        } catch (error) {
            return res.status(500).json({ message: "Internal server error", error: error.message });
        }
    }
}

export default AuthController;
