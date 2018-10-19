import { Inject, EventEmitter, Injectable } from "@angular/core";
import { DashboardService } from "../services/dashboard.service";
import { BehaviorSubject } from "rxjs/internal/BehaviorSubject";
import { Observable } from "rxjs";

@Injectable()
export class DashboardStore {
    private dashData: BehaviorSubject<any> = new BehaviorSubject(([]));
    constructor(private dashService: DashboardService) {
        this.loadInitialData();
    }
    get todos() {
        return this.dashData;
    }

    private loadInitialData(){
        this.dashService.getConfig()
            .subscribe(
                res => {
                    this.generateRandomValue(res);
                },
                err => console.log("Error retrieving Todos")
            );

        this.dashService.getConfig();
    }
    private generateRandomValue(array){
        let radNum = Math.floor(Math.random() * Math.floor(array.length+1));
        let newArray = [];
        for (let index = 0; index < radNum; index++) {
           newArray.push(array[index]);
            
        }
        console.log(newArray);
        this.dashData.next(newArray);
    }
}