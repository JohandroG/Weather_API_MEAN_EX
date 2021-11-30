import { Component, OnInit } from '@angular/core';
import {MainServiceService} from './../main/main-service.service'

@Component({
  selector: 'app-washington',
  templateUrl: './washington.component.html',
  styleUrls: ['./washington.component.css']
})
export class WashingtonComponent implements OnInit {
  
  info:any = {}

  constructor(private _HttpService: MainServiceService) { }

  ngOnInit(): void {
    this.getInformation();
  }

  getInformation():void{
    this._HttpService.requestWashington()
    .subscribe((data:any)=>{
      this.info = data;
      console.log(this.info);
    })
  }

}
