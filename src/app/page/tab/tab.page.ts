import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.page.html',
  styleUrls: ['./tab.page.scss'],
})
export class TabPage implements OnInit {
  distancia:number=100;
  tiempo:number;
  constructor() { }
  calcular(velocidad:number){
    this.tiempo=(this.distancia/velocidad)*60;
}

  ngOnInit() {
  }

}
