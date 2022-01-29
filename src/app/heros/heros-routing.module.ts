import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './pages/search/search.component';
import { MainComponent } from './pages/main/main.component';
import { HomeComponent } from './components/home/home.component';
import { HeroDetailComponent } from './pages/hero-detail/hero-detail.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'search',
        component: SearchComponent,
      },
      {
        path: 'detail',
        component: HeroDetailComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HerosRoutingModule {}
