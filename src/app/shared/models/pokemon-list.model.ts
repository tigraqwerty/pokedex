import { IPokemonListResponse } from './pokemon-list-response.interface';
import { IPokemonDitailsRresponse } from './pokemon-ditails-response.interface';
import { IPokemonListItemResponse } from './pokemon-list-item-response.interface';
import { PokemonDitailsModel } from './pokemon-ditails.model';

export class PokemonListModel {
  public key: string = null;
  public count: number;
  public next!: string;
  public previous!: string;
  public pokemons: PokemonDitailsModel[] = [];

  constructor(list: IPokemonListResponse, pokemons: IPokemonDitailsRresponse[]) {
    this.setData(list);
    this.setKey(list.next);
    this.setResult(list.results, pokemons);
  }

  private setData(list: IPokemonListResponse): void {
    this.next = list.next;
    this.previous = list.previous;
    this.count = this.count;
  }

  private setKey(link: string): void {
    if (!!link) {
      let url = new URL(link);
      let offset = url.searchParams.get('offset');
      this.key = offset;
    }
  }
  private setResult(list: IPokemonListItemResponse[], pokemons: IPokemonDitailsRresponse[]): void {
    list.forEach((item) => {
      let pokemonDitailsIdx = pokemons.findIndex((pokemon) => pokemon.name === item.name);
      if (pokemonDitailsIdx !== -1) {
        this.pokemons.push(new PokemonDitailsModel(pokemons[pokemonDitailsIdx]));
      }
    });
  }
}
