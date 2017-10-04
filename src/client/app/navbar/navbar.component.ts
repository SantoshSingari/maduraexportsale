import {Component, OnInit} from "@angular/core";
import { Router, ActivatedRoute } from '@angular/router';
import {GlobalEventsManager} from "../GlobalEventsManager";
/**
 * This class represents the navigation bar component.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-navbar',
  templateUrl: 'navbar.component.html',

})
export class NavbarComponent implements OnInit  {

 showNavBar: boolean = false;
    private router: Router;

    constructor( private _router: Router) { 
        this.router = _router;
        
    }
  ngOnInit(){
      
    let value =  localStorage.getItem("showNavBar");
       if(value==='true'){
           this.showNavBar = true;
       } else {
           this.showNavBar = false;
       }
  }

   
   signout(){
              localStorage.setItem('currentUser', null);
                localStorage.setItem('baiscAuth', null);
                localStorage.setItem('showNavBar', 'false');
                 localStorage.removeItem("user");
                let login = "/login";     
                this.router.navigate([login]);
                window.location.reload();
                
    }
}
