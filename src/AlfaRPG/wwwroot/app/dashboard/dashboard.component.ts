import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from '../models/hero';
import { HeroService } from '../services/hero.service';

@Component({
  moduleId: module.id,
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ 'dashboard.component.css' ],
})
export class DashboardComponent implements OnInit {

  heroes: Hero[] = [];

  constructor(
    private heroService: HeroService,
    private router: Router){}

  ngOnInit(): void {
    this.heroService.getHeroesSlowly()
      .then(heroes => this.heroes = heroes.slice(1, 5));
  }

  gotoDetail(hero: Hero): void { 
    let link = ['/detail', hero.id];
    this.router.navigate(link);
  }
}