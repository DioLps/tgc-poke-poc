import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { NgxsModule } from '@ngxs/store';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { NgxsRouterPluginModule } from '@ngxs/router-plugin';

import { PokemonsService } from './services/pokemons/pokemons.service';
import { CardComponent } from './components/card/card.component';

import { environment } from 'src/environments/environment';
import { PokemonsState } from './store/pokemons.state';
import { MatDialogModule } from '@angular/material/dialog';
import { AttackDialogComponent } from './components/attack-dialog/attack-dialog.component';
import { ImgFallbackDirective } from './directives/img-fallback.directive';

const MODULES = [
  CommonModule,
  HttpClientModule,
  NgxsModule.forRoot([PokemonsState], {
    developmentMode: !environment.production,
  }),
  NgxsRouterPluginModule.forRoot(),
  NgxsLoggerPluginModule.forRoot(),
  MatDialogModule,
];
const COMPONENTS = [CardComponent, AttackDialogComponent];
const PIPES = [ImgFallbackDirective];

@NgModule({
  declarations: [...COMPONENTS, ...PIPES],
  imports: MODULES,
  exports: [...COMPONENTS, ...PIPES],
  providers: [PokemonsService],
})
export class SharedModule {}
