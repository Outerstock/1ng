import { Component, OnInit } from '@angular/core';
import MarkerClusterer from "@google/markerclusterer"
import { HttpClient } from '@angular/common/http';
import { throwError } from 'rxjs';
@Component({
  selector: 'app-apimap',
  templateUrl: './apimap.component.html',
  styleUrls: ['./apimap.component.css']
})
export class ApimapComponent implements OnInit {
  public results:any;
  public map:any;

  constructor(
    private http:HttpClient,
  ) { }
  async initMap() {
    await this.http.get('/assets/data/data2.json').subscribe(data => {
      this.results = data;
      // console.log(this.results[0].location.latitude)
      // console.log(this.results[0].location.longitude)
      // return this.results
      var data_point = []
      for (let i = 0; i < this.results.length ; i++) {
        // console.log (this.results[i].location.latitude);
        var temp = {
          lat:this.results[i].location.latitude,
          lng:this.results[i].location.longitude
        }
        var labels = this.results[i].name;

        var temp1 = new google.maps.Marker({
          position: temp,
          label: labels
        });

        data_point.push(temp1)
        this.map = data_point
      }
      var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 8,
        center: {lat: 13.726347648462, lng: 100.51451683497}
      });
      var markerCluster = new MarkerClusterer(map, data_point,
        {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
      console.log(data_point)
    })
 
    console.log(this.map)

    // Create an array of alphabetical characters used to label the markers.

    // Add some markers to the map.
    // Note: The code uses the JavaScript Array.prototype.map() method to
    // create an array of markers based on a given "locations" array.
    // The map() method here has nothing to do with the Google Maps API.
    // var markers = locations.map(function(location, i) {
    //   return new google.maps.Marker({
    //     position: location,
    //     label: labels[i % labels.length]
    //   });
    // });

    // Add a marker clusterer to manage the markers.
  
  }
  
  ngOnInit(): void {
    
    this.initMap()
   
  }

}
var locations = [
  {lat: -31.563910, lng: 147.154312},
  {lat: -33.718234, lng: 150.363181},
  {lat: -33.727111, lng: 150.371124},
  {lat: -33.848588, lng: 151.209834},
  {lat: -33.851702, lng: 151.216968},
  {lat: -34.671264, lng: 150.863657},
  {lat: -35.304724, lng: 148.662905},
  {lat: -36.817685, lng: 175.699196},
  {lat: -36.828611, lng: 175.790222},
  {lat: -37.750000, lng: 145.116667},
  {lat: -37.759859, lng: 145.128708},
  {lat: -37.765015, lng: 145.133858},
  {lat: -37.770104, lng: 145.143299},
  {lat: -37.773700, lng: 145.145187},
  {lat: -37.774785, lng: 145.137978},
  {lat: -37.819616, lng: 144.968119},
  {lat: -38.330766, lng: 144.695692},
  {lat: -39.927193, lng: 175.053218},
  {lat: -41.330162, lng: 174.865694},
  {lat: -42.734358, lng: 147.439506},
  {lat: -42.734358, lng: 147.501315},
  {lat: -42.735258, lng: 147.438000},
  {lat: -43.999792, lng: 170.463352},
  {lat: 13.886870410863,lng: 100.570037614}
]