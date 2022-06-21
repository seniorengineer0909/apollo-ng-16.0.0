import { Component, OnInit } from '@angular/core';
import {MessageService} from 'primeng/api';

declare var google: any;

@Component({
    selector: 'app-contact',
    templateUrl: './app.contact.component.html',
    providers: [MessageService]
})
export class AppContactComponent implements OnInit {
    
    options: any;

    overlays: any[];

    dialogVisible: boolean;

    markerTitle: string;

    selectedPosition: any;

    infoWindow: any;

    draggable: boolean;

    name: string;

    email: string;

    message: string;

    content: any[] = [
        {icon: 'pi pi-fw pi-phone', title: 'Phone', info:'1 (833) 597-7538'},
        {icon: 'pi pi-fw pi-map-marker', title: 'Our Head Office', info:'Churchill-laan 16 II, 1052 CD, Amsterdam'},
        {icon: 'pi pi-fw pi-print', title: 'Fax', info:'3 (833) 297-1548'}
    ];

    constructor(private messageService: MessageService) {}

    ngOnInit() {
      this.options = {
          center: {lat: 36.890188353722, lng: 30.707298982803362},
          zoom: 12
      };
      
      this.initOverlays();
      this.infoWindow = new google.maps.InfoWindow();
      this.overlays.push(new google.maps.Marker({position:{lat: this.options.center.lat.lat(), lng: this.options.center.lng.lng()}, title:'Churchill-laan 16 II, 1052 CD, Amsterdam', draggable: false}));

    }
  
    handleMapClick(event) {
        this.dialogVisible = true;
        this.selectedPosition = event.latLng;
    }
    
    handleOverlayClick(event) {
        let isMarker = event.overlay.getTitle != undefined;
        
        if (isMarker) {
            let title = event.overlay.getTitle();
            this.infoWindow.setContent('<div>' + title + '</div>');
            this.infoWindow.open(event.map, event.overlay);
            event.map.setCenter(event.overlay.getPosition());
            
            this.messageService.add({severity:'info', summary:'Marker Selected', detail: title});
        }
        else {
            this.messageService.add({severity:'info', summary:'Shape Selected', detail: ''});
        }
    }
    
    addMarker() {
        this.overlays.push(new google.maps.Marker({position:{lat: this.selectedPosition.lat(), lng: this.selectedPosition.lng()}, title:this.markerTitle, draggable: this.draggable}));
        this.markerTitle = null;
        this.dialogVisible = false;
    }
    
    initOverlays() {
        if (!this.overlays||!this.overlays.length) {
            this.overlays = [
                new google.maps.Marker({position: {lat: 36.879466, lng: 30.667648}, title:"Konyaalti"}),
                new google.maps.Marker({position: {lat: 36.883707, lng: 30.689216}, title:"Ataturk Park"}),
                new google.maps.Marker({position: {lat: 36.885233, lng: 30.702323}, title:"Oldtown"}),
                new google.maps.Polygon({paths: [
                    {lat: 36.9177, lng: 30.7854},{lat: 36.8851, lng: 30.7802},{lat: 36.8829, lng: 30.8111},{lat: 36.9177, lng: 30.8159}
                ], strokeOpacity: 0.5, strokeWeight: 1,fillColor: '#1976D2', fillOpacity: 0.35
                }),
                new google.maps.Circle({center: {lat: 36.90707, lng: 30.56533}, fillColor: '#1976D2', fillOpacity: 0.35, strokeWeight: 1, radius: 1500}),
                new google.maps.Polyline({path: [{lat: 36.86149, lng: 30.63743},{lat: 36.86341, lng: 30.72463}], geodesic: true, strokeColor: '#FF0000', strokeOpacity: 0.5, strokeWeight: 2})
            ];
        }
    }
}