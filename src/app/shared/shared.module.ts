import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { CardComponent } from './components/card/card.component';
import { SeeMorePipe } from './pipes/see-more.pipe';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [NavbarComponent, SpinnerComponent, CardComponent, SeeMorePipe],
  imports: [CommonModule, RouterModule],
  exports: [NavbarComponent, SpinnerComponent, CardComponent],
})
export class SharedModule {}
