import { TabPage } from './../tab/tab.page';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.page.html',
  styleUrls: ['./car.page.scss'],
})
export class CarPage implements OnInit {
  velocidad:number=30;
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
