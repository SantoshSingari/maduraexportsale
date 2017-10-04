import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertService, AuthenticationService } from '../_services/index';
import { User } from '../_models/index';
import { UserService } from '../_services/user.service';
import { Message } from 'primeng/primeng';
import {GlobalEventsManager} from "../GlobalEventsManager";


@Component({
    moduleId: module.id,
    selector: 'login',
    templateUrl: 'login.component.html',
    providers: [UserService, AuthenticationService, AlertService]

})



export class LoginComponent implements OnInit {
    user = new User();
    loading = false;
    returnUrl: string;
    showNavBar:boolean = false; 
    loggedUser: User;
    msgs: Message[] = [];
    constructor(
        private userService: UserService,
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        private alertService: AlertService) {
    }

    ngOnInit() {
        this.authenticationService.logout();
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/StoreSales';
      
        let value =  localStorage.getItem("showNavBar");
       if(value==='true'){
           this.showNavBar = true;
       } else {
           this.showNavBar = false;
       }
        
    }


    login(user: User) {
        this.loading = true;
        this.userService.getAll().subscribe(userObj => {
            if (userObj === null) {
                   this.showErrorMsg('error', "Please Enter Valid Credentials");
                return;
            } else {
                let users = userObj.filter(item => item.user == user.userName && item.password == user.password);
                if (users == undefined || users.length < 1) {
                       this.showErrorMsg('error', "Wrong credentials");
                    return;
                }
                this.loggedUser = users[0];
               
                if(this.loggedUser.type =='SM'){
                     this.router.navigate(['StoreSales']);
                     this.showNavBar = true;
                    alert('Im ' + this.loggedUser.userName);
                    
                } 
                else if(this.loggedUser.type =='FM') {
                       this.showNavBar = true;
                     this.router.navigate(['StoreKpi']);
                    alert('Im ' + this.loggedUser.userName);
                  
                }
                else if(this.loggedUser.type =='SU') {
                       this.showNavBar = true;
                     this.router.navigate(['QuerySummary']);
                    alert('Im ' + this.loggedUser.userName);
                }
               
                localStorage.setItem('currentUser', JSON.stringify(this.loggedUser));
                let currentUser = localStorage.getItem('currentUser');
                let basic: string = "Basic " + btoa(user.userName + ":" + user.password);
                localStorage.setItem('baiscAuth', basic);
                localStorage.setItem('showNavBar', 'true');
                window.location.reload();
              
            }
        }, error => {
            this.showErrorMsg('error', "Please enter valid credentials");
        });
    }
    
  

    showErrorMsg(severity: string, message: string) {
        this.msgs = [];
        this.msgs.push({ severity: severity, summary: message });
        setTimeout(() => {
            this.msgs = [];
        }, 2000);
    }

}