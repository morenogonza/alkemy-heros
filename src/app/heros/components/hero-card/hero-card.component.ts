import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { Result } from '../../interfaces/interfaces';
import { HerosService } from '../../services/heros.service';

@Component({
  selector: 'app-hero-card',
  templateUrl: './hero-card.component.html',
  styleUrls: ['./hero-card.component.css'],
  animations: [
    trigger('flipState', [
      state(
        'active',
        style({
          transform: 'rotateY(180deg)',
        })
      ),
      state(
        'inactive',
        style({
          transform: 'rotateY(0)',
        })
      ),
      transition('active => inactive', animate('300ms ease-out')),
      transition('inactive => active', animate('300ms ease-in')),
    ]),
  ],
})
export class HeroCardComponent implements OnInit {
  @Input() hero!: Result;

  @Input() add: boolean = false;
  @Input() remove: boolean = false;

  constructor(private herosService: HerosService) {}

  data: any;

  ngOnInit() {}

  flip: string = 'inactive';

  toggleFlip() {
    this.flip = this.flip == 'inactive' ? 'active' : 'inactive';
  }

  addHero(hero: Result) {
    this.herosService.addHero(hero);
  }

  getHeros() {
    console.log(this.herosService.getHeros());
  }

  detallesHeroe(id: any) {
    console.log('ID DE HEROE:', id);
    console.log('HEROE:', this.hero);
  }
}
