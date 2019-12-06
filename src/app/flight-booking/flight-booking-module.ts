import {CommonModule} from '@angular/common';
import { NgModule } from '@angular/core';
import { FlightSearchComponent } from './flight-search/flight-search.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { FlightService } from './flight-search/flight.service';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        SharedModule, FormsModule
    ],
    declarations: [
        FlightSearchComponent
    ],
    providers:[
        { provide: FlightService, useClass: FlightService }
    ],
    exports: [
        FlightSearchComponent
    ]
    })
    export class FlightBookingModule { }