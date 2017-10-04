import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { SalesService } from '../../_services/index';
import {PictureModel } from '../../_models/index';
import 'rxjs/Rx' ;

@Component({
    moduleId: module.id,
    templateUrl: 'pictures.component.html',
    providers:[SalesService]
 
})
export class PictureViewComponent implements OnInit {
  data : PictureModel[];
constructor(private salesService:SalesService){
}

 usrCtry: string;
   usrStore:string;

    ngOnInit() {
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
         this.usrCtry = currentUser.userCountry;
         this.usrStore = currentUser.storeCodes;
         this.getPicturesData();
    }


getPicturesData(){
    this.salesService.getViewPicturesData().subscribe(resp => this.data = resp)
}

downloadImage() {

}

}