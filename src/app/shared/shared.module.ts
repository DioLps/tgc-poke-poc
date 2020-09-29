import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CardsService } from './services/cards/cards.service';
import { CardComponent } from './components/card/card.component';

const COMPONENTS = [CardComponent];

@NgModule({
  declarations: COMPONENTS,
  imports: [CommonModule, HttpClientModule],
  exports: COMPONENTS,
  providers: [CardsService],
})
export class SharedModule {}
