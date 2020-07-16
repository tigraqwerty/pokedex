import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule, ModalController } from '@ionic/angular';
import { RouterTestingModule } from '@angular/router/testing';
import { BehaviorSubject, of } from 'rxjs';

import { HomePage } from './home.page';
import { PokemonService } from '@core/services/pokemon/pokemon.service';

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;
  const testSubject: BehaviorSubject<null> = new BehaviorSubject(null);

  const pokemonServiceMock = {
    filterWhatcher$: testSubject.asObservable(),
    updatePokemonList: () => of({ pokemons: [] }),
  };

  const modalMock = {};

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomePage],
      imports: [IonicModule.forRoot(), RouterTestingModule],
      providers: [
        { provide: PokemonService, useValue: pokemonServiceMock },
        { provide: ModalController, useValue: modalMock },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call router navigate on call viewDitails', () => {
    const spy = spyOn((component as any).router, 'navigate');
    component.viewDitails('1');
    expect(spy).toHaveBeenCalled();
  });
});
