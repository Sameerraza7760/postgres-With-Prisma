import prisma from "../DB/db.config";
import vine from "@vinejs/vine";
import { registerSchema } from "../validations/authValidations";
class AuthController {
    static async register (req,res){
        const body = req.body

        const validator = vine.compile(registerSchema)
        
    }
}