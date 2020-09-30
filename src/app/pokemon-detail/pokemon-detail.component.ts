import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngxs/store';
import { Subscription } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';

import { AttackDialogComponent } from '../shared/components/attack-dialog/attack-dialog.component';
import { PokemonData } from '../shared/models/pokemons/pokemons.model';
import { GetAttackPokemonDetail, GetPokemonDetail } from '../shared/store/pokemons.actions';
import { Attack } from '../shared/models/attack/attack.model';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss'],
})
export class PokemonDetailComponent implements OnInit, OnDestroy {
  public selectedPokemon: PokemonData;

  private mySubs: Subscription;

  constructor(
    private actRoute: ActivatedRoute,
    private store: Store,
    public dialog: MatDialog
  ) {
    this.mySubs = new Subscription();
    this.mySubs.add(this.getCardsSubscription());
  }

  public ngOnInit(): void {
    const detailId = this.actRoute.snapshot.params.id;
    this.store.dispatch(new GetPokemonDetail(detailId));
  }

  public ngOnDestroy(): void {
    this.mySubs.unsubscribe();
  }

  private getCardsSubscription(): Subscription {
    return this.store
      .select((state) => state.pokeDB)
      .subscribe((cards: any) => {
        if (cards?.selectedCard) {
          this.selectedPokemon = cards.selectedCard;
        }
      });
  }

  public openDialog(attack: Attack): void {
    this.store
      .dispatch(new GetAttackPokemonDetail(attack.name))
      .toPromise()
      .then((value) => {
        this.dialog.open(AttackDialogComponent);
      });
  }
}
