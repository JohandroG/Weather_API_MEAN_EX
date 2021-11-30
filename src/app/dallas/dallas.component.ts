import { Component, OnInit } from '@angular/core';
import {MainServiceService} from './../main/main-service.service'

@Component({
  selector: 'app-dallas',
  templateUrl: './dallas.component.html',
  styleUrls: ['./dallas.component.css']
})
export class DallasComponent implements OnInit {

  info:any = {}

  constructor(private _HttpService: MainServiceService) { }

  ngOnInit(): void {
    this.getInformation();
  }

  getInformation():void{
    this._HttpService.requestDallas()
    .subscribe((data:any)=>{
      this.info = data;
      console.log(this.info);
    })
  }

}
