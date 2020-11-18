import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AirplanePage } from './airplane.page';

describe('AirplanePage', () => {
  let component: AirplanePage;
  let fixture: ComponentFixture<AirplanePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AirplanePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AirplanePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
