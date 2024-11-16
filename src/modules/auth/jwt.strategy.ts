import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { emitWarning } from "process";
import { ignoreElements } from "rxjs";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy){
    constructor(){
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrkey: "Codigo_Secreta"

        })
    }
    async validate(payload: any){
        return{email: payload.email, id:payload.id}
    }
}