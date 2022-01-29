import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Result } from '../../interfaces/interfaces';
import { HerosService } from '../../services/heros.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  heros?: Result[];

  noResults: boolean = false;

  showSpinner: boolean = false;

  constructor(private herosService: HerosService) {}

  ngOnInit(): void {}

  removeNoResults() {
    this.noResults = false;
  }

  getHeroByName(name: string) {
    this.showSpinner = true;
    this.herosService.searchName(name).subscribe((heros) => {
      console.log(heros.results);
      if (!heros.results) {
        this.noResults = true;
      } else {
        this.noResults = false;
      }
      this.heros = heros.results;
      this.showSpinner = false;
    });
  }
}
