import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Result, Hero, Powerstats, Appearance } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root',
})
export class HerosService {
  token = environment.token;
  url = 'api';

  private _heros: Result[] = [];

  private _herosData: Powerstats[] = [];

  private _herosAppereance: Appearance[] = [];

  private _appereance = <Appearance>{};

  private _heroDetail = <Result>{};

  constructor(private http: HttpClient) {}

  getHeros() {
    return this._heros;
  }

  getHerosData() {
    let newData = <Powerstats>{};

    let combat = 0;
    let durability = 0;
    let intelligence = 0;
    let power = 0;
    let speed = 0;
    let strength = 0;

    this._herosData.forEach((value) => {
      if (value) {
        combat += parseInt(value.combat);
        durability += parseInt(value.durability);
        intelligence += parseInt(value.intelligence);
        power += parseInt(value.power);
        speed += parseInt(value.speed);
        strength += parseInt(value.strength);
      }
    });

    let divider = this._herosData.length;

    newData.combat = Math.round(combat / divider).toString();
    newData.durability = Math.round(durability / divider).toString();
    newData.intelligence = Math.round(intelligence / divider).toString();
    newData.power = Math.round(power / divider).toString();
    newData.speed = Math.round(speed / divider).toString();
    newData.strength = Math.round(strength / divider).toString();

    return newData;
  }

  getHeroAppereance() {
    let newData = <Appearance>{};

    let height = 0;
    let weight = 0;

    this._herosAppereance.forEach((value) => {
      if (value) {
        height += parseInt(value.height[1]);
        weight += parseInt(value.weight[1]);
      }
    });

    let divider = this._herosAppereance.length;
    //@ts-ignore
    newData.height = Math.round(height / divider).toString();
    //@ts-ignore
    newData.weight = Math.round(weight / divider).toString();

    return newData;
  }

  addHero(hero: Result) {
    let exists = false;
    let alignment = 0;
    let response = { alignment: '', exists: '' };
    for (var i = 0; i < this._heros.length; i++) {
      if (this._heros[i].id == hero.id) {
        exists = true;
      }
      if (this._heros[i].biography.alignment == hero.biography.alignment) {
        alignment++;
      }
    }
    if (!exists && alignment < 3) {
      this._heros.push(hero);
      this._herosData.push(hero.powerstats);
      this._herosAppereance.push(hero.appearance);
    } else {
      response.exists = 'Hero already exists on team';
    }

    if (alignment === 3) {
      response.alignment =
        'There are already too many ' + hero.biography.alignment + ' heros';
    }

    return { response };
  }

  searchName(name: string): Observable<Hero> {
    const url = `heroes/${this.token}/search/${name}`;
    return this.http.get<Hero>(url);
  }

  setHeroDetail(hero: Result) {
    this._heroDetail = hero;
  }

  getHeroDetail() {
    return { ...this._heroDetail };
  }

  removeHero(id: string) {
    this._heros.forEach((value, index) => {
      if (value.id === id) {
        this._heros.splice(index, 1);
      }
    });

    let newHerosData: Powerstats[] = [];
    this._heros.forEach((value, index) => {
      newHerosData.push(value.powerstats);
    });

    this._herosData = newHerosData;
  }
}
