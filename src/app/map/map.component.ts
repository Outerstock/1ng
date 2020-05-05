import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { MouseEvent } from '@agm/core';
import * as MarkerClusterer from "@google/markerclusterer"

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})


export class MapComponent implements AfterViewInit {
	@ViewChild("mapContainer", { static: false }) gmap: ElementRef;
	map: google.maps.Map;
	lat = 40.73061;
	lng = 73.935242;
	
	
	markers = [
	  {
		position: new google.maps.LatLng(40.73061, 73.935242),
		map: this.map,
		title: "Marker 1"
	  },
	  {
		position: new google.maps.LatLng(32.06485, 34.763226),
		map: this.map,
		title: "Marker 2"
	  },
	  {
		position: new google.maps.LatLng(32.16485, 34.863226),
		map: this.map,
		title: "Marker 3"
	  },
	  {
		position: new google.maps.LatLng(32.26485, 34.863226),
		map: this.map,
		title: "Marker 4"
	  },
	  {
		position: new google.maps.LatLng(32.26485, 34.863226),
		map: this.map,
		title: "Marker 5"
	  },
	  {
		position: new google.maps.LatLng(40.93061, 73.835242),
		map: this.map,
		title: "Marker a"
	  },
	  {
		position: new google.maps.LatLng(40.93061, 73.835242),
		map: this.map,
		title: "Marker v"
	  },
	  {
		position: new google.maps.LatLng(40.93061, 71.835242),
		map: this.map,
		title: "Marker c"
	  },
	  {
		position: new google.maps.LatLng(40.53061, 73.835242),
		map: this.map,
		title: "Marker x"
	  },
	];
	
	//Coordinates to set the center of the map
	coordinates = new google.maps.LatLng(this.lat, this.lng);
  
	mapOptions: google.maps.MapOptions = {
	  center: this.coordinates,
	  zoom: 8
	};
  
	//Default Marker
	marker = new google.maps.Marker({
	  position: this.coordinates,
	  map: this.map,
	  title: "Hello World!"
	});
  
	// Clusterer = new MarkerClusterer(this.map, this.marker, this.mapOptions)

	ngAfterViewInit(): void {
	  this.mapInitializer();
	}
  
	mapInitializer(): void {
	  this.map = new google.maps.Map(this.gmap.nativeElement, this.mapOptions);
  
	  //Adding Click event to default marker
	  this.marker.addListener("click", () => {
		const infoWindow = new google.maps.InfoWindow({
		  content: this.marker.getTitle()
		});
		infoWindow.open(this.marker.getMap(), this.marker);
	  });
  
	  //Adding default marker to map
	  this.marker.setMap(this.map);
  
	  //Adding other markers
	  this.loadAllMarkers();
	}
  
	loadAllMarkers(): void {
	  this.markers.forEach(markerInfo => {
		//Creating a new marker object
		const marker = new google.maps.Marker({
		  ...markerInfo
		});
  
		//creating a new info window with markers info
		const infoWindow = new google.maps.InfoWindow({
		  content: marker.getTitle()
		});
  
		//Add click event to open info window on marker
		marker.addListener("click", () => {
		  infoWindow.open(marker.getMap(), marker);
		});
  
		//Adding marker to google map
		marker.setMap(this.map);
	  });
	}
  }