import {Component, OnInit} from '@angular/core';
import { HttpParams, HttpClient } from '@angular/common/http';
import { Flight } from '../../entities/flight';
import { FlightService } from './flight.service';

@Component({
selector: 'flight-search',
templateUrl: './flight-search.component.html'
})
export class FlightSearchComponent implements OnInit {

  from: string;
  to: string;
  flights: Flight[] = [];
  selectedFlight: Flight;

  constructor(private http: HttpClient, private flightService: FlightService) {
  }

  ngOnInit() { }

  search(): void {
    this.flightService
      .find(this.from, this.to)
      .subscribe(
        (flights) => {
          this.flights = flights;
        },
        (errResp) => {
          console.error('Error loading flights', errResp);
        });
  }
  

  select(f: Flight): void {
      this.selectedFlight = f;
  }
}