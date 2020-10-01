import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { State, Action, StateContext, Selector } from '@ngxs/store';

import { take } from 'rxjs/operators';
import { AttackDialogComponent } from '../components/attack-dialog/attack-dialog.component';
import {
  PokemonData,
  PokemonsStateData,
} from '../models/pokemons/pokemons.model';

import { PokemonsService } from '../services/pokemons/pokemons.service';
import {
  GetAttackPokemonDetail,
  GetPokemonDetail,
  GetPokemons,
} from './pokemons.actions';

@State<PokemonsStateData>({
  name: 'pokeDB',
  defaults: {
    pokemons: [],
    selectedCard: null,
    attackDetail: null,
  },
})
@Injectable()
export class PokemonsState {
  constructor(private pokeServ: PokemonsService, public dialog: MatDialog) {}

  @Selector()
  public static pokemons(state: PokemonsStateData): PokemonData[] {
    return state.pokemons;
  }

  @Selector()
  public static selectedCard(state: PokemonsStateData): PokemonData {
    return state.selectedCard;
  }

  @Action(GetPokemons)
  getPokemonsAction({ patchState }: StateContext<PokemonsStateData>): void {
    this.pokeServ
      .getList()
      .pipe(take(1))
      .subscribe((pokemons: PokemonsStateData) => {
        patchState(pokemons);
      });
  }

  @Action(GetPokemonDetail)
  getDetailAction(
    { getState, patchState }: StateContext<PokemonsStateData>,
    payload: { id: string }
  ): void {
    this.pokeServ
      .getCardDetail(payload.id)
      .pipe(take(1))
      .subscribe((selectedCard) => {
        const state = JSON.parse(JSON.stringify(getState()));
        state.selectedCard = selectedCard;
        patchState(state);
      });
  }

  @Action(GetAttackPokemonDetail)
  getAttackDetailAction(
    { getState, patchState }: StateContext<PokemonsStateData>,
    payload: { attackName: string }
  ): void {
    const state = JSON.parse(JSON.stringify(getState()));
    state.attackDetail = state.selectedCard.attacks.find(
      (attack) => attack.name === payload.attackName
    );
    patchState(state);
    this.dialog.open(AttackDialogComponent);
  }
}
