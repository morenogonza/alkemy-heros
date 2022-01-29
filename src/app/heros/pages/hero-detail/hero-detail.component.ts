import { Component, Input, OnInit } from '@angular/core';
import { Result, Hero } from '../../interfaces/interfaces';
import { HerosService } from '../../services/heros.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css'],
})
export class HeroDetailComponent implements OnInit {
  hero = <Result>{};

  constructor(private herosService: HerosService) {}

  ngOnInit(): void {
    this.hero = this.herosService.getHeroDetail();
  }
}
