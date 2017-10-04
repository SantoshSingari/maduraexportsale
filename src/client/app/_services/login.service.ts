import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { HttpModule }    from '@angular/http'; 
import { User } from '../_models/index';
import { AppConfig } from '../appconfig/index';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map'; 
import 'rxjs/add/operator/do'; 



@Injectable() 
export class UserService { 
    
constructor(private http: Http){} 
   getUsers(): Observable<User[]> { 
        return this.http.get(AppConfig.BASE_URL + "user/list/").map((response: Response) => <User[]>response.json())
            .do(data => console.log(JSON.stringify(data)));
   } 

 
 save(): Observable<User[]>{
     return this.http.get(AppConfig.BASE_URL + "user/").map((response: Response) => <User[]>response.json())
            .do(data => console.log(JSON.stringify(data)));

       }
 
} 