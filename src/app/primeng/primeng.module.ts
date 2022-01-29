import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// prime ng
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ChartModule } from 'primeng/chart';
import { DividerModule } from 'primeng/divider';
import { InputTextModule } from 'primeng/inputtext';
import { MenubarModule } from 'primeng/menubar';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [
    ButtonModule,
    ChartModule,
    CardModule,
    DividerModule,
    InputTextModule,
    MenubarModule,
    ProgressSpinnerModule,
  ],
})
export class PrimengModule {}
