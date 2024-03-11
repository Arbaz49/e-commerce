import jwt from "jsonwebtoken";

const verifyToken=async token=>{
return await jwt.verify(token,process.env.SECRET_KEY || "secret");
}

export{verifyToken}