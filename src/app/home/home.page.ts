import { Component, OnInit } from '@angular/core';

import { PokemonService } from '@core/services/pokemon/pokemon.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.pokemonService.updatePokemonList(0).subscribe((result) => {
      console.log(result);
    });
  }
}
