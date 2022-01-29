import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Result, Hero } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root',
})
export class HerosService {
  token = environment.token;
  url = 'api';

  private _heros: Result[] = [];

  getHeros() {
    return this._heros;
  }

  addHero(hero: Result) {
    this._heros.push(hero);
  }

  constructor(private http: HttpClient) {}

  searchName(name: string): Observable<Hero> {
    const url = `heroes/${this.token}/search/${name}`;
    return this.http.get<Hero>(url);
  }
}
