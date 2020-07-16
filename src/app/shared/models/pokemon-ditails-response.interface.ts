import { IPokemonType } from './pokemon-type.interface';

export interface IPokemonDitailsRresponse {
  id: number;
  base_experience: number;
  height: number;
  weight: number;
  name: string;
  sprites: {
    front_default: string;
    back_default: string;
  };
  species: { name: string; url: string };
  types: IPokemonType[];
}
