import prisma from "../DB/db.config";
import vine from "@vinejs/vine";
import { registerSchema } from "../validations/authValidations";
import bcrypt from "bcryptjs";

class AuthController {
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
}

export default AuthController;
