import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';
import { Powerstats, Result, Appearance } from '../../interfaces/interfaces';
import { HerosService } from '../../services/heros.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  heros: Result[] = [];

  herosChartData = <Powerstats>{};

  appereance = <Appearance>{};

  strongestStat = '';

  constructor(
    private authService: AuthService,
    private herosService: HerosService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.heros = this.herosService.getHeros();

    let herosData = this.herosService.getHerosData();

    this.herosChartData = herosData;

    let max = Object.keys(herosData).reduce(function (a, b) {
      //@ts-ignore
      return herosData[a] > herosData[b] ? a : b;
    });

    this.strongestStat = max;

    this.appereance = this.herosService.getHeroAppereance();
  }
}
