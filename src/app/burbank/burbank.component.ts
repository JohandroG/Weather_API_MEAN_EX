import { Component, OnInit } from '@angular/core';
import {MainServiceService} from './../main/main-service.service'

@Component({
  selector: 'app-burbank',
  templateUrl: './burbank.component.html',
  styleUrls: ['./burbank.component.css']
})
export class BurbankComponent implements OnInit {

  info:any = {}

  constructor(private _HttpService: MainServiceService) { }

  ngOnInit(): void {
    this.getInformation();
  }

  getInformation():void{
    this._HttpService.requestBurbank()
    .subscribe((data:any)=>{
      this.info = data;
      console.log(this.info);
    })
  }

}
