import { Injectable,forwardRef, NgModule } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { HttpModule } from '@angular/http';
import { AppConfig } from '../appconfig/index';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import {DataModel } from '../_models/index';

@Injectable()

export class QueryIssueService {
      private brandDataUrl: string = "../app/mockdata/select-brand.json"; 
      private typeDataUrl: string = "../app/mockdata/select-type.json";
      private brandProductUrl: string = "../app/mockdata/select-product.json"; 
      private brandPriorityUrl: string = "../app/mockdata/select-priority.json";
 
    constructor(private http: Http) {}  
  
    getBrandData(): Observable <DataModel[] > {  
        return this.http.get(this.brandDataUrl).map((response: Response) => {  
            return <DataModel[] > response.json()  
        }).catch(this.handleError);  
       } 
    getTypeData(): Observable <DataModel[] > {  
        return this.http.get(this.typeDataUrl).map((response: Response) => {  
            return <DataModel[] > response.json()  
        }).catch(this.handleError);  
      } 
    getProductData(): Observable <DataModel[] > {  
        return this.http.get(this.brandProductUrl).map((response: Response) => {  
            return <DataModel[] > response.json()  
        }).catch(this.handleError);  
     } 
    getPriorityData(): Observable <DataModel[] > {  
        return this.http.get(this.brandPriorityUrl).map((response: Response) => {  
            return <DataModel[] > response.json()  
        }).catch(this.handleError);  
     } 
  
    private handleError(errorResponse: Response) {  
        console.log(errorResponse.statusText);  
        return Observable.throw(errorResponse.json().error || "Server error");  
    }  



} 