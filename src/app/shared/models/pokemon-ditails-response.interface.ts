import { IPokemonType } from './pokemon-type.interface';

export interface IPokemonDitailsRresponse {
  id: string;
  base_experience: number;
  height: number;
  name: string;
  sprites: {
    front_default: string;
  };
  types: IPokemonType[];
}
