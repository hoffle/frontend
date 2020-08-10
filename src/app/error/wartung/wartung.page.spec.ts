import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WartungPage } from './wartung.page';

describe('WartungPage', () => {
  let component: WartungPage;
  let fixture: ComponentFixture<WartungPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WartungPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WartungPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
