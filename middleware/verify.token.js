import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()

/**
 * next - Hvis disse betingelser er opfyldt, så skal den gå videre.
 */
const verifyToken = (req, res, next) => {
    
    const bearerHeader = req.headers['authorization']
    if(bearerHeader) {
       const access_token = bearerHeader.substring(7) 
       jwt.verify(access_token, process.env.PRIVATE_KEY, (err, result) => {
        if(!err) {
            next()
        } else {
            res.sendStatus(403)
        }
       })
    } else {
        res.sendStatus(401)
    }
}

export default verifyToken