import { Component,OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { QueryDataModel } from '../_models/index';
import { NgForm, FormsModule } from '@angular/forms';
import { QueryIssueService } from '../_services/index';
import { Http,HttpModule }      from '@angular/http';
import { DataModel } from '../_models/index';

@Component({
    moduleId: module.id,
    templateUrl: 'add.component.html',
    providers:[QueryIssueService]
 
})
export class QueryAddComponent implements OnInit {
  @Output() modified: EventEmitter<any> = new EventEmitter<any>();
  queryData= new QueryDataModel;
 brandData:DataModel[];
 typeData:DataModel[];
 productData:DataModel[]; 
 priorityData:DataModel[];
  errorMessage: string; 
  usrCtry: string;
   usrStore:string;
   country = '';
store = '';
storeArea:any;
   constructor(private queryIssueService: QueryIssueService) {
      }

    ngOnInit(){
      let currentUser = JSON.parse(localStorage.getItem('currentUser'));
         this.usrCtry = currentUser.userCountry;
         this.usrStore = currentUser.storeCodes;
      this.getBrandList();
      this.getTypeList();
      this.getProductList();
      this.getPriorityList();
    }

onCtryStoreChange(event:any){
    this.country = event[0];
    this.store = event[1];
    this.storeArea = event[2];
  }
    getBrandList(){
      this.queryIssueService.getBrandData().subscribe(response => this.brandData = response,error => this.errorMessage = <any> error);  
      }
    getTypeList(){
      this.queryIssueService.getTypeData().subscribe(response => this.typeData = response,error => this.errorMessage = <any> error);  
    }
     
     getProductList() {
      this.queryIssueService.getProductData().subscribe(response => this.productData = response,error => this.errorMessage = <any> error);  
      }
     getPriorityList() {
      this.queryIssueService.getPriorityData().subscribe(response => this.priorityData = response,error => this.errorMessage = <any> error);  
    }

    addQueryIssueData(queryData:QueryDataModel){
      queryData.country = this.country;
      queryData.store = this.store;
      console.log(this.queryData,"add query issue data");

    }
}

