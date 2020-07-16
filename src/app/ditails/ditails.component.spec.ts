import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { RouterTestingModule } from '@angular/router/testing';

import { DitailsComponent } from './ditails.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { PokemonService } from '@core/services/pokemon/pokemon.service';
import { of } from 'rxjs';

describe('DitailsComponent', () => {
  let component: DitailsComponent;
  let fixture: ComponentFixture<DitailsComponent>;

  const pokemonServiceMock = {
    getPokemonById: () => of(null),
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DitailsComponent],
      imports: [IonicModule.forRoot(), TranslateModule.forRoot(), RouterTestingModule],
      providers: [TranslateService, { provide: PokemonService, useValue: pokemonServiceMock }],
    }).compileComponents();

    fixture = TestBed.createComponent(DitailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
