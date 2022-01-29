import { Component, OnChanges, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';
import { Result } from '../../interfaces/interfaces';
import { HerosService } from '../../services/heros.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  heros: Result[] = [];

  constructor(
    private authService: AuthService,
    private herosService: HerosService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.heros = this.herosService.getHeros();
  }
}
