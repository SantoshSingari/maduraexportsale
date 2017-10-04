import { Injectable, forwardRef, NgModule } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { HttpModule } from '@angular/http';
import { AppConfig } from '../appconfig/index';
import { Observable } from 'rxjs/Rx';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { StateStore, Country, CaptureSaleModel } from '../_models/index';

@Injectable()
export class CaptureService {

    constructor(private http: Http) { }
    captureSaleData: CaptureSaleModel[]

    private viewSalesUrl: string = "../app/mockdata/capture.sale.data.json";

    createCaptureSale(saleData: CaptureSaleModel): Observable<CaptureSaleModel> {

        return this.http.post(this.viewSalesUrl, saleData).map((response: Response) => response.json())
        .catch(this.errorHandler)
                  }
            errorHandler(error:Response){
             console.error(error);
             return Observable.throw(error || "server error");
            }
        
    private handleError(errorResponse: Response) {
        console.log(errorResponse.statusText);
        return Observable.throw(errorResponse.json().error || "Server error");
    }




} 