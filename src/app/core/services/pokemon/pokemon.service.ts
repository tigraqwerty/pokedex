import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, zip, forkJoin } from 'rxjs';
import { mergeMap, map } from 'rxjs/operators';

import { environment } from '@env/environment';
import { IDictionary } from '@shared/models/dictionary.interface';
import { IPokemonListResponse } from '@shared/models/pokemon-list-response.interface';
import { PokemonListModel } from '@shared/models/pokemon-list.model';
import { IPokemonDitailsRresponse } from '@shared/models/pokemon-ditails-response.interface';

@Injectable()
export class PokemonService {
  private pokemnList!: IDictionary<PokemonListModel>;
  private limit: number = 20;
  constructor(private http: HttpClient) {}

  /**
   * getPokemonList
   * @description method return list of poquemon by offset param
   * @param offset: number
   * @returns Observable<PokemonListModel>
   */
  public updatePokemonList(offset: number): Observable<PokemonListModel> {
    if (!!this.pokemnList && this.pokemnList[`${offset - this.limit}`]) {
      return of(this.pokemnList[`${offset - this.limit}`]);
    }

    return this.loadPockemonList(offset).pipe(
      map((result) => {
        this.pokemnList = !!this.pokemnList ? this.pokemnList : {};
        this.pokemnList[+result.key - this.limit] = result;
        return this.pokemnList[+result.key - this.limit];
      })
    );
  }

  private loadPockemonList(offset: number): Observable<PokemonListModel> {
    let tempData: IPokemonListResponse;
    return this.http
      .get<IPokemonListResponse>(environment.apis.getList, {
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
}
