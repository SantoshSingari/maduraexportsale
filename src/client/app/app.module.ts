import { NgModule,forwardRef, Injectable,}   from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { fakeBackendProvider } from './_helpers/index';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';
import {DataTableModule,InputTextModule,InputTextareaModule,ButtonModule,TabMenuModule,CheckboxModule,TabViewModule,PasswordModule, SharedModule, SelectItem, MultiSelectModule,DialogModule,DropdownModule, AutoCompleteModule, SliderModule} from 'primeng/primeng';
import { AppComponent }  from './app.component';
import { routing }        from './app.routing';
import {AccordionModule, CalendarModule} from 'primeng/primeng';     //accordion and accordion tab
import {MenuItem} from 'primeng/primeng';    
import { AlertComponent } from './_directives/index';
import { AuthGuard } from './_guards/index';
import { AlertService, AuthenticationService,SalesService,UserService,CommonService,QueryIssueService,CaptureService} from './_services/index';
import { HomeComponent } from './home/index';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/index';
import {  UserComponent  } from './user/user.component';
import { SalesComponent } from './sales/store/capture.sales.component';  
import {ImagecaptureComponent}  from './sales/store/image.component';
import {KpiStoreComponent} from'./sales/store/capture.kpi.data.component';
import {PictureStoreComponent} from './sales/store/capture.pictures.component';
import { SalesViewComponent } from './sales/view/summary.sales.component';
import {KpiViewComponent} from'./sales/view/kpi.data.component';
import {PictureViewComponent} from './sales/view/pictures.component';
import {QueryAddComponent} from './queries_issues/add.component';
import {QuerySummaryComponent} from './queries_issues/query.summary.component';
import {CountryStoreComponent} from './common/country.store.component'
import { AppConfig } from './appconfig/index';
import {GlobalEventsManager} from './GlobalEventsManager';
import {GrowlModule} from 'primeng/primeng';
import * as jQuery from 'jquery';
import * as $ from 'jquery';


@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        HttpModule,
        TabMenuModule,
        routing,
        ChartsModule,
        AccordionModule,
        DataTableModule,
        DialogModule,
        CheckboxModule,
        InputTextareaModule,
        InputTextModule,
        TabViewModule,
        CalendarModule,
        SliderModule,
        ButtonModule,
        AutoCompleteModule,
        MultiSelectModule,
        DropdownModule,
        //MaterialModule.forRoot(),
        GrowlModule
    ],
    declarations: [
        NavbarComponent,
        AppComponent,
        AlertComponent,
        HomeComponent,
        LoginComponent,
        SalesComponent,
        UserComponent,
        KpiStoreComponent,
        ImagecaptureComponent,
        PictureStoreComponent,
        SalesViewComponent,
        KpiViewComponent,
        PictureViewComponent,
        QueryAddComponent,
        CountryStoreComponent,
        QuerySummaryComponent
        // MessageAlert,
    ],
    providers: [ SalesService,CaptureService,GlobalEventsManager,CommonService,UserService,QueryIssueService],
    bootstrap: [AppComponent]
})

export class AppModule { }