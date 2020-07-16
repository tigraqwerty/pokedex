import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalFilterComponent } from './modal-filter.component';
import { PokemonService } from '@core/services/pokemon/pokemon.service';
import { of } from 'rxjs';

describe('ModalFilterComponent', () => {
  let component: ModalFilterComponent;
  let fixture: ComponentFixture<ModalFilterComponent>;

  const pokemonServiceMock = {
    getFilter: () => of(null),
    getSelectedFilter: () => null,
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ModalFilterComponent],
      imports: [IonicModule.forRoot()],
      providers: [{ provide: PokemonService, useValue: pokemonServiceMock }],
    }).compileComponents();

    fixture = TestBed.createComponent(ModalFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
