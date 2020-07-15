import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { PokemonService } from './services/pokemon/pokemon.service';

@NgModule({
  declarations: [],
  imports: [CommonModule, HttpClientModule],
  providers: [PokemonService],
})
export class CoreModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [PokemonService],
    };
  }
}
