import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WalkPage } from './walk.page';

describe('WalkPage', () => {
  let component: WalkPage;
  let fixture: ComponentFixture<WalkPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WalkPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WalkPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
