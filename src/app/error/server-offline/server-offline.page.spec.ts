import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ServerOfflinePage } from './server-offline.page';

describe('ServerOfflinePage', () => {
  let component: ServerOfflinePage;
  let fixture: ComponentFixture<ServerOfflinePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServerOfflinePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ServerOfflinePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
