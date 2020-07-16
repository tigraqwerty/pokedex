import { IPokemonDitailsRresponse } from './pokemon-ditails-response.interface';

export class PokemonDitailsModel {
  public id: number;
  public name: string;
  public baseExperience: number;
  public avatar: string;
  public secondaryImage: string;
  public height: number;
  public weight: number;
  public types: string[];
  public species: string;

  constructor(pokemon: IPokemonDitailsRresponse) {
    this.id = pokemon.id;
    this.height = pokemon.height;
    this.weight = pokemon.weight;
    this.name = pokemon.name;
    this.baseExperience = pokemon.base_experience;
    this.types = pokemon.types.map((item) => item.type.name);
    this.avatar = pokemon.sprites.front_default;
    this.secondaryImage = pokemon.sprites.back_default;
    this.species = pokemon.species.name;
  }
}
