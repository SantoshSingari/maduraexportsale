import { Component, OnInit,Input,Output,ElementRef,EventEmitter, NgZone, Host, Directive } from '@angular/core';
import { ViewChild, AfterViewInit } from '@angular/core';
import { PictureModel}  from '../../_models/index';
declare var jQuery: any;

@Component({
    moduleId: module.id,
    templateUrl: 'capture.pictures.component.html',
 
})
export class PictureStoreComponent implements OnInit,AfterViewInit  {
    @ViewChild('filecap') files: ElementRef;
    @Output() modified: EventEmitter<any> = new EventEmitter<any>();
   usrCtry: string;
   usrStore:string;
   pictureCaptureData = new PictureModel;
   country = '';
   store = '';
   image:any;
   storeArea:any;
   uploadedFiles: File[] = [];
 constructor(private el: ElementRef) {
  }
    ngOnInit() {
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
         this.usrCtry = currentUser.userCountry;
         this.usrStore = currentUser.storeCodes;
    }


  ngAfterViewInit() {
    jQuery(this.files.nativeElement).fileinput({
        uploadUrl: '#', // you must set a valid URL here else you will get an error
        //uploadExtraData: this.fileUpload,
        allowedFileExtensions: ['jpg', 'png', 'gif'],
        overwriteInitial: false,
        showUpload: false,
        maxFileSize: 1000,
        maxFilesNum: 10,
        fileActionSettings : {showUpload: false},
        slugCallback: function (filename:string) {
            return filename.replace('(', '_').replace(']', '_');
        }
    });
  }

onCtryStoreChange(event:any){
    this.country = event[0];
    this.store = event[1];
    this.storeArea = event[2];
  }

   fileChangeEvent(fileInput: any){
        this.uploadedFiles.push(fileInput.target.files[0]);     
         console.log( this.uploadedFiles,"Files");   
     }
    
 saveCapturePictureData(pictureCaptureData:PictureModel, fileInput: any){
      pictureCaptureData.country = this.country;
      pictureCaptureData.store = this.store;
      pictureCaptureData.image = this.uploadedFiles;
     window.location.reload();
     console.log(pictureCaptureData,"save picture capture sale data");

 }

 
}