import { TabPage } from './../tab/tab.page';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-airplane',
  templateUrl: './airplane.page.html',
  styleUrls: ['./airplane.page.scss'],
})
export class AirplanePage implements OnInit {
  velocidad:number=300;
  miDistancia:number;
  miTiempo:number;
  constructor(public tabPage:TabPage) { 
    
  }
  calcular(velocidad:number){
    this.miTiempo=(this.miDistancia/velocidad)*60;
}
  ngOnInit() {
    this.miDistancia=this.tabPage.distancia;
  }

}
