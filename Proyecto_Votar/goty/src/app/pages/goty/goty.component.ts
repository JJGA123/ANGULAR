import { Component, OnInit } from '@angular/core';
import { GameService } from '../../services/game.service';
import { Game } from '../../interfaces/interfaces';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-goty',
  templateUrl: './goty.component.html',
  styleUrls: ['./goty.component.css']
})
export class GotyComponent implements OnInit {

  juegos: Game[] = [];
  constructor(private gameService: GameService) { }

  ngOnInit(): void {
    this.gameService.getNominados()
      .subscribe(juegos => {
        console.log(juegos);
        this.juegos = juegos;
      });
  }


  votarJuego(juego: Game){
    this.gameService.votarJuego(juego.id).subscribe((resp: {ok: boolean, mensaje: string}) => {
      console.log(resp);
      if(resp.ok){
        Swal.fire(
          'Registro de voto exitoso!',
          resp.mensaje,
          'success'
        )
      } else {
        Swal.fire(
          'Ha ocurrido un error al votar!',
          'Intentelo más tarde.',
          'error'
        );
      }
      
    });
  }
}
