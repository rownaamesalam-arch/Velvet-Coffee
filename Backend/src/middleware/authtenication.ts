import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export const authMiddleware = (
    req: Request,
    res: Response,
    next: NextFunction
) => {

    try {

        const authHeader = req.headers.authorization;

        if (!authHeader) {
            return res.status(401).json({
                message: "authorization header is required"
            });
        }

        const [type, token] = authHeader.split(" ");

        if (type !== "Bearer" || !token) {
            return res.status(401).json({
                message: "use Bearer token"
            });
        }

        const decoded = jwt.verify(
            token,
            "hdfWLV'LKMD'VLML;MmsvOFNBN"
        ) as { userId: string };

        req.user = decoded.userId;

        next();

    } catch (error) {

        return res.status(401).json({
            message: "invalid or expired token"
        });

    }
};


