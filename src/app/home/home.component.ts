import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { bobo } from '../pbobo'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public results:any;
  

  constructor(
    private http:HttpClient,
    private route: ActivatedRoute,
    ) { }
 bobo;
  ngOnInit() {

    this.http.get('/assets/data/data2.json').subscribe(data => {
      this.results = data;
      console.log(this.results[0].location.latitude)
    });    
    


    
    // this.route.paramMap.subscribe(params => {
    //   this.bobo = bobo[1].place.latitude;
    // })
    // console.log(this.bobo)
    
  }
 
}