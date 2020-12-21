import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  
  city = {
    name: "",
    country: "",
  }
  
  cities:any[]=[];
  
  constructor() { }

  ngOnInit(): void {
  }
   saveAndShow( cit : any ){
    var i:number;
    if (cit.name){    
    localStorage.setItem(cit.name,cit.country);}
     
      this.cities = [];
          for (i = 0; i < localStorage.length; i++) 
          {
            var key:any;
            key = localStorage.key(i);
            if (key.substring(0,2)!='@L'){

              this.cities.push({
              "name": key,
              "country": localStorage.getItem(key)
            }) 
            }
          }

  }

}
