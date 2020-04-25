import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroes-service.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Heroe[] = [];

  constructor(private heroesService: HeroesService,
              private router: Router) { }

  ngOnInit(): void {
    this.heroes = this.heroesService.getHeroes();
  }

  verHeroe(index: number){
    this.router.navigate([ '/heroe',index ]);
  }

}
