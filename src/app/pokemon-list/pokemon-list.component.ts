import { Component, OnDestroy, OnInit } from '@angular/core';

import { Subscription } from 'rxjs';

import { Store } from '@ngxs/store';
import { Navigate } from '@ngxs/router-plugin';

import {
  PokemonData,
  PokemonsStateData,
} from '../shared/models/pokemons/pokemons.model';
import { GetPokemons } from '../shared/store/pokemons.actions';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss'],
})
export class PokemonListComponent implements OnInit, OnDestroy {
  public cards: Array<PokemonData>;
  private mySubs: Subscription;
  constructor(private store: Store) {
    this.mySubs = new Subscription();
    this.mySubs.add(this.getCardsSubscription());
    this.store.dispatch(new GetPokemons());
  }

  public ngOnInit(): void {}

  private getCardsSubscription(): Subscription {
    return this.store
      .select((state) => state.pokeDB)
      .subscribe((cards: PokemonsStateData) => {
        if (cards?.pokemons) {
          this.cards = cards.pokemons;
        }
      });
  }

  public ngOnDestroy(): void {
    this.mySubs.unsubscribe();
  }

  public goToDetails(selectedCard: PokemonData): void {
    this.store.dispatch(new Navigate([`detail/${selectedCard.id}`]));
  }
}
