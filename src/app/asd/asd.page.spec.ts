import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AsdPage } from './asd.page';

describe('AsdPage', () => {
  let component: AsdPage;
  let fixture: ComponentFixture<AsdPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsdPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AsdPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
