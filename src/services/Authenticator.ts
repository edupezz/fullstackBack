import * as jwt from 'jsonwebtoken';

interface AuthenticationData {
    id: string,
}

export class Authenticator{
    public generateToken(input: AuthenticationData): string{
        return jwt.sign(
            input,
            process.env.JWT_KEY as string,
            {expiresIn: process.env.ACCESS_TOKEN_EXPIRES_IN}
        )
    }

     public getTokenData(token: string): any{
        return jwt.verify(
            token,
            process.env.JWT_KEY as string 
        )
     }
}