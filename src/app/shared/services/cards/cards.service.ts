import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Cards } from '../../models/cards/cards';
import { Card } from '../../models/card/card';

@Injectable({
  providedIn: 'root',
})
export class CardsService {
  constructor(private client: HttpClient) {}

  public getList(): Observable<Array<Card>> {
    return this.client
      .get(environment.apiUrl + environment.apiCardsEndpoint)
      .pipe(map((response: Cards) => response?.cards));
  }
}
