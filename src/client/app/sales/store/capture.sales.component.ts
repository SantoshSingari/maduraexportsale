import { Component,OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { DataTableModule, SharedModule } from 'primeng/primeng';
import { CalendarModule } from 'primeng/primeng';
import { FormGroup, FormControl, Validators, NgForm, FormsModule } from '@angular/forms';
import { CaptureSaleModel,Status } from '../../_models/index';
import {GlobalEventsManager} from "../../GlobalEventsManager";
import { CaptureService} from '../../_services/index';
@Component({
    moduleId: module.id,
    templateUrl: 'capture.sales.component.html'

})

export class SalesComponent implements OnInit {

  @Output() modified: EventEmitter<any> = new EventEmitter<any>();
    saleData = new CaptureSaleModel();
    min: number = 0 ;
    max: number = 100;
    showNavBar:boolean;
    submitted :boolean = false;
   country = '';
   store = '';
   storeArea:any;
   usrCtry: string;
   usrStore:string;
   status = Status;
   errorMsg:string;


constructor(private captureService:CaptureService){

}
    ngOnInit() {
        let value =  localStorage.getItem("showNavBar");
       if(value==='true'){
           this.showNavBar = true;
       } else {
           this.showNavBar = false;
       }
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
         this.usrCtry = currentUser.userCountry;
         this.usrStore = currentUser.storeCodes;
    }


onCtryStoreChange(event:any){
    this.country = event[0];
    this.store = event[1];
    this.storeArea = event[2];
  }
    onlyNumber(event: any) {
        const pattern = /[0-9]/;
        let inputChar = String.fromCharCode(event.charCode);
        if (!pattern.test(inputChar)) {
            event.preventDefault();
        }
    }

    decimal(event: any) {
        const pattern = /[0-9/./]/;
        let inputChar = String.fromCharCode(event.charCode);
        if (!pattern.test(inputChar)) {
            event.preventDefault();
        }
    }
  
    calculateTotal(saleData: CaptureSaleModel) {
        let price = saleData.price;
        let qty = saleData.quantity;
        let discnt = saleData.discount;
        saleData.total = price * qty;
        if (discnt > 0) {
            saleData.total = saleData.total - ((saleData.total * discnt) / 100);
        }
    }
    
    saveCaptureSaleData(saleData: CaptureSaleModel) {
      saleData.country = this.country;
      saleData.store = this.store;
        console.log(this.saleData,"capture sale data");
      this.captureService.createCaptureSale(saleData)
      .subscribe(status => this.saleData = status,
             statusError => this.errorMsg = statusError);
      } 
   
}


