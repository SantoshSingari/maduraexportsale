import { Injectable,forwardRef, NgModule } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { HttpModule } from '@angular/http';
import { AppConfig } from '../appconfig/index';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import { StateStore,Country } from '../_models/index';

@Injectable()
export class CommonService {
     private countryUrl: string = "../app/mockdata/country.json";  
    private storeUrl: string = "../app/mockdata/store.json"; 
 
    constructor(private http: Http) {}  
  
    getCountries(): Observable <Country[] > {  
        return this.http.get(this.countryUrl).map((response: Response) => {  
            return <Country[] > response.json()  
        }).catch(this.handleError);  
    } 

     getStores(): Observable < StateStore[] > {  
        return this.http.get(this.storeUrl).map((response: Response) => {  
            return <StateStore[] > response.json()  
        }).catch(this.handleError);  
    } 
  
    private handleError(errorResponse: Response) {  
        console.log(errorResponse.statusText);  
        return Observable.throw(errorResponse.json().error || "Server error");  
    }  



} 