import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule } from '@angular/material/dialog';
import { RouterTestingModule } from '@angular/router/testing';
import { NgxsModule } from '@ngxs/store';
import { PokemonsState } from '../../store/pokemons.state';

import { AttackDialogComponent } from './attack-dialog.component';

describe('AttackDialogComponent', () => {
  let component: AttackDialogComponent;
  let fixture: ComponentFixture<AttackDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AttackDialogComponent],
      imports: [
        MatDialogModule,
        NgxsModule.forRoot([PokemonsState]),
        HttpClientTestingModule,
        RouterTestingModule,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AttackDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
