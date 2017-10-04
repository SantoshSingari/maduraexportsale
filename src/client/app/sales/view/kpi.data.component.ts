import { Component, OnInit,Input} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { SalesService,CommonService } from '../../_services/index';
import { ViewKpiSalesModel} from '../../_models/index'
import { Country,StateStore} from '../../_models/index';
import {DataTableModule,SharedModule} from 'primeng/primeng';
import {CalendarModule} from 'primeng/primeng';

@Component({
    moduleId: module.id,
    templateUrl: 'kpi.data.component.html',
    providers:[SalesService]
 
})
export class KpiViewComponent implements OnInit {
  countries : Country[];
  stores:StateStore[];
  kpiSalesData:ViewKpiSalesModel[];
  errorMessage: string;  
   usrCtry: string;
   usrStore:string;

    //cols: any[];
  constructor(private salesService:SalesService,private commonService:CommonService){

  }
  ngOnInit(){
     let currentUser = JSON.parse(localStorage.getItem('currentUser'));
         this.usrCtry = currentUser.userCountry;
         this.usrStore = currentUser.storeCodes;
       this.viewKpiSalesData();
       this.getCountriesList();
       this.getStoresList();

      
  }
   getCountriesList(){
         this.commonService.getCountries().subscribe(response => this.countries = response,error => this.errorMessage = < any > error);  
         }
    getStoresList(){
         this.commonService.getStores().subscribe(response => this.stores = response,error => this.errorMessage = < any > error);  
       }
    viewKpiSalesData(){
        this.salesService.getViewKpiSalesData().subscribe(response => this.kpiSalesData = response,error =>this.errorMessage = <any> error);
       }


}

