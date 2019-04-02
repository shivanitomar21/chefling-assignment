import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map'
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
@Component({
  selector: 'show2',
  templateUrl: './show2.component.html',
  styleUrls: ['./show2.component.css']
})
export class Show2 implements OnInit, PipeTransform {

  transform(items: any[], field: string, value: string): any[] {
    if (!items) {
        return [];
    }
    if (!field || !value) {
        return items;
    }

    return items.filter(singleItem =>
        singleItem[field].toLowerCase().includes(value.toLowerCase())
    );
}

  searchToken: string;
  movies: any[];
  constructor(private location: Location,private http: Http) { }

  ngOnInit() {

    this.http.get("https://swapi.co/api/films").subscribe(response => {
      this.movies = response.json();
      console.log(this.movies);
      // console.log(JSON.stringify(this.movies));
      },
      (error: any) => {
        this.movies = [];
        console.log("Failed to get movies. Server Error.");
      });
  }
}
