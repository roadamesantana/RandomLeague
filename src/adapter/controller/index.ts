import { Controller, Get } from "@nestjs/common";

@Controller("")
export class IndexController {
    @Get()
    async getStatusServer(): Promise<string> {
        return `Status: OK | Port: ${process.env.PORT} | Version: ${process.env.VERSION}`;
    }
}