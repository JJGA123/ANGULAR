import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../../services/heroes-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-encontrados',
  templateUrl: './encontrados.component.html',
  styleUrls: ['./encontrados.component.css']
})
export class EncontradosComponent implements OnInit {

  heroes: Heroe[] = [];
  texto = '';
  constructor(private heroesService: HeroesService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(param => {
      this.heroes = this.heroesService.buscarHeroes(param['texto']);
      this.texto = param['texto'];
    })
  }

  verHeroe(index: number){
    this.router.navigate([ '/heroe',index ]);
  }
}
