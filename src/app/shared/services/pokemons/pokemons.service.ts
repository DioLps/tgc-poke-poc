import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { PokemonsStateData } from '../../models/pokemons/pokemons.model';
import { Cards } from '../../models/cards/cards.model';

@Injectable({ providedIn: 'root' })
export class PokemonsService {
  constructor(private client: HttpClient) {}

  public getList(): Observable<PokemonsStateData> {
    return this.client
      .get(environment.apiUrl + environment.apiCardsEndpoint)
      .pipe(
        map((response: Cards) => {
          return { pokemons: response?.cards };
        })
      );
  }

  public getCardDetail(id: string): Observable<any> {
    return this.client
      .get(environment.apiUrl + environment.apiCardsEndpoint + '/' + id)
      .pipe(
        map((response: any) => {
          return response?.card;
        })
      );
  }
}
