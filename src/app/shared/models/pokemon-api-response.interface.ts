import { IPokemonApiItemResponse } from './pokemon-api-item-response.interface';

export interface IPokemonApiResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: IPokemonApiItemResponse[];
}
