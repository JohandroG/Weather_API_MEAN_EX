import { Component, OnInit } from '@angular/core';
import {MainServiceService} from './../main/main-service.service'

@Component({
  selector: 'app-chicago',
  templateUrl: './chicago.component.html',
  styleUrls: ['./chicago.component.css']
})
export class ChicagoComponent implements OnInit {

  info:any = {}

  constructor(private _HttpService: MainServiceService) { }

  ngOnInit(): void {
    this.getInformation();
  }

  getInformation():void{
    this._HttpService.requestChicago()
    .subscribe((data:any)=>{
      this.info = data;
      console.log(this.info);
    })
  }

}
