import { Component, OnInit } from '@angular/core';
import {MainServiceService} from './../main/main-service.service'

@Component({
  selector: 'app-sanjose',
  templateUrl: './sanjose.component.html',
  styleUrls: ['./sanjose.component.css']
})
export class SanjoseComponent implements OnInit {

  info:any = {}

  constructor(private _HttpService: MainServiceService) { }

  ngOnInit(): void {
    this.getInformation();
  }

  getInformation():void{
    this._HttpService.requestSanJose()
    .subscribe((data:any)=>{
      this.info = data;
      console.log(this.info);
    })
  }

}
