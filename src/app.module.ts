import { HttpModule } from "@nestjs/axios";
import { Module } from "@nestjs/common";
import * as dotenv from "dotenv";
import { IndexController } from "./adapter/controller";
import { TeamsController } from "./adapter/controller/TeamsController";

dotenv.config();

@Module({
    imports: [HttpModule],
    controllers: [IndexController, TeamsController]
})
export class AppModule { }