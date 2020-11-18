import { TabPage } from './../tab/tab.page';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-walk',
  templateUrl: './walk.page.html',
  styleUrls: ['./walk.page.scss'],
})
export class WalkPage implements OnInit {
  velocidad:number=5;
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
