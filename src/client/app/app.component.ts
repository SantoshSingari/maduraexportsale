import {
    Component,
    OnInit
} from '@angular/core';
import {
    Router,
    ActivatedRoute
} from '@angular/router';
import {
    GlobalEventsManager
} from "./GlobalEventsManager";

@Component({
    moduleId: module.id,
    selector: 'app',
    templateUrl: 'app.component.html'
})

export class AppComponent implements OnInit {
    showNavBar: boolean = false;
    private router: Router;
    private isSignedIn: boolean = false;

    constructor(private _router: Router) {
    }
    ngOnInit() {

        let value = localStorage.getItem("showNavBar");
        if (value === 'true') {
            this.showNavBar = true;
        } else {
            this.showNavBar = false;

        }
    }

}