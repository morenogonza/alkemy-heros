import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HerosRoutingModule } from './heros-routing.module';
import { PrimengModule } from '../primeng/primeng.module';
import { HeroCardComponent } from './components/hero-card/hero-card.component';
import { ChartRadarComponent } from './components/chart-radar/chart-radar.component';
import { SharedModule } from '../shared/shared.module';
import { SearchComponent } from './pages/search/search.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { MainComponent } from './pages/main/main.component';
import { HeroDetailComponent } from './pages/hero-detail/hero-detail.component';

@NgModule({
  declarations: [
    HomeComponent,
    HeroCardComponent,
    ChartRadarComponent,
    SearchComponent,
    MainComponent,
    HeroDetailComponent,
  ],
  imports: [
    CommonModule,
    HerosRoutingModule,
    PrimengModule,
    SharedModule,
    FormsModule,
  ],
})
export class HerosModule {}
