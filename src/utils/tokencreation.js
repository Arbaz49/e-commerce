import jwt from "jsonwebtoken";

const tokenCreation=(id)=>{
    return jwt.sign({id},process.env.SECRET_KEY|| "secret",{
        expiresIn:process.env.JWT_EXPIRY || "1d"
    })
}

export {tokenCreation}