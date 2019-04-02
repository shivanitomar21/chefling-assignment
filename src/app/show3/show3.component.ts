import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'show3',
  templateUrl: './show3.component.html',
  styleUrls: ['./show3.component.css']
})
export class Show3 implements OnInit {

  static in: number = 0;
  static toAddPlanets: any = [];
  viewStoredPlanets: any[];
  constructor(private location: Location) { }

  ngOnInit() {
    this.viewStoredPlanets = JSON.parse(localStorage.getItem('session'));
    console.log(this.viewStoredPlanets);
  }

  // removeFromStorage(planet: String, index: number){
 
  //   this.viewStoredPlanets.splice(index, 1);

  //   window.localStorage.removeItem('keyName');

  //   localStorage.setItem("session", JSON.stringify(this.viewStoredPlanets));
  // }

}
