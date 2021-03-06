import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class MainServiceService {

  constructor(private _http: HttpClient) { }

  requestBurbank(){
    return this._http.get('https://api.openweathermap.org/data/2.5/weather?q=burbank&appid=34dc26041c2b371e9162b92b8348d971')
  }

  requestSeattle(){
    return this._http.get('https://api.openweathermap.org/data/2.5/weather?q=seattle&appid=34dc26041c2b371e9162b92b8348d971')
  }
//!Not found
  requestSanJose(){
    return this._http.get('https://api.openweathermap.org/data/2.5/weather?q=burbank&appid=34dc26041c2b371e9162b92b8348d971')
  }

  requestWashington(){
    return this._http.get('https://api.openweathermap.org/data/2.5/weather?q=washington&appid=34dc26041c2b371e9162b92b8348d971')
  }

  requestDallas(){
    return this._http.get('https://api.openweathermap.org/data/2.5/weather?q=dallas&appid=34dc26041c2b371e9162b92b8348d971')
  }

  requestChicago(){
    return this._http.get('https://api.openweathermap.org/data/2.5/weather?q=chicago&appid=34dc26041c2b371e9162b92b8348d971')
  }








}
