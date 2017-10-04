import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { SalesService } from '../_services/index';
import { QueryDataModel } from '../_models/index';
import { DataTableModule, SharedModule } from 'primeng/primeng';
import { CalendarModule } from 'primeng/primeng';
import { Country, StateStore } from '../_models/index';
import { NgForm, FormsModule } from '@angular/forms';
import {DialogModule} from 'primeng/primeng';

@Component({
    moduleId: module.id,
    templateUrl:'query.summary.component.html',
    providers: [SalesService]

})
export class QuerySummaryComponent implements OnInit {
    querySummaryData: QueryDataModel[];
    data:QueryDataModel = new QueryDataModel();
    newData: boolean;
    selectedQuery: QueryDataModel;
    errorMessage: string;
    countries: Country[];
    stateStores: StateStore[];
    displayDialog: boolean = false;
     usrCtry: string;
     usrStore:string;
     usrtype:string;
      onClickEdit:boolean = true;
    //cols: any[];
    constructor(private salesService: SalesService) {

    }
    ngOnInit() {
       
      let currentUser = JSON.parse(localStorage.getItem('currentUser'));
         this.usrCtry = currentUser.userCountry;
         this.usrStore = currentUser.storeCodes;
         this.usrtype = currentUser.type;
         console.log(this.usrtype,"type")
        this.viewQuerySummaryData();
        if(this.usrtype = "SU"){
        
            
        }
    }

    viewQuerySummaryData() {
        this.salesService.getViewQuerySummary().subscribe(response => this.querySummaryData = response, error => this.errorMessage = <any>error);
    }
    
    delete() {
        let index = this.findSelectedCarIndex();
        this.querySummaryData = this.querySummaryData.filter((val,i) => i!=index);
        this.displayDialog = false;
    }    
    
    
    onRowDblclick(event:any) {
        this.newData = false;
        this.data = this.cloneData(event.data);
        this.displayDialog = true;
    }

    cloneData(q: QueryDataModel): QueryDataModel {
      let data = new QueryDataModel();
        for(let prop in q) {
           // data[prop] = q[prop];
        }
        return data;
    }

      save() {
          alert("data is saved");
        let querySummaryData = [...this.querySummaryData];
        if(this.newData)
            querySummaryData.push(this.data);
        else
            querySummaryData[this.findSelectedCarIndex()] = this.data;
        
        this.querySummaryData = querySummaryData;
        this.displayDialog = false;
       
    }
    
    
    findSelectedCarIndex(): number {
        return this.querySummaryData.indexOf(this.selectedQuery);
    }
}

 
   
    
    


