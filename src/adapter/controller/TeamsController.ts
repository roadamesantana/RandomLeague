import { HttpService } from "@nestjs/axios";
import { Controller, Get } from "@nestjs/common";

@Controller("teams")
export class TeamsController {

    constructor(private httpService: HttpService){}

    @Get()
    async getStatusServer() {
        const config = {
            headers: {
                'x-rapidapi-host': 'v3.football.api-sports.io',
                'x-rapidapi-key': '6a6bf951063d463f5d8050f038147935'
            }
        };

        const get = this.httpService.get("https://v3.football.api-sports.io/teams?league=2&season=2021", config);

        console.log(get.subscribe.caller);        
    }
}