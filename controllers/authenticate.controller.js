import UserModel from "../models/users.model.js"
import dotenv from 'dotenv'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
dotenv.config()

class AuthenticateController {
    login = async (req, res) => {
        const { username, password } = req.body //Destructor assignment
        if(username && password) {
            const userdata = await UserModel.findOne({
                attributes: ['id', 'password'],
                where: { email: username }
            })

            bcrypt.compare(password, userdata.password, (err, result) => {
                if(result) {
                    /**
                     * Genere json web token ud fra bruger_id og secret key
                     * Når vi genere en token så skal vi bruge et bruger id
                     */
                    const token = jwt.sign(userdata.id, process.env.PRIVATE_KEY)
                    res.json({access_token: token})
                } else {
                    res.sendStatus(401)
                }
            })
        } else {
            res.sendStatus(401)
        }
    }
    protected = async (req, res) => {
        res.sendStatus(200)
    }
}

export default AuthenticateController