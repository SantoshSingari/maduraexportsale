import { Component,OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { DataTableModule, SharedModule } from 'primeng/primeng';
import { CalendarModule } from 'primeng/primeng';
import { FormGroup, FormControl, Validators, NgForm, FormsModule } from '@angular/forms';
import { KpiDataModel ,StateStore} from '../../_models/index';

@Component({
    moduleId: module.id,
    templateUrl: 'capture.kpi.data.component.html',
 
})
export class KpiStoreComponent implements OnInit {
 
  @Output() modified: EventEmitter<any> = new EventEmitter<any>();
 kpiData = new KpiDataModel();
 //storesData:StateStore[];
 submitted :boolean = false;
title = 'app';
country = '';
store = '';
storeArea:any;
retVal:string[];
 usrCtry: string;
   usrStore:string;

    ngOnInit() {
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
 

  //value: No. of Bills ÷ No. of Walk-Ins
  calculatedConversation(kpiData:KpiDataModel){
   let noOfBills = this.kpiData.noofbills;
   let noofWalkins = this.kpiData.walkins;
   this.kpiData.conversion = noOfBills / noofWalkins;
  }

  //Formula to calculate value: Total Bills Value ÷ No. of Bills
  avgBillValue(kpiData:KpiDataModel){
      let toltalBillvalue = this.kpiData.totalbills;
      let noOfBills = this.kpiData.noofbills;
      this.kpiData.avgbillvalue = toltalBillvalue / noOfBills;
  }

  //Total Bills Value ÷ Store Area in Square Feet
  sspdValue(kpiData:KpiDataModel){
       let toltalBillvalue = this.kpiData.totalbills;
           this.kpiData.sspd = toltalBillvalue / this.storeArea ;
           console.log(this.storeArea,"1234")
    
  }
  //calculate value: No. of Pcs Sold ÷ No. of Bills
  unitPerTransaction(kpiData:KpiDataModel){
      let noofpcsold = this.kpiData.noofpcsold;
      let noofbills = this.kpiData.noofbills;
      this.kpiData.unitspertransaction = noofpcsold / noofbills;

  }

   saveCaptureKpiData(kpiData:KpiDataModel) {
    kpiData.country = this.country;
    kpiData.store = this.store;
     console.log(this.kpiData,"capture kpiData");
    
    
    }
}

