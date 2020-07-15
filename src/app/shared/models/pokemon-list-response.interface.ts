import { IPokemonListItemResponse } from './pokemon-list-item-response.interface';

export interface IPokemonListResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: IPokemonListItemResponse[];
}
