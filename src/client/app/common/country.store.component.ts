import { Component, OnInit ,Input,Output,EventEmitter} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { DataTableModule, SharedModule } from 'primeng/primeng';
import { CalendarModule } from 'primeng/primeng';
import { Country, User, StateStore } from '../_models/index';
import { CommonService } from '../_services/index';
@Component({
      moduleId: module.id,
      selector: 'country-store',
      templateUrl:'country.store.component.html',
      providers:[CommonService],
    
})

export class CountryStoreComponent {
  @Input() display: string ='Capture';
  @Input() usrCtry: string = '';
  @Input() usrStore: string = '';
  @Output() modified: EventEmitter<any> = new EventEmitter<any>();
  
  countries: any = [];
  stores: any = [];
  country:string;
  store:string;
  storeArea:any;
  disableStore: boolean;
  disableCtry: boolean;

  storesData =
  [
    {"id":11,"countryCode":"AE","storeCode":"s123", "storeName":"UAE Store 1", "storeArea":163},
    {"id":12,"countryCode":"AE","storeCode":"s124", "storeName":"UAE Store 2", "storeArea":173},
    {"id":13,"countryCode":"AE","storeCode":"s125", "storeName":"UAE Store 3", "storeArea":183},
    {"id":14,"countryCode":"NP","storeCode":"s234", "storeName":"Nepal Store 1", "storeArea":263},
    {"id":15,"countryCode":"NP","storeCode":"s235", "storeName":"Nepal Store 2", "storeArea":273},
    {"id":16,"countryCode":"QA","storeCode":"s334", "storeName":"Qatar Store 1", "storeArea":473},
    {"id":20,"countryCode":"BD","storeCode":"s435", "storeName":"Bangladesh Store 1", "storeArea":573}
  ];

  ctryData =
  [
    {"id":111,"countryCode":"AE","countryName":"United Arab Emirates"},
    {"id":115,"countryCode":"NP","countryName":"Nepal"},
    {"id":116,"countryCode":"QA","countryName":"Qatar"},
    {"id":120,"countryCode":"BD","countryName":"Bangladesh"}
  ];

  constructor() { }

  ngOnInit() {
    this.disableStore = true;
    this.disableCtry = true;
    this.country='';
    this.store='';
    this.getCountryList(this.usrCtry);
    this.getStoreList(this.country, this.usrStore);
    this.getStoreArea();
  }
  getCountryList(filter: string = ''){
    this.countries = this.ctryData;
    if ( filter != '' ){
      this.countries = this.ctryData.filter(item => item.countryCode == filter);
    }
    if (this.countries.length > 0) {this.country = this.countries[0].countryCode;}
    if (this.countries.length > 1) {this.disableCtry = false;}
  }
  getStoreList(forCtry:string='', filter:string=''){
    this.stores = this.storesData;
    if ( forCtry != '' ){
      this.stores = this.storesData.filter(item => item.countryCode == forCtry);
    }
    if ( filter != '' ){
      this.stores = this.storesData.filter(item => item.storeCode == filter);
    }
    if (this.stores.length > 0) {this.store = this.stores[0].storeCode;}
    if (this.stores.length > 1) { this.disableStore = false;}

  }
  ctryChange(ctry:string){
    this.getStoreList(this.country);
    this.getStoreArea();
  }
  getStoreArea(){
    let store = this.storesData.filter(item => item.storeCode == this.store);
    this.storeArea = store[0].storeArea;
       this.modified.emit([this.country, this.store, this.storeArea]);
   
  }
  
}
