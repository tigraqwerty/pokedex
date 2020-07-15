import { IPokemonDitailsRresponse } from './pokemon-ditails-response.interface';

export class PokemonDitailsModel {
  public id: string;
  public name: string;
  public baseExperience: number;
  public avatar: string;
  public height: number;
  public types: string[];

  constructor(pokemon: IPokemonDitailsRresponse) {
    this.id = pokemon.id;
    this.height = pokemon.height;
    this.name = pokemon.name;
    this.baseExperience = pokemon.base_experience;
    this.types = pokemon.types.map((item) => item.type.name);
    this.avatar = pokemon.sprites.front_default;
  }
}
