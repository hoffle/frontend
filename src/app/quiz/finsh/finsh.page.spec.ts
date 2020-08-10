import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FinshPage } from './finsh.page';

describe('FinshPage', () => {
  let component: FinshPage;
  let fixture: ComponentFixture<FinshPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinshPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FinshPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
