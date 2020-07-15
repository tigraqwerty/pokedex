import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DitailsComponent } from './ditails.component';

describe('DitailsComponent', () => {
  let component: DitailsComponent;
  let fixture: ComponentFixture<DitailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DitailsComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DitailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
