import { Request, Response, NextFunction } from "express";
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

const { verify } = jwt;
type token = {
  email:String,
  iat:number,
  exp:number,
}

const protect = async (req: Request, res:Response, next:NextFunction) => {
    try {
      let token;
  
      if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        token = req.headers.authorization.split(' ')[1];
      }
  
      if (!token) {
        return res.status(401).json({ message: 'You are not logged in!' });
      }
  
      const decoded :token = verify(token, process.env.JWT_SECRET)
      const isTokenExpired : boolean = checkExpirationStatus(decoded);
      if(isTokenExpired){
        return res.status(401).json({message:"Token Expired"})
      }
      next();
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  export function checkExpirationStatus(token: token): boolean {
    const now = Date.now();
    if (token.exp > now / 1000) return false;
 
    return true;
}

  export default protect;