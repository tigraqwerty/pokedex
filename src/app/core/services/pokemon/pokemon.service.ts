import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { environment } from '@env/environment';

@Injectable()
export class PokemonService {
  private pokemnList!: any[];
  constructor(private http: HttpClient) {}

  /**
   * getPokemonList
   */
  public getPokemonList(): Observable<any> {
    if (this.pokemnList) {
      return of(this.pokemnList);
    }

    return this.loadPockemonList();
  }

  private loadPockemonList(): Observable<any> {
    return this.http.get<any>(environment.apis.getList, { params: environment.defaultApisParam.getList });
  }
}
