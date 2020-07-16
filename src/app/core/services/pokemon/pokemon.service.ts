import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, forkJoin, Subject } from 'rxjs';
import { mergeMap, map } from 'rxjs/operators';

import { environment } from '@env/environment';
import { IDictionary } from '@shared/models/dictionary.interface';
import { IPokemonApiResponse } from '@shared/models/pokemon-api-response.interface';
import { PokemonListModel } from '@shared/models/pokemon-list.model';
import { IPokemonDitailsRresponse } from '@shared/models/pokemon-ditails-response.interface';
import { IPokemonApiItemResponse } from '@shared/models/pokemon-api-item-response.interface';

@Injectable()
export class PokemonService {
  private pokemnList!: IDictionary<PokemonListModel>;
  private filters!: IPokemonApiItemResponse[];
  private limit: number = 100;
  private selectedFilter: IPokemonApiItemResponse;
  private filterSubject: Subject<IPokemonApiItemResponse> = new Subject<IPokemonApiItemResponse>();
  public filterWhatcher$: Observable<IPokemonApiItemResponse> = this.filterSubject.asObservable();
  constructor(private http: HttpClient) {}

  /**
   * getPokemonList
   * @description method return list of poquemon by offset param
   * @param offset: number
   * @returns Observable<PokemonListModel>
   */
  public updatePokemonList(offset: number): Observable<PokemonListModel> {
    let result: Observable<PokemonListModel>;
    if (!!this.pokemnList && this.pokemnList[offset]) {
      result = of(this.pokemnList[offset]);
    } else {
      result = this.loadPockemonList(offset).pipe(
        map((result) => {
          this.pokemnList = !!this.pokemnList ? this.pokemnList : {};
          this.pokemnList[+result.key - this.limit] = result;
          return this.pokemnList[+result.key - this.limit];
        })
      );
    }

    return result.pipe(
      map((rl) => {
        if (this.selectedFilter) {
          rl.pokemons = rl.pokemons.filter((item) => item.types.includes(this.selectedFilter.name));
        }

        return rl;
      })
    );
  }

  public getFilter(): Observable<IPokemonApiItemResponse[]> {
    if (!!this.filters) {
      return of(this.filters);
    }
    return this.loadFilter(environment.apis.getFilters).pipe(
      map((pokemonFilters) => {
        this.filters = pokemonFilters.results;
        return this.filters;
      })
    );
  }

  public getSelectedFilter(): IPokemonApiItemResponse {
    return this.selectedFilter;
  }

  public setSelectedFilter(item: IPokemonApiItemResponse): void {
    this.selectedFilter = item;
    this.filterSubject.next(item);
  }

  private loadPockemonList(offset: number): Observable<PokemonListModel> {
    let tempData: IPokemonApiResponse;
    return this.http
      .get<IPokemonApiResponse>(environment.apis.getList, {
        params: {
          offset: `${offset}`,
          limit: `${this.limit}`,
        },
      })
      .pipe(
        mergeMap((response) => {
          tempData = response;
          let observables = response.results.map((item) => this.loadPokemon(item.url));
          return forkJoin(observables);
        }),
        map((respouns: IPokemonDitailsRresponse[]) => new PokemonListModel(tempData, respouns))
      );
  }

  private loadPokemon(url: string): Observable<IPokemonDitailsRresponse> {
    return this.http.get<IPokemonDitailsRresponse>(url);
  }

  private loadFilter(url: string): Observable<IPokemonApiResponse> {
    return this.http.get<IPokemonApiResponse>(url);
  }
}
