import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule } from '@angular/material/dialog';
import { RouterTestingModule } from '@angular/router/testing';
import { NgxsModule, Store } from '@ngxs/store';
import { AttackDialogComponent } from '../shared/components/attack-dialog/attack-dialog.component';
import { PokemonsState } from '../shared/store/pokemons.state';

import { PokemonDetailComponent } from './pokemon-detail.component';

const attackMocked = {
  cost: ['Colorless'],
  name: 'Headbutt',
  text: '',
  damage: '10',
  convertedEnergyCost: 1,
};

describe('PokemonDetailComponent', () => {
  let component: PokemonDetailComponent;
  let fixture: ComponentFixture<PokemonDetailComponent>;
  let store: Store;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PokemonDetailComponent, AttackDialogComponent],
      imports: [
        MatDialogModule,
        NgxsModule.forRoot([PokemonsState]),
        HttpClientTestingModule,
        RouterTestingModule,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonDetailComponent);
    store = TestBed.inject(Store);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call openDialog and dispatch ', () => {
    const storeSpy = spyOn(store, 'dispatch');
    component.openDialog(attackMocked);
    expect(storeSpy).toHaveBeenCalled();
  });
});
