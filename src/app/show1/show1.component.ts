import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map'
@Component({
  selector: 'show1',
  templateUrl: './show1.component.html',
  styleUrls: ['./show1.component.css']
})
export class Show1 implements OnInit {

  static toggle : any[];
  static in: number = 0;
  planets: any[];
  static toAddPlanets: any = [];
  constructor(private location: Location, private http : Http) { }

  ngOnInit() {
    this.http.get("https://swapi.co/api/planets").subscribe(response => {
      this.planets = response.json();
      console.log(this.planets);
      },
      (error: any) => {
        this.planets = [];
        console.log("Failed to get tournaments. Server Error.");
      });
  }

  addtoStorage(planet: String, index: number){

    Show1.toAddPlanets[Show1.in] = planet;
    Show1.in++;

    localStorage.setItem('session', JSON.stringify(Show1.toAddPlanets));
    alert("Planet added to local storage.");

    var user = [];
    user = JSON.parse(localStorage.getItem('session'));
    console.log(user);
  }
}