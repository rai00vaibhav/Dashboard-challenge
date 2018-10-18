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
                    this.dashData.next(res);
                },
                err => console.log("Error retrieving Todos")
            );

        this.dashService.getConfig();
    }
}