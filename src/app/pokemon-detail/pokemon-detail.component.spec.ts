import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule } from '@angular/material/dialog';
import { RouterTestingModule } from '@angular/router/testing';
import { NgxsModule } from '@ngxs/store';
import { AttackDialogComponent } from '../shared/components/attack-dialog/attack-dialog.component';
import { PokemonsState } from '../shared/store/pokemons.state';

import { PokemonDetailComponent } from './pokemon-detail.component';

describe('PokemonDetailComponent', () => {
  let component: PokemonDetailComponent;
  let fixture: ComponentFixture<PokemonDetailComponent>;

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
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
