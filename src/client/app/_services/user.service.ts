import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { HttpModule } from '@angular/http';
import { User } from '../_models/index';
import { AppConfig } from '../appconfig/index';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Injectable()
export class UserService {
    constructor(private http: Http) { }


    getAll(): Observable<User[]> {
        return this.http.get(AppConfig.BASE_URL + '/user/details/', this.getHeader()).map((response: Response) => <User[]>response.json())
            .do(data => console.log(JSON.stringify(data)));
    }

     getUser(user: User): Observable<User> {
        let headers = new Headers();
        let basic = "Basic " + btoa(user.userName + ":" + user.password);
        headers.append("Authorization", basic)
        return this.http.get(AppConfig.BASE_URL + '/web/user', {
            headers: headers
        }).map(res => <User>res.json());
    }


    getHeader(): RequestOptions {
        let basic: string = "Basic " + btoa("user1" + ":" + "123");
        localStorage.setItem('baiscAuth', basic);
       let headers = new Headers({ 'Authorization': basic });
            return new RequestOptions({ headers: headers });
          }

 
 
 



} 