import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

import { PokemonService } from '@core/services/pokemon/pokemon.service';
import { PokemonListModel } from '@shared/models/pokemon-list.model';
import { PokemonDitailsModel } from '@shared/models/pokemon-ditails.model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  public pokemonsList: PokemonDitailsModel[] = [];
  private currentData!: PokemonListModel;

  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.loadData();
  }

  public loadData(event: any = null) {
    this.pokemonService.updatePokemonList(!event ? 0 : +this.currentData.key).subscribe((result) => {
      this.currentData = result;
      this.pokemonsList = [...this.pokemonsList, ...result.pokemons];
      if (event) {
        event.target.complete();
      }
      this.infiniteScroll.disabled = false;
    });
  }
}
