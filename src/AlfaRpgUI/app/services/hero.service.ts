import { Injectable } from '@angular/core';

import { Hero } from '../models/hero';
import { HEROES } from './mock-heroes';

@Injectable()
export class HeroService {
    getHeroes(): Hero[] {
        return HEROES;
    }

    getHeroesAsync(): Promise<Hero[]> {
        return Promise.resolve(HEROES);
    }

    getHeroesSlowly(): Promise<Hero[]> {
        return new Promise<Hero[]>(resolve =>
                setTimeout(resolve, 2000))
                .then(() => this.getHeroes());
    }

    getHero(id: number): Promise<Hero> {
        return this.getHeroesAsync()
                    .then(heroes => heroes.find(hero => hero.id === id));
        }
}